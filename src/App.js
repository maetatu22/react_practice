import React from 'react';
class App extends React.Component{
  render(){
    const name = "にんじゃわんこ";
    const imgUrl = "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ninjawanko.png";
    return (
      <div>
        <h1>{name}</h1>
        <img src = {imgUrl} />
      </div>
    );
  }
}

export default App;