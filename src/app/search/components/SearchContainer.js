import {connect} from 'react-redux';
import React, {Component} from "react";

class SearchContainer extends Component {
    render() {
        return (
						<h1>Search</h1>
        );
    }

    componentDidMount() {
    }
}

const mapStateToProps = (state) => {
    const {categories, isLoading} = state;
    return {
				categories,
        isLoading
    }
};

const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);