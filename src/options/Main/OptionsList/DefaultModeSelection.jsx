import { h } from 'preact';

// import { Component, h } from 'preact';


const DefaultModeSelection = function DefaultModeSelection({
  mode,
  handleModeChange
}) {
  return (
    <li className="mdc-deprecated-list-item option">
      <span className="mdc-deprecated-list-item__text">
        Default Mode
        <span className="mdc-deprecated-list-item__secondary-text">
          Select the default mode Saka opens with
        </span>
      </span>
      <div className="mdc-select mdc-deprecated-list-item__meta">
        <select
          value={mode}
          id="defaultModeSelect"
          aria-label="Select default mode"
          className=" mdc-select__native-control"
          onChange={handleModeChange}
        >
          <option value="tab" selected="">
            Tabs
          </option>
          <option value="closedTab" selected="">
            Recently Closed
          </option>
          <option value="bookmark" selected="">
            Bookmarks
          </option>
          <option value="history" selected="">
            History
          </option>
          <option value="recentlyViewed" selected="">
            Recently Viewed
          </option>
          <option value="mode" selected="">
            Modes
          </option>
        </select>
      </div>
    </li>
  );
};

export default DefaultModeSelection;
