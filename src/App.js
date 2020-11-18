import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: 'にんじゃわんこ'};
  }

  render() {
    return (
    	<div>
    	  <h1>こんにちは、{this.state.name}さん！</h1>
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
