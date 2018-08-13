import React from 'react';
import { shallow } from 'enzyme';
import { MyCenter } from '../../../src/features/home/MyCenter';

describe('home/MyCenter', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MyCenter {...props} />
    );

    expect(
      renderedComponent.find('.home-my-center').length
    ).toBe(1);
  });
});
