import { useContext } from "react";
import { ModalContext } from "@/contexts/modal/ModalContext.tsx";


const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default useModal;