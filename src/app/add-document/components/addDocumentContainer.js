import {connect} from 'react-redux';
import AddDocumentComponent from './addDocumentComponent';
import React, {Component} from "react";
import Actions from '../actions/AddDocumentActions';

class AddDocumentContainer extends Component {
    render() {
        return (
            <AddDocumentComponent
                document={this.props.document}
                file={this.props.file}
                changeFieldDocument={this.props.changeFieldDocument}
                changeFileDocument={this.props.changeFileDocument}
                postDocument={this.props.postDocument}/>
        );
    }
}

const mapStateToProps = (state) => {
    const {document, file} = state.AddDocumentReducer;
    return {
        document,
        file
    };
};

const mapDispatchToProps = {
    postDocument: Actions.postDocument,
    changeFieldDocument: Actions.changeFieldDocument,
    changeFileDocument: Actions.changeFileDocument
};


export default connect(mapStateToProps, mapDispatchToProps)(AddDocumentContainer);

