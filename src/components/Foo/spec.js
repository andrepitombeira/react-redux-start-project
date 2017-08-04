import React from 'react';
import { shallow } from 'enzyme';
import Foo from './';

describe('<Foo />', () => {
  it('Renders the component with a `Bar` message', () => {
    const component = shallow(<Foo />);
    expect(component.text()).to.equal('Bar');
  });
});
