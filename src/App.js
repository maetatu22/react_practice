import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    
    
  }
  
  render() {
    return (
      <div>
        <h1>
          <button>+</button>
          {this.state.count}
          
          
        </h1>
       
        
        
      </div>
    );
  }
}

export default App;
