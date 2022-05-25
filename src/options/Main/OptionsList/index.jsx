import { Component, h } from 'preact';
import DefaultModeSelection from './DefaultModeSelection.jsx';
import OnlyShowSearchBarSelector from './OnlyShowSearchBarSelector.jsx';
import ShowSakaHotkeys from './ShowSakaHotkeys.jsx';
import EnableFuzzySearch from './EnableFuzzySearch.jsx';

export default class OptionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      mode: 'tab',
      showEmptySearchSuggestions: true,
      enableFuzzySearch: true
    };
  }

  async componentDidMount() {
    const sakaSettings = await this.fetchSakaSettings();
    this.setState(sakaSettings);
  }

  fetchSakaSettings = async function fetchSakaSettings() {
    const { sakaSettings } = await browser.storage.sync.get(['sakaSettings']);

    if (sakaSettings !== undefined) {
      return {
        isLoading: false,
        mode: sakaSettings.mode,
        showEmptySearchSuggestions: sakaSettings.showEmptySearchSuggestions,
        enableFuzzySearch: sakaSettings.enableFuzzySearch
      };
    }

    return {
      isLoading: false
    };
  };

  handleOptionsSave = () => {
    const settingsStore = {
      mode: this.state.mode,
      showEmptySearchSuggestions: this.state.showEmptySearchSuggestions,
      enableFuzzySearch: this.state.enableFuzzySearch
    };

    browser.storage.sync.set({ sakaSettings: settingsStore });
  };

  handleModeChange = e => {
    this.setState({
      mode: e.target.value
    });
  };

  handleShowSearchSuggestionsChange = () => {
    this.setState({
      showEmptySearchSuggestions: !this.state.showEmptySearchSuggestions
    });
  };

  handleEnableFuzzySearch = () => {
    this.setState({
      enableFuzzySearch: !this.state.enableFuzzySearch
    });
  };

  render() {
    const { handleOpenSakaKeybindings } = this.props;

    if (!this.state.isLoading) {
      return (
        <div className="options-form">
          <div className="mdc-deprecated-list-group">
            <h3 className="mdc-deprecated-list-group__subheader">General Settings</h3>
            <ul className="mdc-deprecated-list mdc-deprecated-list--non-interactive mdc-deprecated-list--dense">
              <DefaultModeSelection
                handleModeChange={this.handleModeChange}
                mode={this.state.mode}
              />
              <li
                role="separator"
                className="mdc-deprecated-list-divider mdc-deprecated-list-divider--padded options-separator"
              />
              <OnlyShowSearchBarSelector
                checked={this.state.showEmptySearchSuggestions}
                handleShowSearchSuggestionsChange={
                  this.handleShowSearchSuggestionsChange
                }
              />
              <li
                role="separator"
                className="mdc-deprecated-list-divider mdc-deprecated-list-divider--padded options-separator"
              />
              <EnableFuzzySearch
                checked={this.state.enableFuzzySearch}
                handleEnableFuzzySearch={this.handleEnableFuzzySearch}
              />
              <li
                role="separator"
                className="mdc-deprecated-list-divider mdc-deprecated-list-divider--padded options-separator"
              />
              <ShowSakaHotkeys
                handleOpenSakaKeybindings={handleOpenSakaKeybindings}
              />
              <li
                role="separator"
                className="mdc-deprecated-list-divider mdc-deprecated-list-divider--padded options-separator"
              />
            </ul>
          </div>
          <div dir="rtl" className="options-save">
            <input
              type="submit"
              value="Save"
              className="mdc-button mdc-button--raised options-save-button"
              onClick={this.handleOptionsSave}
            />
          </div>
        </div>
      );
    }
    return <div />;
  }
}
