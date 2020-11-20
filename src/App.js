import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    
    
  }

  handleClick(){
    this.setState({count: this.state.count + 1})
  }
  
  render() {
    return (
      <div>
        <h1>
          <button onClick={()=>{this.handleClick()}}>+</button>
          {this.state.count}
          
          
        </h1>
       
        
        
      </div>
    );
  }
}

export default App;
