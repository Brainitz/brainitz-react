import React, {Component} from 'react';

import VideoPlayer from 'VideoPlayer';

export default class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vidUrl: "https://www.youtube.com/watch?v=ja8pA2B0RR4"
    }
  }

    render() {
        return(
            <div>
                <h1>Edit Video Component</h1>
                <VideoPlayer bunnyVid={this.state.vidUrl} />
            </div>
        )
    }


}
