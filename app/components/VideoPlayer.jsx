import React, {Component} from 'react';
import Video from 'react-videojs';



export default class VideoPlayer extends Component {

    render() {

        return(

            <Video
              className="video-js vjs-default-skin vjs-container"
              controls
              data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=mOSQwJ0T4_s"}], "youtube": { "ytControls": 1 } }'
              onPlay={this.handlePlay}
              />

        )
    }


}
