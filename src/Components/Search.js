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
        let result = document.querySelector('div.result');
        result.innerHTML="";  
        //text += possible.charAt(Math.floor(Math.random() * possible.length));
        text = determiner[Math.floor(Math.random() * determiner.length)];
        var res = document.querySelector('input.form-control');
        res.value = text;
       const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${text}&regionCode=GB&key=AIzaSyCSY-tbTAsPvUMEXPP32BGENmnG6nl5BzY`; 
      let data = await fetch(url);
        let parsedData = await data.json();
        getVideos(parsedData.items[0].snippet);
       const resultVid = `<div>
                       <img src=${video.thumbnails.high.url} onLoad={console.log("Hi") }alt=${video.descpription}/>
                       <h1>${video.title}</h1>
                     </div>`;
       result.innerHTML+=resultVid;         
        console.log(video);  
    
    }
    return <div className="SEARCH" >
        <h1 className="title">Random Youtube Video Generator</h1>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" />
            <label for="floatingInput">Enter Youtube Video</label>
        </div>

        <button onClick={generateWord} type="button" className="btn btn-success">Generate Video</button>
        <div onLoad={generateWord} className="result">
         {/* {video.map((element)=>{
                return <Results title={element.title} description={element.description} thumbnail={element.thumbnails.high.url}></Results>
            })}  */}
        </div>
    </div>;
}
Search.propTypes={
   
}
export default Search;

