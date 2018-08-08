import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/home/Layout';

describe('home/Layout', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Layout {...props} />
    );

    expect(
      renderedComponent.find('.home-layout').length
    ).toBe(1);
  });
});
