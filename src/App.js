import React , { useState} from 'react'
import "./App.css";


import Hooks from './Componets/Hooks'

// Hooks useState

function App () {
  return (
    <div className='App'>
      <Hooks/>
    </div>
  )
}

// function App () {
//   const[count,Data]=useState(0);

  
//   const myfun = () =>{
//     console.log("Click");
//     Data(count + 1)
//   }

//   const myfun1 = () =>{
//     console.log("Click Me");
//     Data(count - 1)
//   }

//   return (
//     <div className="App space-x-4 content-center text-center font-semibold flex flex-row min-h-screen justify-center items-center bg-fuchsia-500">

// <div className='text-slate-50 text-2xl flex flex-row min-h-screen justify-center items-center'>
//       <p >{count}</p>
// </div>
    
//       <button onClick={myfun} className='border-0 border-white  text-slate-950 bg-white text-base/loose shadow-inner rounded-lg px-3 font-serif'>
//        + Click Me
//         </button>
//       {/* <p>{count}</p> */}
//       <button onClick={myfun1} className='border-0 border-white  text-slate-950 bg-white text-base/loose shadow-inner font-serif rounded-lg px-3'>
//        - Click Me
//         </button>
//     </div>
//   )
// }

export default App;
