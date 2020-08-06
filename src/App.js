import React from 'react';
import './App.css';
import Header from './Header.js';
import request from 'superagent';

class App extends React.Component {
  state = {
    search: '',
    isLoading: false,
    pokeState: []
  }

  handleClick = async () => {
    this.setState({ isLoading: true })
    const data = await 
  }


  return (
    <>
    <body>
      <Header />

    </body>
    </>
  );
}

export default App;
