import React, {Component} from 'react';
import Video from 'react-videojs';



export default class VideoPlayer extends Component {

    render() {

        var myVid = this.props.bunnyVid;
        var videoSetup = `{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": ${myVid}}], "youtube": { "ytControls": 1 } }`;

        return(

          <Video
            className="video-js vjs-default-skin vjs-container"
            controls
            data-setup={videoSetup}
            onPlay={this.handlePlay}
            />

        )
    }


}
