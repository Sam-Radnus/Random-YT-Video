import React from 'react';
import '../App.css';
async function componentDidMount() {
  console.log("Hi");
}
function Results(props) {
  let {link, title, descpription, thumbnail} = props;
  return <div className="results">
    <a  href={`https://www.youtube.com/watch?v=${link}`} ><img src={thumbnail} onLoad={console.log("Hi")} height="500" width="700" alt={descpription} /></a>
    <h1 style={{textAlign:'center'}}>{title}</h1>
  </div>;
}

export default Results
  ;
