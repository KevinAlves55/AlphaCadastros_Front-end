import { format } from "date-fns";

import { IContact } from "../../App";

import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";

import editar from "../../assets/editar.png";
import excluir from "../../assets/excluir.png";

interface ITabelaProps {
  contatos: IContact[];
  handleDeleteContact: (id: number) => void;
  handleEditFood: (id: number) => void;
}

export const Table: React.FC<ITabelaProps> = ({ contatos, handleDeleteContact, handleEditFood }) => {
  return (
    <section className={`${common.container} ${styles.secaoTabelaContatos}`}>
      {contatos.length > 0 && (
        <table className={styles.tableContainer}>
          <thead className={styles.headerTable}>
            <tr>
              <td>Nome</td>
              <td>Data de nascimento</td>
              <td>E-mail</td>
              <td>Celular para contato</td>
              <td>Ações</td>
            </tr>
          </thead>

          <tbody className={styles.bodyTable}>
            {contatos.map(contato => (
              <tr key={contato.id}>
                <td>{contato.nome}</td>
                <td>{new Intl.DateTimeFormat("pt-BR").format(
                  new Date(contato.dataDeNascimento)
                )}</td>
                <td>{contato.email}</td>
                <td>{contato.celular}</td>
                <td className={styles.imgCell}>
                  <img
                    src={editar}
                    alt="Editar"
                    title="Editar"
                    onClick={() => handleEditFood(contato.id)}
                  />
                  <img
                    src={excluir}
                    alt="Excluir"
                    title="Excluir"
                    onClick={() => handleDeleteContact(contato.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};