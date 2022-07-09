import { render } from '@testing-library/react';

import SearchingFeatureSearch from './searching-feature-search';

describe('SearchingFeatureSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchingFeatureSearch />);
    expect(baseElement).toBeTruthy();
  });
});
