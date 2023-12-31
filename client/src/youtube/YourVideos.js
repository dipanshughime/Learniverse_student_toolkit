import React from 'react'
import Searchbar from './Searchbar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from './apis/Yt'
class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search', {
          params: {
              q: termFromSearchBar
          }
      })

      this.setState({
          videos: response.data.items
      })
      console.log("this is resp",response);
  };
  handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }

  render() {
      return (
          <div className='ui container ml-6' style={{marginTop: '1em'}}>
              <Searchbar handleFormSubmit={this.handleSubmit}/>
              <div className='ui grid ml-6'>
                  <div className="ui row">
                      <div className="eleven wide column ml-6">
                          <VideoDetail video={this.state.selectedVideo}/>
                      </div>
                      <div className="five wide column ml-6">
                          <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}

export default App;