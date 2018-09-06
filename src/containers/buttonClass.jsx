import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeButtonClass } from '../actions/index';
import WebButtonPage from '../components/webButtonPage';
import {createStore} from 'redux';

function mapStateToProps(state) {
    return {
        buttonClass: state.buttonClass.classButton
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        handleChangeButton: changeButtonClass
    }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(WebButtonPage);