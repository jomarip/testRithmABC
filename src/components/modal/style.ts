import { Dialog, Drawer, IconButton, styled } from '@mui/material';

import {
  BORDER_BLACK_WHITE_12,
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_CENTER,
} from '@/styles/globalStyles';
import { H2_REGULAR } from '@/styles/globalTypography';
import Icon from '../icon';
import { mediaQueries } from '@/styles/mediaQueries';

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: var(--Black);
    border-radius: 12px !important ;
    width: 544px;
    padding: 64px;
    ${BORDER_BLACK_WHITE_12}
  }
`;

export const Wrapper = styled('div')`
  border-radius: 20px;
  width: 100%;

  cursor: auto;
  ${mediaQueries.lessThan('sm')`
    width:unset;
  `}
`;
export const ChildWrapper = styled('div')`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
`;
export const TopWrapper = styled('div')`
  ${ROW_ALIGN_CENTER__SPACE_B}
  width: 100%;
  margin-bottom: 40px;

  ${mediaQueries.lessThan('sm')`
  margin-bottom: 24px;
  `}
`;

export const TopRightWrapper = styled('div')`
  ${ROW_CENTER}
  gap:16px;
`;

export const Title = styled('h1')`
  ${H2_REGULAR}
  color: var(--greyscale-800);

  ${mediaQueries.lessThan('sm')`
    font-size: 24px;
    line-height: 32px;
  `}//H3_REGULAR
`;

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: var(--Black);
    padding: 24px 32px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  padding: 0;
`;

export const StyledIcon = styled(Icon)`
  width: 16px;
  height: 16px;
`;
