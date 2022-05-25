import { h } from 'preact';
import { render, cleanup, flushPromises } from '@testing-library/preact';
import SearchBar from '@/saka/Main/Components/SearchBar/index';

afterEach(cleanup);

test('should be empty when no there is no search string provided', async () => {
  const props = {
    placeholder: 'Tabs',
    searchString: '',
    suggestion: {},
    mode: 'tab',
    onKeyDown() {},
    onInput() {},
    onBlur() {},
    onButtonClick() {}
  };

  const { container } = render(<SearchBar {...props} />);
  expect(container).toMatchSnapshot();
});

test('should show the search string when search string is provided', async () => {
  const props = {
    placeholder: 'Tabs',
    searchString: 'Saka github',
    suggestion: {},
    mode: 'tab',
    onKeyDown() {},
    onInput() {},
    onBlur() {},
    onButtonClick() {}
  };

  const { getByPlaceholderText } = render(<SearchBar {...props} />);

  expect(getByPlaceholderText('Tabs').value).toBe('Saka github');
});
