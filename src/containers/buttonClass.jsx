import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeButtonClass } from '../actions/index';

class ButtonClass extends React.Component {
    render() {
        return (
            <div>
            <button onClick={() => this.props.changeButtonClass()}>{this.props.buttonClass.classButton}</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        buttonClass: state.buttonClass
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeButtonClass: changeButtonClass
    }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(ButtonClass);