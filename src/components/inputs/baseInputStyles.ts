import {
  InputLabel,
  TextField,
  TextFieldProps,
  css,
  styled,
} from '@mui/material';
import { B2_Medium_Regular } from '../../styles';
import { COLUMN_ALIGN_START__JUSTIFY_CENTER } from '../../styles/globalStyles';
interface Action {
  component: React.ReactNode;
  onClick?: () => void;
}
export type InputProps = TextFieldProps & {
  toplabel?: string;
  touched: boolean | undefined;
  errormessage: string | undefined;
  className?: string;
  customsize?: 'small' | 'medium' | 'large';
  rightaction?: Action;
  leftaction?: Action;
};
export const Wrapper = styled('div')`
  width: 100%;
  ${COLUMN_ALIGN_START__JUSTIFY_CENTER}
`;
export const PlaceHolderStyle = {
  input: {
    '&::placeholder': {
      opacity: 1,
      color: 'var(--greyscale-400)',
    },
  },
};
export const Label = styled(InputLabel)<{ error?: boolean }>`
  ${B2_Medium_Regular}
  color:var(--greyscale-500);
  align-self: flex-start;
  margin-bottom: 8px;
  ${({ error }) =>
    error &&
    css`
      color: var(--error-600);
    `}
`;
export const StyledInput = styled(TextField)<
  TextFieldProps & { customsize?: 'small' | 'medium' | 'large' }
>`
  width: 100%;
  height: 56px;
  ${({ customsize }) => {
    switch (customsize) {
      case 'large':
        return css`
          input {
            padding: 0 16px;
            height: 56px;
            font-size: 16px;
          }
        `;
      case 'medium':
        return css`
          input {
            padding: 0 14px;
            height: 48px;
            font-size: 14px;
          }
        `;
      case 'small':
        return css`
          input {
            padding: 0 12px;
            height: 40px;
            font-size: 14px;
          }
        `;
      default:
        break;
    }
  }}
  .MuiOutlinedInput-root {
    border-radius: 12px;
    &:hover fieldset {
      border-color: var(--greyscale-300);
    }
    &.Mui-focused fieldset {
      border: 1px solid var(--greyscale-600);
    }
    &.Mui-error fieldset {
      border-color: var(--error-500);
    }
  }
  .MuiFormHelperText-root.Mui-error {
    ${B2_Medium_Regular}
    align-self:flex-start;
    color: var(--error-600);
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: var(--greyscale-100);
  }

  font-weight: 400;
  font-size: 15px;
`;
