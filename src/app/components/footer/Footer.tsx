import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";

import logoFooter from "../../assets/logo_rodape_alphacode.png";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} ${common.container}`}>
        <strong>Termos | Políticas</strong>

        <div>
          <span>© Copyrigth 2022 | Desenvolvido por</span>
          <img src={logoFooter} alt="Logo" title="Alphacode" />
        </div>

        <strong>©Alphacode IT Solutions 2022</strong>
      </div>
    </footer>
  );
};