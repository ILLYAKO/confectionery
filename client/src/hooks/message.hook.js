import { useCallback } from "react";
import { Toast } from "../component/ToastW";

export const useMessage = () => {
  return useCallback((text) => {
    if (text) {
      console.log("useMessage.text:", text);
      return <Toast></Toast>;

      // window.M.toast({ html: text });
    }
  }, []);
};
