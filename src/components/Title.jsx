import { useEffect } from "react";

function Title(props) {
  useEffect(() => {
    document.title = props;
  }, [props]);
  return <>{props}</>;
}

export default Title;
