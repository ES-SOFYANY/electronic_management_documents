import React from 'react';
import HomeContainer from './HomeContainer';
import HomeComponent from './HomeComponent';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {document} from '../../constants/mocks';

Enzyme.configure({adapter: new Adapter()});

function setup(isLoading = false, documents = []) {
    const props = {
        isLoading: isLoading,
        documents: documents
    };
    const enzymeWrapper = shallow(<HomeComponent {...props} />);
    return {
        props,
        enzymeWrapper
    };
}

describe('Home component', () => {

    it('should render self and table should contain headers', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find('table').hasClass('table-hover')).toBe(true);
        expect(enzymeWrapper.find('table > thead tr > th').length).toBe(4);
        expect(enzymeWrapper.find('table > thead tr > th').first().text()).toBe('Name');
        expect(enzymeWrapper.find('table > thead tr > th').at(1).text()).toBe('Category');
        expect(enzymeWrapper.find('table > thead tr > th').at(2).text()).toBe('Date');
        expect(enzymeWrapper.find('table > thead tr > th').at(3).text()).toBe('download');
    });

    it('should be show loading element and hise table given state loading true ', () => {
        const {enzymeWrapper} = setup(true);
        expect(enzymeWrapper.find('p').hasClass('loading')).toBe(true);
        expect(enzymeWrapper.find('table').length).toBe(0);
    });

    it('table should be show table and tbody contain data when given documents', () => {
        const {enzymeWrapper} = setup(false, [document, document]);
        expect(enzymeWrapper.find('p.loading').length).toBe(0);
        expect(enzymeWrapper.find('table').length).toBe(1);
        expect(enzymeWrapper.find('table > tbody > tr').length).toBe(2);
        expect(enzymeWrapper.find('table > tbody > tr').first().find('tr > td').first().text()).toBe(document.name);
    });

    it('HomeContainer should render without crashing', () => {
        const component = shallow(<HomeContainer/>);
        expect(component.exists()).toEqual(true);
    });
});
