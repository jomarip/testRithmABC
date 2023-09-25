import { styled } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CustomToastContainer = () => {
  return (
    <StyledToastContainer
      autoClose={5000}
      hideProgressBar
      icon={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

const StyledToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    position: absolute;
    top: 124px;
    right: 40px;
    width: 458px;
  }
  .Toastify__toast {
    background-color: var(--Neutrals-N800-75);
    padding: 24px;
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__progress-bar {
  }
`;
