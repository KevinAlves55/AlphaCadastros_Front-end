import { useEffect, useState } from "react";

import axios from "axios";
import Modal from "react-modal";

import { toast, ToastContainer } from "react-toastify";

import { Footer, Header, ModalContactUpdate, Records, Table } from "./components";
import { Env } from "./env";

export interface IContact {
  id: number;
  nome: string,
  email: string,
  telefone: string,
  dataDeNascimento: Date,
  profissao: string,
  celular: string,
  possuiWhatsapp: number,
  notificacoesSMS: number,
  notificacoesEmail: number
}

Modal.setAppElement("#root");

export const App = () => {
  const [contatos, setContatos] = useState<IContact[]>([]);
  const [editingContact, setEditingContact] = useState<IContact>({} as IContact);
  const [isModalContactUpdate, setIsModalContactUpdate] = useState(false);

  useEffect(() => {
    axios.get(`${Env.URL_BASE}/listar`).then(result => {
      setContatos(result.data);
    });
  }, []);

  const handleEditFood = async (data: IContact) => {
    setEditingContact(data);
    setIsModalContactUpdate(true);
  };

  const handleCloseModalContactUpdate = () => {
    setIsModalContactUpdate(false);
  };

  const addContact = async (data: Omit<IContact, "id">): Promise<void> => {
    try {
      const res = await axios.post(`${Env.URL_BASE}/criar`, data);
      setContatos([...contatos, res.data.contato]);

      if (res.status === 201) {
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
    try {
      const res = await axios.delete(`${Env.URL_BASE}/deletar/${id}`);
      const dadosDeletado = contatos.filter(contato => contato.id !== id);

      setContatos(dadosDeletado);

      if (res.status === 200) {
        toast.success(res.data.mensagem);
      } else {
        toast.error("Erro ao deletar contato");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar contato");
    }
  };

  const handleUpdateFood = async (data: Omit<IContact, "id">): Promise<void> => {
    try {
      const dataUpdate = {
        ...editingContact, ...data
      }
      const res = await axios.put(`${Env.URL_BASE}/atualizar/${editingContact.id}`, dataUpdate);

      const contactsUpdated = contatos.map(contato =>
        contato.id !== res.data.contato.id ? contato : res.data.contato,
      );
      setContatos(contactsUpdated);

      if (res.status === 200) {
        toast.success(res.data.mensagem);
      } else {
        toast.error("Erro ao atualizar contato");
      }
    } catch (error) {
      toast.error("Erro ao atualizar contato");
    }
  }

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Header />
      <Records handleAddContact={addContact} />
      <Table
        contatos={contatos}
        handleDeleteContact={deleteContact}
        handleEditFood={(contato) => handleEditFood(contato)}
      />
      <ModalContactUpdate
        isOpen={isModalContactUpdate}
        onRequestClose={handleCloseModalContactUpdate}
        editingContact={editingContact}
        handleUpdateFood={handleUpdateFood}
      />
      <Footer />
    </>
  );
};