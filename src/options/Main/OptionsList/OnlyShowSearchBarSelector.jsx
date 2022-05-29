import { h } from 'preact';

const OnlyShowSearchBarSelector = function OnlyShowSearchBarSelector() {
  const { checked, handleShowSearchSuggestionsChange } = this.props;
  return (
    <li className="mdc-deprecated-list-item option">
      <span className="mdc-deprecated-list-item__text">
        Suggestions on load
        <span className="mdc-deprecated-list-item__secondary-text">
          Show suggestions when there is no text is the Saka search bar
        </span>
      </span>
      <div className="mdc-deprecated-list-item__meta mdc-deprecated-switch">
        <input
          type="checkbox"
          id="basic-switch"
          className="mdc-deprecated-switch__native-control"
          aria-label="Suggestions on load"
          checked={checked}
          onChange={handleShowSearchSuggestionsChange}
        />
        <div className="mdc-deprecated-switch__background">
          <div className="mdc-deprecated-switch__knob" />
        </div>
      </div>
    </li>
  );
};

export default OnlyShowSearchBarSelector;
