import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";

export const Records: React.FC = () => {
  return (
    <main className={`${common.container} ${styles.main}`}>
      <form>
        <section className={styles.fields}>
          <div className={styles.fieldsColumns}>
            <div className={styles.boxInput}>
              <label htmlFor="">Nome completo</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="">Nome completo</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="">Nome completo</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>
          </div>

          <div className={styles.fieldsColumns}>
            <div className={styles.boxInput}>
              <label htmlFor="">Nome completo</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="">Nome completo</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="">Nome completo</label>
              <input type="text" placeholder="Ex.: Kevin Alves Da Silva dasd" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <input type="checkbox" />
              <label>Número de celular possui Whatsapp</label>
            </div>

            <div>
              <input type="checkbox" />
              <label>Enviar notificações por SMS</label>
            </div>
          </div>

          <div>
            <input type="checkbox" />
            <label>Enviar notificações por E-mail</label>
          </div>
        </section>

        <button type="submit">
          Cadastrar contato
        </button>
      </form>
    </main>
  );
}