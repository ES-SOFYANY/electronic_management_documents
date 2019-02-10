import {connect} from 'react-redux';
import HomeComponent from './HomeComponent';
import React, {Component} from "react";
import Actions from '../actions/HomeActions';

class HomeContainer extends Component {
    render() {
        return (
            <HomeComponent
                documents={this.props.documents}
                isLoading={this.props.isLoading}/>
        );
    }

    componentDidMount() {
        this.props.requestDocumentsData();
    }
}

const mapStateToProps = (state) => {
    const {documents, isLoading} = state.HomeReducer;
    return {
        documents,
        isLoading
    }
};

const mapDispatchToProps = {
    requestDocumentsData: Actions.requestDocumentsData
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);