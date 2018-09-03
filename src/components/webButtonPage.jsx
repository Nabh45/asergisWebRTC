import React from 'react';
import Button from '@material-ui/core/Button';
import {changeButtonClass} from '../actions/index'

class WebButtonPage extends React.Component {

    constructor(props) {
        super(props);
        this.Mediastream = null;
        this.video = null;
        this.state = {
            check: false,
            class: 'primary'
        }
    }

    initializeWebCam() {
        var video = document.getElementById('video');
        var vendorUrl = window.URL || window.webkitURL

        navigator.getMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;

        //Capture Video
        var self = this;
        navigator.getMedia({
            video: true,
            audio: false
        }, function (stream) {
            video.src = vendorUrl.createObjectURL(stream);
            self.MediaStream = stream.getTracks()[0];
            video.play();
            console.log(vendorUrl);
        }, function (error) {
            //code for facing the error
        })
    }

    startVideo() {
        //this.props.dispatch(changeButtonClass(this.props.buttonClass));
        this.props.changeButtonClass123();
        if (this.state.check == false) {
            this.initializeWebCam();
            this.setState({
                check: true,
                class: 'secondary'
            })
        } else {
            this.MediaStream.stop();
            this.setState({
                check: false,
                class: 'primary'
            })
        }
    }

    render() {
        return (
            <div>
                <div className="both" style={{ width: '400px', background: '#ccc', border: '10px solid #ddd', margin: '0 auto' }}>
                    <video id="video" style={{ width: '400', height: '300' }}></video>
                </div>

                <Button onClick={(e) => this.startVideo(e)} variant="contained" color={this.props.buttonClass}>
                    Click
              </Button>
            </div>
        )
    }
}

export default WebButtonPage;