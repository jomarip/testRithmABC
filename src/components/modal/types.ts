export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  anchor?: 'bottom' | 'left' | 'right' | 'top';
}
