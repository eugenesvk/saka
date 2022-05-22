import { h } from 'preact';
import {
  render,
  cleanup,
  waitFor,
  fireEvent
  // flushPromises
} from '@testing-library/preact';
import '@testing-library/jest-dom/extend-expect';
import Main from '@/saka/Main/index.jsx';

const flushPromises = () => new Promise(process.nextTick);

beforeEach(() => {
  browser.flush();
  // browser.storage.sync.get.returns({
  //   sakaSettings: {
  //     mode: 'tab',
  //     showEmptySearchSuggestions: false
  //   },
  //   searchHistory: []
  // });
  browser.storage.local.get.resolves(
    Promise.resolve({
      screenshot:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAPWCAYAAAABOoU/AAAgAElEQVR4nOzdeXzbd2H/8e9XcqDOXdrC2OAH/W1l49rooMAgvQsbg0F}'
    })
  );
  browser.storage.local.remove.returns('');
  browser.runtime.sendMessage.returns('');
});

test('should show all options when not showing key bindings', async () => {
  render(<Main />);
});

afterEach(cleanup);
