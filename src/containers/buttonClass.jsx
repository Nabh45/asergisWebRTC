import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WebButtonPage from '../components/webButtonPage';

// class ButtonClass extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li>one</li>
//                 <li>two</li>
//                 <li>three</li>
//             </div>
//         )
//     }
// }

function mapStateToProps(state) {			 
    
    buttonClass: state.buttonClass
}

//export default connect(mapStateToProps)(WebButtonPage);

export default connect(
    mapStateToProps,
  )(WebButtonPage)