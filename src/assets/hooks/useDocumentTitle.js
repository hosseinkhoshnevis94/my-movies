import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title || "My Movies"}`;
    return () => {
      document.title = "My Movies";
    };
  }, [title]);
};

export default useDocumentTitle;
