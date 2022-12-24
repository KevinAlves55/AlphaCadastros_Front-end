import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";

import logo from "../../assets/logo_alphacode.png";

export const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${common.container} ${styles.adjust}`}>
        <img src={logo} alt="logo" title="Alphacode cadastros" />
        <h1>Cadastros de contatos</h1>
      </div>
    </header>
  );
};