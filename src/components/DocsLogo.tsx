import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const DocsLogo = () => {
  const { siteConfig, i18n } = useDocusaurusContext();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={`${siteConfig.baseUrl ? `${siteConfig.baseUrl}/` : ""}${
          i18n.currentLocale !== i18n.defaultLocale
            ? `${i18n.currentLocale}/`
            : ""
        }img/logo.png`}
        style={{ width: 200 }}
      ></img>
    </div>
  );
};
