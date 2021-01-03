import React from 'react';
import Searchbar from './SearchBar.js';
import Youtube from  '../API/Youtube.js'
import VideoList from  './VideoList.js';
import VideoDetail from './VideoDetail.js';


//const KEY = 'AIzaSyA05TFKy5VZTJIzbNL9Dd39jIasZL8VQFI';

class App extends React.Component {
    state  = {videos  : [],  selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('boxing');
    }

    onTermSubmit = async term =>{ 
        const response = await Youtube.get('/search', {
           params:{
               q:term
           }
        });
        this.setState( {
            videos: response.data.items ,
            selectedVideo: response.data.items[4]

          });
    };
    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    };

    render() {
      
        return ( 
        <div className="ui container">
            <Searchbar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div  className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos}  />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;