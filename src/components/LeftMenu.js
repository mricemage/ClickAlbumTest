import React, { Component } from 'react'
import './LeftMenu.css'
import RightContent from './RightContent.js'

class LeftMenu extends Component {
    constructor(props){
        super(props);

   
}
    render() {
        const isHidden = this.props.isHidden;
        
        return (
            <div class="content">
                <div class="logo"></div>
            <a href="#" class="albumbutton" onClick={() => this.props.toggleHidden()}>Albums</a>
                <div class="break"></div>
            <a href="#" class="resetbutton" onClick={() => this.props.toggleHidden()}>Reset</a>
        
            </div>
        );
    }
}
export default LeftMenu;