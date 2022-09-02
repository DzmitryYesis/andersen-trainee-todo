import { ReactElement } from 'react';

// @ts-ignore
import style from './Buttons.module.css';

export const Buttons = (): ReactElement => (
  <div className={style.menu}>
    <button type="button">In Work</button>
    <button type="button">Favourite</button>
    <button type="button">Edit</button>
    <button type="button">Cancel</button>
  </div>
);
