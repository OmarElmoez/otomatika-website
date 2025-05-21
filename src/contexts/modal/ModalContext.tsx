import { createContext, ReactNode, useState } from "react";
import { TModal } from "./modalTypes.ts";

export const ModalContext = createContext<TModal | undefined>({
  open: false,
  closeModal: () => {},
  openModal: () => {}
});

const ModalProvider = ({children}: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <ModalContext.Provider value={{open, closeModal, openModal}}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;