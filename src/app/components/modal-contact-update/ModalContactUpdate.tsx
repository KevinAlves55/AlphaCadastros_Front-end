import Modal from "react-modal";

interface IModalContactUpdateProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ModalContactUpdate: React.FC<IModalContactUpdateProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      Conteúdo da tabela
    </Modal>
  );
};