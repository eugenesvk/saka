import { h } from 'preact';

const EnableFuzzySearch = function EnableFuzzySearch() {
  const { checked, handleEnableFuzzySearch } = this.props;
  return (
    <li className="mdc-deprecated-list-item option">
      <span className="mdc-deprecated-list-item__text">
        Enable fuzzy search
        <span className="mdc-deprecated-list-item__secondary-text">
          Enable fuzzy search for bookmarks and history search
        </span>
      </span>
      <div className="mdc-deprecated-list-item__meta mdc-deprecated-switch">
        <input
          type="checkbox"
          id="basic-switch"
          aria-label="Enable fuzzy search"
          className="mdc-deprecated-switch__native-control"
          checked={checked}
          onChange={handleEnableFuzzySearch}
        />
        <div className="mdc-deprecated-switch__background">
          <div className="mdc-deprecated-switch__knob" />
        </div>
      </div>
    </li>
  );
};

export default EnableFuzzySearch;
