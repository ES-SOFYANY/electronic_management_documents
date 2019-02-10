import {connect} from 'react-redux';
import React, {Component} from "react";

class CategoriesContainer extends Component {
    render() {
        return (
            <h1>Categories</h1>
        );
    }

		componentDidMount() {
		}
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);