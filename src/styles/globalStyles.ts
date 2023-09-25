import { css } from '@mui/material';
export const ROW = css`
  display: flex;
  flex-direction: row;
`;
export const COLUMN = css`
  display: flex;
  flex-direction: column;
`;
const CENTER = css`
  align-items: center;
  justify-content: center;
`;
export const COLUMN_CENTER = css`
  ${CENTER}
  ${COLUMN}
`;
export const ROW_CENTER = css`
  ${CENTER}
  ${ROW}
`;
export const COLUMN_JUSTIFY_END__ALIGN_CENTER = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: center;
`;
export const COLUMN_JUSTIFY_START__ALIGN_CENTER = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: center;
`;
export const COLUMN_ALIGN_END__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_START__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_END__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_CENTER__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: center;
`;

// ROWS

export const ROW_JUSTIFY_END__ALIGN_CENTER = css`
  ${ROW}
  justify-content: flex-end;
  align-items: center;
`;
export const ROW_JUSTIFY_START__ALIGN_CENTER = css`
  ${ROW}
  justify-content: flex-start;
  align-items: center;
`;
export const ROW_ALIGN_END__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-start;
`;
export const ROW_ALIGN_START__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ROW_ALIGN_END__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-start;
`;
export const ROW_ALIGN_CENTER__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: center;
`;
export const FULL_WIDTH = css`
  width: 100%;
`;
export const FULL_HEIGHT = css`
  height: 100%;
`;
export const UNSELECTABLE = css`
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
`;
export const BUTTON = css`
  ${UNSELECTABLE}
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

export const BORDER_BLACK_WHITE_4 = css`
  position: relative;
  z-index: 3;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
    padding: 1.3px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.25)
    );
    -webkit-mask:
      linear-gradient(var(--White) 0 0) content-box,
      linear-gradient(var(--White) 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const BORDER_BLACK_WHITE_8 = css`
  position: relative;
  z-index: 3;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 1.3px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.25)
    );
    -webkit-mask:
      linear-gradient(var(--White) 0 0) content-box,
      linear-gradient(var(--White) 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const BORDER_BLACK_WHITE_12 = css`
  position: relative;
  z-index: 3;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1.3px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.25)
    );
    -webkit-mask:
      linear-gradient(var(--White) 0 0) content-box,
      linear-gradient(var(--White) 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const BORDER_BLACK_WHITE_16 = css`
  position: relative;
  z-index: 3;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1.3px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.25)
    );
    -webkit-mask:
      linear-gradient(var(--White) 0 0) content-box,
      linear-gradient(var(--White) 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const HIDE_SCROLLBAR_BUT_ALLOW_SCROLLING = css`
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
