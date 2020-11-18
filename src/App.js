import React from 'react';

class App extends React.Component {
  render() {
    return (
    	<div>
    	  <h1>こんにちは、にんじゃわんこさん！</h1>
        <button onClick={() => {console.log("ひつじ仙人")}} >
          ひつじ仙人
        </button>
    	  <button onClick = {() => {console.log("にんじゃわんこ")}}>
          にんじゃわんこ
        </button>
    	  
    	</div>
    );
  }
}

export default App;
