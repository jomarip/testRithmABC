import { ReactElement } from 'react';
import { toast } from 'react-toastify';
import './styles.css';

export const customToast = {
  success(msg: ReactElement | string, options = {}) {
    return toast.success(msg, {
      ...options,
      className: 'toast-success-container ',
    });
  },
  error(msg: ReactElement | string, options = {}) {
    return toast.error(msg, {
      ...options,
      className: 'toast-error-container',
    });
  },
};
