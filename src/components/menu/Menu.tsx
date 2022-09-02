import { ReactElement } from 'react';

import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import { Buttons } from 'components/menu/buttons/Buttons';
import { selectIsShowPopUp } from 'store/selectors';

export const Menu = (): ReactElement | null => {
  const isShowPopUp = useSelector(selectIsShowPopUp);

  const portal = document.getElementById('menu');
  if (portal && isShowPopUp) {
    return ReactDOM.createPortal(<Buttons />, portal);
  }
  return null;
};
