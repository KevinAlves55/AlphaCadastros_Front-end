import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";
import { InputModel } from "./components/InputModel";

export const Records: React.FC = () => {
  return (
    <main className={`${common.container} ${styles.main}`}>
      <form>
        <header className={styles.fields}>
          <div className={styles.fieldsColumns}>
            <InputModel label="Nome completo" placeholder="Ex.: Alguma coisa super bacana" />
            <InputModel label="E-mail" placeholder="Ex.: Alguma coisa super bacana" />
            <InputModel label="Telefone para contato" placeholder="Ex.: Alguma coisa super bacana" />
          </div>

          <div className={styles.fieldsColumns}>
            <InputModel label="Data de nascimento" placeholder="Ex.: Alguma coisa super bacana" />
            <InputModel label="Profissão" placeholder="Ex.: Alguma coisa super bacana" />
            <InputModel label="Celular para contato" placeholder="Ex.: Alguma coisa super bacana" />
          </div>
        </header>

        <section className={styles.checkboxFields}>
          <div className={styles.checkboxFieldsColumn}>
            <div className={styles.checkboxItem}>
              <input type="checkbox" />
              <label>Número de celular possui Whatsapp</label>
            </div>

            <div className={styles.checkboxItem}>
              <input type="checkbox" />
              <label>Enviar notificações por SMS</label>
            </div>
          </div>

          <div className={styles.checkboxFieldsColumn}>
            <div className={styles.checkboxItem}>
              <input type="checkbox" />
              <label>Enviar notificações por E-mail</label>
            </div>
          </div>
        </section>

        <button type="submit" className={styles.cadastrarContato}>
          Cadastrar contato
        </button>
      </form>
    </main>
  );
}