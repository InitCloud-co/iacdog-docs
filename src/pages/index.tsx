import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`${
              i18n.currentLocale !== i18n.defaultLocale
                ? "/" + i18n.currentLocale
                : ""
            }/img/logo.png`}
            style={{ width: 200 }}
          ></img>
        </div>
        <Heading as="h1" className="hero__title" style={{ marginTop: "1em" }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="https://www.initcloud.io/iacdog/visualizer"
          >
            Docs
          </Link>
          <Link
            className="button button--primary button--lg"
            to="https://www.initcloud.io/iacdog/visualizer"
          >
            <Translate>Goto IaCDOG</Translate> 🔥
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
