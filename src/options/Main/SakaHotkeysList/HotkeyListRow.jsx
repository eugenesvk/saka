import { h } from 'preact';

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
      <div className="mdc-deprecated-list-item__meta">{hotkeyShortcut}</div>
    </li>
  );
};

export default HotkeyListRow;
