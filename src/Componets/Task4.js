import React, { Component } from 'react'

 class Task4 extends Component {

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
      <div className='space-x-4 content-center text-center font-semibold flex max-h-screen  items-center'>
        {/* <form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" value="John">
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe">
  <input type="submit" value="Submit">
</form>   */}
        {/* <input  onChange={e => (e.target.value)} /> */}
        {/* <h1 >Classcomponent</h1> */}
        <table className='border-solid border-2 border-sky-500  w-full'>

  <tr className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'>
    <th className='bo rder-solid border-2 border-sky-500 p-4 '>#</th>
    <th className='border-solid border-2 border-sky-500'>Name</th>
    <th className='border-solid border-2 border-sky-500'>Email</th>
    <th className='border-solid border-2 border-sky-500'>City</th>
    <th className='border-solid border-2 border-sky-500'>Phone</th>
  </tr>

  <tr className='border-solid border-2 border-sky-500'>
    <td className='border-solid border-2 border-sky-500 p-2'>01</td>
    <td className='border-solid border-2 border-sky-500'>Alpesh Kathirya</td>
    <td className='border-solid border-2 border-sky-500'>alpesh#@87gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Goghra</td>
    <td className='border-solid border-2 border-sky-500'>6789123456</td>
  </tr>

  <tr className='border-solid border-2 border-sky-500'>
    <td className='border-solid border-2 border-sky-500 p-2'>02</td>
    <td className='border-solid border-2 border-sky-500'>Vijay Desai</td>
    <td className='border-solid border-2 border-sky-500'>alpesh#@87gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Maria Anders</td>
    <td className='border-solid border-2 border-sky-500'>9876054321</td>
  </tr>
  
  <tr>
    <td className='border-solid border-2 border-sky-500 p-2'>03</td>
    <td className='border-solid border-2 border-sky-500'>Smit Patidar</td>
    <td className='border-solid border-2 border-sky-500'>smitthumer@gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Mexico</td>
    <td className='border-solid border-2 border-sky-500'>6589743674</td>
  </tr>

  <tr>
    <td className='border-solid border-2 border-sky-500 p-2'>04</td>
    <td className='border-solid border-2 border-sky-500'>Nikhil Ahir</td>
    <td className='border-solid border-2 border-sky-500'>nikhilahir@gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Bhavngar</td>
    <td className='border-solid border-2 border-sky-500'>9076543202</td>
  </tr>

  <tr>
    <td className='border-solid border-2 border-sky-500 p-2'>05</td>
    <td className='border-solid border-2 border-sky-500'>Uday Vekriya</td>
    <td className='border-solid border-2 border-sky-500'>uday65@gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Mexico</td>
    <td className='border-solid border-2 border-sky-500'>9876543220</td>
  </tr>

</table>
        {/* <label>First name:</label> <br/>
        <label>Emile</label> */}
        {/* <h1>{this.state.count}</h1> */}
        {/* <button onClick={this.incriment}  className='border-0 border-white  text-white bg-slate-700 text-base/loose shadow-inner font-serif rounded-lg px-3'>button</button> */}
      </div>
    )
  }
}

export default  Task4;