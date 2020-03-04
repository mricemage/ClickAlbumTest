import React, { Component } from 'react'
import './RightContent.css'

class RightContent extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const albumdata = this.props.albumdata;
        const albumthumbnail = this.props.albumthumbnail;
        // {albumdata[index].title} is used to call the title from another array of objects! 
        var link;
        function imageClick(e) { //Event target when clicking
             //srcset was set by the thumbnail of the picture
            link = e.target.src;
            // this.setState({bigimage: link});
            // console.log(this.state.bigimage);
            document.getElementById('myImage').src = link;
            return link;
        }
        
        
        return (
            <>
            <div class="content2">
            {albumthumbnail.map((data, index) => (
                <div class="albumcontainer">
                    <div class="albumitem">
                        <img id={data.id} src={data.url} srcset={data.thumbnailUrl} onClick={imageClick}></img>
                        <button class="description">{albumdata[index].title}</button>
                    </div>  
               </div> 
            ))}
            </div>
            <div class="content3">
                <img src={link} id="myImage"></img>
                <div class="fillertext">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            </>
        );
        
    }
}
export default RightContent;