import { useEffect, useState } from "react";

import axios from "axios";

import { toast, ToastContainer } from "react-toastify";

import { Header, Records, Tabela } from "./components";
import { Env } from "./env";

export interface IContact {
  id: number;
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

export const App = () => {
  const [contatos, setContatos] = useState<IContact[]>([]);

  useEffect(() => {
    axios.get(`${Env.URL_BASE}/listar`).then(result => {
      setContatos(result.data);
    });
  }, []);

  const addContact = async (data: Omit<IContact, "id">): Promise<void> => {
    try {
      const res = await axios.post(`${Env.URL_BASE}/criar`, data);
      setContatos([...contatos, res.data.contato]);

      if (res.status === 200) {
        toast.success(res.data.mensagem);
      } else {
        toast.error("Erro ao cadastrar contato");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar contato");
    }
  };

  const deleteContact = async (id: number): Promise<void> => {

  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Header />
      <Records handleAddContact={addContact} />
      <Tabela contatos={contatos} handleDeleteContact={deleteContact} />
    </>
  );
};