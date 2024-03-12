import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const DocsLogo = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/" style={{ margin: "10px" }}>
        <img
          src={`${
            siteConfig.baseUrl ? `${siteConfig.baseUrl}/` : ""
          }img/logo.png`}
          style={{ maxWidth: 200 }}
        />
      </Link>
    </div>
  );
};
