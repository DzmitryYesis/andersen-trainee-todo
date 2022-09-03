import { ReactElement } from 'react';

import './Button.css';
import { ButtonTypeProps } from 'types';

export const Button = ({ title, onClick, style }: ButtonTypeProps): ReactElement => (
  <button
    type="button"
    className={style ? 'customButtonActive' : 'customButton'}
    onClick={onClick}
  >
    {title}
  </button>
);
