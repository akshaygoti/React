import React, { Component } from 'react'

 class Classcomponent extends Component {

  constructor(){
    super()
    this.state = {
      count : 0,
    }
  }

  incriment = () => {
    console.log("incriment");
    this.setState({count:this.state.count+1});
  }

  render() {
    return (
      <div className='space-x-4 content-center text-center font-semibold flex flex-row min-h-screen justify-center items-center'>
        <h1 >Classcomponent</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.incriment}  className='border-0 border-white  text-white bg-slate-700 text-base/loose shadow-inner font-serif rounded-lg px-3'>button</button>
      </div>
    )
  }
}

export default Classcomponent;