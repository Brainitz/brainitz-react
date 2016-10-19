import React, {Component} from 'react';
import Video from 'react-html5video';


export default class VideoPlayer extends Component {




    render() {
        return(
            <div>
              <Video controls autoPlay loop muted
    poster="http://sourceposter.jpg"
    onCanPlayThrough={() => {
        // Do stuff
    }}>
    <source src="../../assets/big_buck_bunny.webm" type="video/webm" />
</Video>
            </div>
        )
    }


}
