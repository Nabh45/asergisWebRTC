import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeButtonClass } from '../actions/index';
import WebButtonPage from '../components/webButtonPage';

function mapStateToProps(state) {
    console.log('--------------inside map to state'+JSON.stringify(state))
    return {
        buttonClass: state.buttonClass.classButton
    }
}

function matchDispatchToProps(dispatch) {
    console.log('inside the match Dispatch Props++++++++++++++++++++++++')
    return bindActionCreators({
        changeButtonClass123: changeButtonClass
    }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(WebButtonPage);