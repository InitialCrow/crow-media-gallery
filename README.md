
# CrowMediaGallery 
v0.1.1


Hi !! here we have react component I made, its a media selectable gallery with options and lightbox render if you want to get just the lightbox-reader you ga go to the [github_project](https://github.com/InitialCrow/crow-lightbox-reader).

## Install MediaGallery

First you know need to install the project you have 3 way :

- download on github [download zip](https://github.com/InitialCrow/crow-media-gallery/archive/master.zip).
- clone on github `git clone https://github.com/InitialCrow/crow-media-gallery `
- install via npm `npm install crow-media-gallery --save`

just do `npm install` on directory if you clone from github to install dependencies to work and install this component

## Use CrowMediaGallery

CrowMediaGallery is work with react so make sure you have install react

**load component**

`import CrowMediaGallery from 'crow-media-gallery'` 

or

 `let CrowMediaGallery = require('crow-media-gallery')`

**use component**

I take simple exemple of use but you can import Media on container to 

        import React from 'react';
        import ReactDOM from 'react-dom';
        import CrowMediaGallery from 'crow-media-gallery';
        
       const items = [
    	{
    		type : "image", // type is needed to difere type of media
    		src : "https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
    		desc : "my desc here",
    		alt : "my alt here",
    		width : 4928,
    		height :3264,
    		thumbWidth: 150,
    		thumbHeight : 150,
    		isSelected : false // is needed if you enable media select function
    	},
    	{
    		type : "image",
    		src : "https://www.w3schools.com/w3css/img_fjords.jpg",
    		desc : "my desc2 here",
    		alt : "my alt here",
    		width : 300,
    		height :300,
    		thumbWidth: 150,
    		thumbHeight : 150,
    		isSelected : false
    	},
    	
    	{
    		type : "image",
    		src : "http://reparation-materiel-montagne.fr/wp-content/uploads/2017/09/trial-300x300.jpg",
    		desc : "my desc here",
    		alt : "my alt here",
    		width : 300,
    		height :300,
    		thumbWidth: 150,
    		thumbHeight : 150,
    		isSelected : false
    	},
    	{
    		type : "video",
    		src : "http://vjs.zencdn.net/v/oceans.mp4",
    		desc : "my desc here4",
    		thumbWidth: 150,
    		width : 1080,
    		height :450,
    		thumbHeight : 150,
    		isSelected : false
    	},
    	{
    		type : "audio",
    		src : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    		thumbSrc : "https://au.yamaha.com/en/files/front%20page%20banner_1200x480_d5a393465b9094b78c6cde73d642f31e.jpg",
    		desc : "my desc here",
    		thumbWidth: 150,
    		thumbHeight : 150,
    		isSelected : false
    	},
    ]
    
    
    ReactDOM.render(<CrowMediaGallery items={items} />, document.getElementById('root'));

like this you will have the MediaGallery as you can see we have props needed **items** props is pool of item you want to show follow this items array model

## Options
if you want change MediaGallery settings you can do like this

        import React from 'react';
        import ReactDOM from 'react-dom';
        import CrowMediaGallery from 'crow-media-gallery';
    
        const settings = {
	    	showSelect : true, // if you want selectable
	    	debug : false, // if youo want to show debug message
	    }
    
    const items = [ 
    	{
    		type : "image",
    		src : "https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
    		desc : "my desc here",
    		alt : "my alt here",
    		width : 4928,
    		height :3264,
    		thumbWidth: 150,
    		thumbHeight : 150,
    		isSelected : false
    	},
    	{
    		type : "image",
    		src : "https://www.w3schools.com/w3css/img_fjords.jpg",
    		desc : "my desc2 here",
    		alt : "my alt here",
    		width : 300,
    		height :300,
    		thumbWidth: 150,
    		thumbHeight : 150,
    		isSelected : false
    	},
    	
    	{
    		type : "image",
    		src : "http://reparation-materiel-montagne.fr/wp-content/uploads/2017/09/trial-300x300.jpg",
    		desc : "my desc here",
    		alt : "my alt here",
    		width : 300,
    		height :300,
    		thumbWidth: 150,
    		thumbHeight : 150,
    		isSelected : false
    	},
    	{
    		type : "video",
    		src : "http://vjs.zencdn.net/v/oceans.mp4",
    		desc : "my desc here4",
    		thumbWidth: 150,
    		width : 1080,
    		height :450,
    		thumbHeight : 150,
    		isSelected : false
    	},
    	{
    		type : "audio",
    		src : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    		thumbSrc : "https://au.yamaha.com/en/files/front%20page%20banner_1200x480_d5a393465b9094b78c6cde73d642f31e.jpg",
    		desc : "my desc here",
    		thumbWidth: 150,
    		thumbHeight : 150,
    		isSelected : false
    	},
    ]
   

       ReactDOM.render(<CrowMediaGallery onSelect={(item)=>{myCallBack(item)// callback with item selected on param this cancel default select}} settings={settings} items={items} onCustomClick={(item,index)=>{myCallBack(item,index) // callback with item and index clicked on param this cancel default action on click item}} />, document.getElementById('root'));

here you have all settings you can change now

have good dev :)

## License

**MIT** CrowMediaGallery is free to use mention is apreciate thank you.



