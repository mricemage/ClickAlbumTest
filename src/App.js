import React, { Component } from 'react';
import AlbumData from './components/AlbumData'
import './App.css';
import LeftMenu from './components/LeftMenu'
import RightContent from './components/RightContent'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      albumdata: [],
      albumthumbnail: [],
      isHidden: false
    };

    this.getAlbumData = this.getAlbumData.bind(this);
    this.getAlbumThumbnail = this.getAlbumThumbnail.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    
  }
  toggleHidden(){
    this.setState({isHidden: !this.state.isHidden})
  }

  componentDidMount(){
    AlbumData.getAlbumData().then(result => {
      this.setState({albumdata: result.slice(0, 10)}); //Take first 10 albums name
      // console.log(this.state.albumdata)
    });
    AlbumData.getAlbumThumbnail().then(result => {
      this.setState({albumthumbnail: result});
      // console.log(this.state.albumthumbnail)
    });                                                                 
  }
  

  getAlbumData(){
    AlbumData.getAlbumData().then(result => {
      this.setState({albumdata: result})
      //console.log(this.state.albumdata)
    })
  }

  getAlbumThumbnail(){
    AlbumData.getAlbumThumbnail().then(result => {
      this.setState({albumthumbnail: result})
    })
  }

  render() {
    
    return (
      <div>
      <LeftMenu     isHidden = {this.state.isHidden}
                    toggleHidden = {this.toggleHidden}
      />
      {!this.state.isHidden && 
      <RightContent albumdata = {this.state.albumdata}
                    getAlbumData = {this.getAlbumData}
                    albumthumbnail = {this.state.albumthumbnail}
                    getAlbumThumbnail = {this.getAlbumThumbnail}
      />
       }
      </div>
    );
  }
}

export default App;
