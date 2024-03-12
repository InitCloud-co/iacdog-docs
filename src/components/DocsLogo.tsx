import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const DocsLogo = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="flex justify-center">
      <Link to="/" className="m-2">
        <img
          src={`${
            siteConfig.baseUrl ? `${siteConfig.baseUrl}/` : ""
          }img/logo.png`}
          className=" max-w-[200px]"
        />
      </Link>
    </div>
  );
};
