import { FormEvent, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

import { InputPatternFormat } from "./components/InputPatternFormat";
import { TextField } from "./components/TextField";
import { Checkbox } from "./components/Checkbox";

import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";
import { Env } from "../../env";

export const Records: React.FC = () => {
  const [dataDeNascimento, setDataDeNascimento] = useState("");
  const [possuiWhatsapp, setPossuiWhatsapp] = useState(0);
  const [notificacoesSMS, setNotificacoesSMS] = useState(0);
  const [notificacoesEmail, setNotificacoesEmail] = useState(0);

  const handleRegistrationContact = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const res = await axios.post(`${Env.URL_BASE}/criar`, {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        dataDeNascimento: dataDeNascimento,
        profissao: data.profissao,
        celular: data.celular,
        possuiWhatsapp: possuiWhatsapp,
        notificacoesSMS: notificacoesSMS,
        notificacoesEmail: notificacoesEmail
      });

      if (res.status === 200) {
        toast.success(res.data.dados);
      }

    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar um contato");
    }
  };

  return (
    <main className={`${common.container} ${styles.main}`}>
      <form onSubmit={handleRegistrationContact}>
        <header className={styles.fields}>
          <div className={styles.fieldsColumns}>
            <TextField
              label="Nome completo"
              placeholder="Ex.: Alguma coisa super bacana"
              type="text"
              name="nome"
              required
              maxLength={50}
              style={{ textTransform: "capitalize" }}
            />
            <TextField
              label="E-mail"
              placeholder="Ex.: Alguma coisa super bacana"
              type="email"
              name="email"
              required
              maxLength={150}
            />
            <InputPatternFormat
              format="(##) ####-####"
              mask="_"
              label="Telefone para contato"
              placeholder="Ex.:(11) 4547-7841"
              valueIsNumericString
              name="telefone"
              required
            />
          </div>

          <div className={styles.fieldsColumns}>
            <TextField
              label="Data de nascimento"
              type="date"
              onChange={(e) => setDataDeNascimento(e.target.value)}
              value={dataDeNascimento}
              name="dataDeNascimento"
              required
            />
            <TextField
              label="Profissão"
              type="text"
              placeholder="Ex.: Alguma coisa super bacana"
              name="profissao"
              required
              maxLength={100}
            />
            <InputPatternFormat
              format="(##) #####-####"
              mask="_"
              label="Celular para contato"
              placeholder="Ex.:(11) 99116-5873"
              valueIsNumericString
              name="celular"
              required
            />
          </div>
        </header>

        <section className={styles.checkboxFields}>
          <div className={styles.checkboxFieldsColumn}>
            <Checkbox
              label="Número de celular possui Whatsapp"
              type="checkbox"
              checked={Boolean(possuiWhatsapp)}
              onChange={(e) => setPossuiWhatsapp(Number(e.target.checked))}
            />
            <Checkbox
              label="Enviar notificações por SMS"
              type="checkbox"
              checked={Boolean(notificacoesSMS)}
              onChange={(e) => setNotificacoesSMS(Number(e.target.checked))}
            />
          </div>

          <div className={styles.checkboxFieldsColumn}>
            <div className={styles.checkboxItem}>
              <Checkbox
                label="Enviar notificações por E-mail"
                type="checkbox"
                checked={Boolean(notificacoesEmail)}
                onChange={(e) => setNotificacoesEmail(Number(e.target.checked))}
              />
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