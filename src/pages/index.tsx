import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="/img/logo.png" style={{ width: 200 }}></img>
        </div>
        <div style={{ marginTop: "1em" }}>Welcome to</div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://www.initcloud.io/iacdog/visualizer"
          >
            Goto IaCDOG 🔥
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            IaCDOG Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>{/* somthin */}</main>
    </Layout>
  );
}
