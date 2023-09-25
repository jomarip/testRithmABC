import { H4 } from '@/styles';
import { TextField, styled } from '@mui/material';

export const StyledTextfield = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
  .MuiOutlinedInput-root {
    input {
      text-align: center;
      padding: 0;
      ::placeholder {
        color: var(--greyscale-300);
        opacity: 1;
      }
    }
    ${H4}
    border-radius: 12px;
    &:hover fieldset {
      border-color: transparent;
    }
    &.Mui-focused fieldset {
      border: 1px solid transparent;
    }
  }
`;
