import { ToastContainer } from "react-toastify";

import { Header, Records } from "./components";

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Header />
      <Records />
    </>
  );
};