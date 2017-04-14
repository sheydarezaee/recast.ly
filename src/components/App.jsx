
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [];
      currentVideo : window.exampleVideoData[0]
    }
  }

  handleVideoListEntryTitleClick (video){
    this.setState({
      currentVideo: video
    });
  }

  componentDidMount() {
    this.getYoutubeVideos('cute kittens');
  } 

  getYoutubeVideos(query) {
    var options = {
      key: this.props.API_KEY;
      query: query
    }
    this.props.searchYouTube(options, () => {
      this.setState({
        videos: videos,
        currentVideo: videos[0];
      });
    });
  }

  render() {
    return (
       <div>
          <Nav handleSearchInputChange={this.getYoutubeVideos.bind()}/>
            <div className="col-md-7">
                <VideoPlayer video = {this.state.currentVideo}/>
            </div>
              <div className="col-md-5">
                  <VideoList videos={this.state.videos} handleVideoListEntryTitleClick={this.setCurrentVideo.bind(this)}/>
              </div>
            </div>
    );
  }


window.App = App;
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined



 

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video = {exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos ={exampleVideoData}/>
//     </div>
//   </div>
// );

























