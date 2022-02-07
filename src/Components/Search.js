import React,{useEffect,useState} from 'react';
import Results from './Results';
import PropTypes from 'prop-types';
import '../App.css';
let video=[];

const  Search=(props)=>{
    let [video,getVideos]=useState([]);
    
    const generateWord=async()=>{
        var determiner = ['able', ' bad', ' best', ' better', ' big', ' black',
            ' certain', ' clear', ' different', ' early', ' easy', ' economic', ' federal',
            ' free', ' full', ' good', ' great', ' hard', ' high', ' human',
            ' important', ' international', ' large', ' late', ' little', ' local',
            ' long', ' low', ' major', ' military', ' national', ' new', ' old', ' only',
            ' other', ' political', ' possible', ' public', ' real', ' recent', ' right', ' small',
            ' social', ' special', ' strong', ' sure', ' true', ' white', ' whole', ' young  ',]
        
        var text = "";
      
        //text += possible.charAt(Math.floor(Math.random() * possible.length));
        text = determiner[Math.floor(Math.random() * determiner.length)];
        var res = document.querySelector('input.form-control');
        res.value = text;
       const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${text}&regionCode=GB&key=AIzaSyCSY-tbTAsPvUMEXPP32BGENmnG6nl5BzY`; 
      let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        video=parsedData.items;
        console.log(video);
        console.log(video[0].id.videoId);
        getVideos(video);       
    }
    return <div className="SEARCH" >
        <h1 className="title">Random Youtube Video Generator</h1>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" />
            <label for="floatingInput">Enter Youtube Video</label>
        </div>

        <button onClick={generateWord} type="button" className="btn btn-success">Generate Video</button>
        
          {video.map((element)=>{
                return <Results key={element.id.videoId} link={element.id.videoId} title={element.snippet.title} description={element.snippet.description} thumbnail={element.snippet.thumbnails.high.url}></Results>
            })}  
       
    </div>;
}
Search.propTypes={
   
}
export default Search;

