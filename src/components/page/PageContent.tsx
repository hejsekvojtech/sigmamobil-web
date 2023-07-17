import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../../data/Navigation";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

function PageTitle(currPath: string) {
  navigation.forEach((item) => {
    if (currPath === item.href) {
      return (document.title = "SIGMA ΣOBIL | " + item.name);
    }
  });
}

type Props = { children: any };

function PageContent({ children }: Props) {
  const location = useLocation();

  useEffect(() => PageTitle(location.pathname), [location]);

  return (
    <>
      <div className="container">
        <Breadcrumbs currPath={location.pathname} dividerSymbol="/" />
      </div>
      <div className="min-h-screen">{children}</div>
    </>
  );
}

export default PageContent;
