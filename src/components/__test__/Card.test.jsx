import React from 'react';
import { describe, it, expect } from '@jest/globals';

import { shallow } from 'enzyme';
import CardGoal from '../Card/index';

describe('CardGoal component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<CardGoal />);
        expect(wrapper).toMatchSnapshot();
    });

    // Thêm các test case khác nếu cần
});