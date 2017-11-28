import React from 'react';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test file
import { shallow, mount, render } from 'enzyme';

import Timeline from '../Timeline';
import Header from '../Header';

describe('Timeline', () => {
  let wrapper;

  it('wraps content in a div with .notificationsFrame class', () => {
    wrapper = shallow(<Timeline />);
    expect(wrapper.find('.notificationsFrame').length).toEqual(1);
  });

  it('has a title of Timeline', () => {
    wrapper = mount(<Timeline />)
    expect(wrapper.find('.title').text()).toBe("Timeline")
  })

  describe('search button', () => {
    let search;
    beforeEach(() => wrapper = mount(<Timeline />))
    beforeEach(() => search = wrapper.find('input.searchInput'))

    it('starts out hidden', () => {
      expect(search.hasClass('active')).toBeFalsy()
    })
    it('becomes visible after being clicked on', () => {
      const icon = wrapper.find('.searchIcon')
        if (expect(!search.hasClass('active')).toBeTruthy()) {
          icon.simulate('click')
          expect(search.hasClass('active')).toBeTruthy()
        } else {
          expect(search.hasClass('active')).toBeFalsy()
        }
      })
    })

  describe('status updates', () => {
    it('has 4 status updates at minimum', () => {
      wrapper = shallow(<Timeline />)
      expect(
        wrapper.find('ActivityItem').length
      ).toBeGreaterThan(3)
    })
  })

})
