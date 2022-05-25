import { h } from 'preact';

import 'material-components-web/dist/material-components-web.css';

const HotkeyListRow = function HotkeyListRow({ title, keys }) {
  const hotkeyShortcut = keys.map((key, index, keysArray) => (
    <span>
      <kbd>{key}</kbd>
      {keysArray.length === index + 1 ? '' : '+'}
    </span>
  ));
  return (
    <li className="mdc-deprecated-list-item option">
      <span className="mdc-deprecated-list-item__text">{title}</span>
      <div className="mdc-deprecated-list-item__meta mdc-switch">{hotkeyShortcut}</div>
    </li>
  );
};

export default HotkeyListRow;
