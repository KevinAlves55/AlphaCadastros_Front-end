import { InputPatternFormat } from "./components/InputPatternFormat";
import { TextField } from "./components/TextField";
import { Checkbox } from "./components/Checkbox";

import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";

export const Records: React.FC = () => {
  return (
    <main className={`${common.container} ${styles.main}`}>
      <form>
        <header className={styles.fields}>
          <div className={styles.fieldsColumns}>
            <TextField
              label="Nome completo"
              placeholder="Ex.: Alguma coisa super bacana"
              type="text"
            />
            <TextField
              label="E-mail"
              placeholder="Ex.: Alguma coisa super bacana"
              type="email"
            />
            <InputPatternFormat
              format="(##) ####-####"
              mask="_"
              label="Telefone para contato"
              placeholder="Ex.:(11) 4547-7841"
              valueIsNumericString
            />
          </div>

          <div className={styles.fieldsColumns}>
            <TextField
              label="Data de nascimento"
              type="date"
            />
            <TextField
              label="Profissão"
              type="text"
              placeholder="Ex.: Alguma coisa super bacana"
            />
            <InputPatternFormat
              format="(##) #####-####"
              mask="_"
              label="Celular para contato"
              placeholder="Ex.:(11) 99116-5873"
              valueIsNumericString
            />
          </div>
        </header>

        <section className={styles.checkboxFields}>
          <div className={styles.checkboxFieldsColumn}>
            <Checkbox label="Número de celular possui Whatsapp" />
            <Checkbox label="Enviar notificações por SMS" />
          </div>

          <div className={styles.checkboxFieldsColumn}>
            <div className={styles.checkboxItem}>
              <Checkbox label="Enviar notificações por E-mail" />
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