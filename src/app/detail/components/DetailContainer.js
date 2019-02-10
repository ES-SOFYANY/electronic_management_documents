import {connect} from 'react-redux';
import React, {Component} from "react";

class DetailContainer extends Component {
    render() {
        return (
						<h1>Detail</h1>
        );
    }

    componentDidMount() {
    }
}

const mapStateToProps = () => {
    return {
    }
};

const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);