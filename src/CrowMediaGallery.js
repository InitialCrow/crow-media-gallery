import React, { Component } from 'react';
import './CrowMediaGallery.css';

import CrowLightBoxReader from 'crow-lightbox-reader';

class CrowMediaGallery extends Component {
  constructor(props){
    super(props)
   

    //this.state.poolItems = props.items || [] // this is all items audio image or video pool
    this.onSelect = props.onSelect || false // this is param for custom user select on item function
    this.onCustomClick = props.onCustomClick || false // this is param for custom user click on item function
    this.itemIndexClicked = null // by default itemCliked is null when we click on item we put goo index to show in lightbox

    // pass object gallerySettings to change crow-media-gallery configuration
    this.gallerySettings = props.gallerySettings || {}
    this.showSelect = this.gallerySettings.showSelect || true // show select function and select marker on item
    this.debug = this.gallerySettings.debug || false // enable debug mode to show console msg

    // pass object lightboxSettings to change crow-lightbox-reader configuration
    this.lightboxSettings = props.lightboxSettings || {}

    //construct props
    this.nodes={
      thumb : [],
    }
    this.state={
      selectItem : false,
      showLightBox  : false,
      showGallery : true,
      poolItems : props.items || [] // this is all items audio image or video pool
    }
  }
  componentWillReceiveProps(props){
    if(this.state.poolItems !=props.items ){
      this.setState({poolItems :props.items})
    }
  }
  console(msg=""){
    if(this.debug !== false){
      console.log(msg)
    }
  }
  selectItem(item=""){ // we change isSelected on item props to select item
    if(this.onSelect !== false){
      this.onSelect(item) // return item for custom onSelect function
      return
    }
    if(item.isSelected !== true ){

      item.isSelected = true
      this.setState({selectItem : true})
    }
    else{
      item.isSelected = false
      this.setState({selectItem : false})
    }
  }
  renderSlelectBtn(item =""){ // show select button on item
    if(this.showSelect !== false && item.isSelected !== true){
      return(
        <div onClick={()=>{this.selectItem(item)}} className="crow-gallery-check-btn">
          <span className="check-symbol">&#10003;</span>
        </div>
      )
    }
    else if(item.isSelected !== false){
      return(
        <div onClick={()=>{this.selectItem(item)}} className="crow-gallery-select-btn">
          <span className="check-symbol">&#10003;</span>
        </div>
      )
    }
    else if(item ==""){
      this.console("Bug on CrowMediaGallery => renderSlelectBtn func || you need to pass not empty items into items props on crow-media-gallery")
      return
    }
  }
  renderPoolItemsThumb(){ // render items
    if(this.state.poolItems != ""){
      let poolItems = []
      this.state.poolItems.map((item,i)=>{
        if(this.renderVideoItemThumb(item,i) !== undefined){

          poolItems.push(this.renderVideoItemThumb(item,i))
        }
        if(this.renderImageItemThumb(item,i) !== undefined){

          poolItems.push(this.renderImageItemThumb(item,i))          
        }
        if(this.renderAudioItemThumb(item,i)!== undefined){

          poolItems.push(this.renderAudioItemThumb(item,i))
        }
      })
      return(
        poolItems
      )
    
    }
    else{
      this.console("Bug on CrowMediaGallery => renderPoolItemsThumb func || you need to pass not empty items into items props on crow-media-gallery")
      return
    }
  }
  showLigthBox(item="",i){
    if(this.onCustomClick !== false){
      this.onCustomClick(item,i)
      return
    }
    this.itemIndexClicked = i
    this.setState({showLightBox : true, showGallery : false})
  }
  renderVideoItemThumb(item="",i){ // render video item for type "video"

    if(item.type==="video" ){
      return(
        <li ref={(li)=>{this.nodes.thumb.push(li)}} key={i.toString()} className="pool-item">{this.renderSlelectBtn(item)}<video onClick={()=>{this.showLigthBox(item,i)}} src={item.src} width={item.thumbWidth} height={item.thumbHeight} onPlay={(evt)=>{evt.preventDefault()}}></video></li>
      )
    }
    else if (item.type =="" || item.type ==undefined){
      this.console("Bug on CrowMediaGallery => renderVideoItemThumb func || you need to write type ('video', 'image', 'song') property in items pool ")
      return
    }
  }
  renderImageItemThumb(item="",i){ // render image item for type "image"
    if(item.type==="image" ){
      return(
        <li  ref={(li)=>{this.nodes.thumb.push(li)}} key={i.toString()} className="pool-item">{this.renderSlelectBtn(item)}<img onClick={()=>{this.showLigthBox(item,i)}} src={item.src} width={item.thumbWidth} height={item.thumbHeight} alt={item.alt}/></li>
      )
    }
    if (item.type =="" || item.type ==undefined){
      this.console("Bug on CrowMediaGallery => renderImageItemThumb func || you need to write type ('video', 'image', 'song') property in items pool ")
      return
    }
  }
  renderAudioItemThumb(item="",i){ // render audio item for type "audio"
    if(item.type==="audio" ){
      return(
        <li  ref={(li)=>{this.nodes.thumb.push(li)}} key={i.toString()} className="pool-item">{this.renderSlelectBtn(item)}<img src={item.thumbSrc} width={item.thumbWidth} height={item.thumbHeight} alt="thumbnail of audio content" onClick={()=>{this.showLigthBox(item,i)}}/></li>
      )
    }
    else if (item.type =="" || item.type ==undefined){
      this.console("Bug on CrowMediaGallery => renderAudioItemThumb func || you need to write type ('video', 'image', 'song') property in items pool ")
      return
    }
  }
  renderPoolListThumb(){ // render pool list 
    if(this.state.showGallery !== false){
      return(
        <ul key="r1" className="crow-media-gallery-pool-list">
          {this.renderPoolItemsThumb()}
        </ul>
      )
    }
  }
  renderLightBoxReader(){ // render lightBox
    if(this.state.showLightBox !== false){
      this.lightboxSettings.showLightBox = this.state.showLightBox
      return(
        <CrowLightBoxReader closeCallBack={()=>{this.setState({showLightBox : false, showGallery : true})}} isRead={this.itemIndexClicked} items={this.state.poolItems} settings={this.lightboxSettings} />
      )
    }
    
  }
  showRenderer(){ // render all render
    let render = []
    render.push(this.renderPoolListThumb())
    if(this.state.showGallery!== false){
      return(
        <div>
          <div className="crow-media-gallery">
            {render}
            
          </div>
        </div>
      )
    }
    else{
      return(
        <div>
          {this.renderLightBoxReader()}
        </div>
      )
    }
    
  }
  render() {
    return (
        this.showRenderer()
    )
  }
}
export default CrowMediaGallery;
