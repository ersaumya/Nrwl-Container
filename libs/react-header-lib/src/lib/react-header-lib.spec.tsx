import React from 'react';
import { render } from '@testing-library/react';

import ReactHeaderLib from './react-header-lib';

describe('ReactHeaderLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactHeaderLib />);
    expect(baseElement).toBeTruthy();
  });
});
