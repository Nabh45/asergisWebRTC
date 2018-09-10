import React from 'react';
import Button from '@material-ui/core/Button';
import { changeButtonClass } from '../actions/index';
import '../style/style.css'

class WebButtonPage extends React.Component {

    constructor(props) {
        super(props);
        this.Mediastream = null;
        this.video = null;
        this.state = {
            check: false
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
        }, function (error) {
            //code for facing the error
        })
    }

    startVideo() {
        if (this.state.check == false) {
            this.props.handleChangeButton('secondary');
            this.initializeWebCam();
            this.setState({
                check: true
            })
        } else {
            this.props.handleChangeButton('primary');
            this.MediaStream.stop();
            this.setState({
                check: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className="both">
                    <video id="video"></video>
                </div>

                <Button onClick={(e) => this.startVideo(e)} variant="contained" color={this.props.buttonClass}>
                    Click
              </Button>
            </div>
        )
    }
}

export default WebButtonPage;