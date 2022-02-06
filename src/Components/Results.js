import React from 'react';
 async function componentDidMount()
 {
    console.log("Hi");
 }
function Results(props) {
    let{title,descpription,thumbnail}=props;
  return <div>
       <img src={thumbnail} onLoad={console.log("Hi") }alt={descpription}/>
       <h1>{title}</h1>
  </div>;
}

export default Results
;
