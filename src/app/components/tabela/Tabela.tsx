import styles from "./Styles.module.css";
import common from "../../styles/Common.module.css";

import editar from "../../assets/editar.png";
import excluir from "../../assets/excluir.png";
import { IContact } from "../../App";

interface ITabelaProps {
  contatos: IContact[];
  handleDeleteContact: (id: number) => void;
}

export const Tabela: React.FC<ITabelaProps> = ({ contatos, handleDeleteContact }) => {
  return (
    <section className={`${common.container} ${styles.secaoTabelaContatos}`}>
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
              <td>03/10/2013</td>
              <td>{contato.email}</td>
              <td>{contato.celular}</td>
              <td className={styles.imgCell}>
                <img src={editar} alt="Editar" title="Editar" />
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
    </section>
  );
};