

import React from 'react';
import { shallow, mount} from 'enzyme';

import App from '../../src/App';

describe('App', ()=>{
    it('renders hello world', ()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').text()).toContain('Hello world')
    });
});