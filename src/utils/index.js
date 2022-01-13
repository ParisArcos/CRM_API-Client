import { useLocation } from "react-router-dom";

export const GetIdFromURL = () => {
  const pathname = useLocation();
  const pathSplit = pathname.split("/");
  const id = pathSplit[pathSplit.length - 1];
  return id;
};
