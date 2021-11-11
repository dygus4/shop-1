import React from 'react';
import { shallow } from 'enzyme';
import { BoxComponent } from './Box';

describe('Component Box', () => {
  it('should render without crashing', () => {
    const component = shallow(<BoxComponent />);
    expect(component).toBeTruthy();
  });
});
