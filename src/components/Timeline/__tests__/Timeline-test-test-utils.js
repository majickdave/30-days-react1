import React from 'react';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test file
import { shallow, mount, render } from 'enzyme';

import Timeline from '../Timeline';

describe('Timeline', () => {

  it('wraps content in a div with .notificationsFrame class', () => {
    const wrapper = shallow(<Timeline />);
    expect(wrapper.find('.notificationsFrame').length).toEqual(1);
  });

})
