import React from 'react';
import AddDocumentContainer from './addDocumentContainer';
import AddDocumentComponent from './addDocumentComponent';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {document} from '../../constants/mocks';

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const props = {
        postDocument: jest.fn(),
        changeFieldDocument: jest.fn(),
        changeFileDocument: jest.fn(),
        document
    };
    const enzymeWrapper = shallow(<AddDocumentComponent {...props} />);
    return {
        props,
        enzymeWrapper
    };
}

describe('AddDocumentComponent', () => {

    it('AddDocumentContainer should render without crashing', () => {
        const component = shallow(<AddDocumentContainer/>);
        expect(component.exists()).toEqual(true);
    });

    it('should render self, contain form and all inputs', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find('form').hasClass('form')).toBe(true);
        expect(enzymeWrapper.find('#name-document-input').props().placeholder).toBe('Enter name');
        expect(enzymeWrapper.find('#category-document-input').props().placeholder).toBe('Enter Category');
        expect(enzymeWrapper.find('#date-document-input').props().dateFormat).toBe('dd/MM/yyyy');
        expect(enzymeWrapper.find('#expired-date-document-input').props().dateFormat).toBe('dd/MM/yyyy');
        expect(enzymeWrapper.find('#document-input').props().type).toBe('file');
        expect(enzymeWrapper.find('#expired-document-input').props().type).toBe('checkbox');
        expect(enzymeWrapper.find('#decription-document-input').is("textarea")).toBe(true);
        expect(enzymeWrapper.find('button').exists()).toBe(true);
    });

    it('should call postDocument when submit form', () => {
        const {enzymeWrapper, props} = setup();
        const form = enzymeWrapper.find('form').first();
        form.simulate(
            'submit',
            {
                preventDefault() {
                }
            }
        );
        expect(props.postDocument.mock.calls.length).toBe(1);
    });

    it('should call changeFieldDocument when change field', () => {
        const {enzymeWrapper, props} = setup();
        const component = enzymeWrapper.find('#name-document-input').first();
        component.simulate(
            'change',
            {target: {value: 'facture'}}
        );
        expect(props.changeFieldDocument.mock.calls[0][0]).toEqual('name');
        expect(props.changeFieldDocument.mock.calls[0][1]).toEqual('facture');
    });

});
