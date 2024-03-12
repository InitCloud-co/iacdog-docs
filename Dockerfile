FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./

RUN yarn

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM nginx:1.21.5-alpine
WORKDIR /app

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 docusaurus

COPY --from=builder /app/build ./build
COPY --from=builder /app/build /usr/share/nginx/html/iacdog/docs

# CMD ["yarn", "serve", "--build", "--port", "80", "--host", "0.0.0.0"]

