import { COLUMN_CENTER } from '@/styles/globalStyles';
import {
  Card,
  CardActionArea,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
  styled,
} from '@mui/material';
import { B2_Medium_Regular } from '../../../styles';

export const EyeIcon = styled('img')`
  width: 20px;
  height: 20px;
`;
export const Divider = styled('div')`
  width: 1px;
  background: var(--greyscale-100);
  height: 16px;
  margin-right: 11px;
`;
export const InputActionComponent = styled(CardActionArea)`
  color: 'var(--greyscale-500)';
  padding: 4px;
  ${COLUMN_CENTER}
  min-width:30px;
  min-height: 30px;
  border-radius: 100%;
`;
export const Label = styled(InputLabel)`
  ${B2_Medium_Regular}
  color:var(--greyscale-500);
  align-self: flex-start;
  margin-bottom: 8px;
`;
