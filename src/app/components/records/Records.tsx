import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";

export const Records: React.FC = () => {
  return (
    <main className={`${common.container} ${styles.main}`}>
      <form>
        <header className={styles.fields}>
          <div className={styles.fieldsColumns}>
            <div className={styles.boxInput}>
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="">E-mail</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="">Telefone para contato</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>
          </div>

          <div className={styles.fieldsColumns}>
            <div className={styles.boxInput}>
              <label htmlFor="">Data de nascimento</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="">Profissão</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="">Celular para contato</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>
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