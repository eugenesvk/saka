import { h } from 'preact';

import 'material-components-web/dist/material-components-web.css';

const ShowSakaHotkeys = function ShowSakaHotkeys({
  handleOpenSakaKeybindings
}) {
  return (
    <li className="mdc-deprecated-list-item option">
      <span className="mdc-deprecated-list-item__text">Saka Hotkeys</span>
      <div className="mdc-icon-button__ripple"></div>
      <i
        className="mdc-deprecated-list-item__meta mdc-icon-button material-icons"
        role="button"
        aria-pressed="false"
        aria-label="View Saka hotkeys"
        onClick={handleOpenSakaKeybindings}
      >
        keyboard
      </i>
    </li>
  );
};

export default ShowSakaHotkeys;
