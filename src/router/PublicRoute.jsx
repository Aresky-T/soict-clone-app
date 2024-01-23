import React, { useEffect } from "react";

const PublicRoute = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);

  return <>{props.children}</>;
};

export default PublicRoute;
