import React from 'react';
import { shallow } from 'enzyme';
import { MyTeam } from '../../../src/features/home/MyTeam';

describe('home/MyTeam', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MyTeam {...props} />
    );

    expect(
      renderedComponent.find('.home-my-team').length
    ).toBe(1);
  });
});
