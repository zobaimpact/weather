import * as React from 'react';
import { render } from '@testing-library/react';

import { Topdeals } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Topdeals  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Topdeals />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
