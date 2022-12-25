import { FormEvent, useRef, useState } from "react";

import axios from "axios";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { toast } from "react-toastify";

import { InputPatternFormat } from "./components/InputPatternFormat";
import { TextField } from "./components/TextField";
import { Checkbox } from "./components/Checkbox";

import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";
import { Env } from "../../env";

interface IDataForm {
  nome: string,
  email: string,
  telefone: string,
  dataDeNascimento: string,
  profissao: string,
  celular: string,
  possuiWhatsapp: number,
  notificacoesSMS: number,
  notificacoesEmail: number
}

interface IRecordsProps {
  handleAddContact: (data: IDataForm) => void;
}

export const Records: React.FC<IRecordsProps> = ({ handleAddContact }) => {
  const [possuiWhatsapp, setPossuiWhatsapp] = useState(0);
  const [notificacoesSMS, setNotificacoesSMS] = useState(0);
  const [notificacoesEmail, setNotificacoesEmail] = useState(0);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: IDataForm) => {
    const dataForm = {
      ...data,
      possuiWhatsapp: possuiWhatsapp,
      notificacoesSMS: notificacoesSMS,
      notificacoesEmail: notificacoesEmail
    }
    handleAddContact(dataForm);
  };

  return (
    <main className={`${common.container} ${styles.main}`}>
      <Form ref={formRef} onSubmit={(data) => handleSubmit(data)}>
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
      </Form>
    </main>
  );
}