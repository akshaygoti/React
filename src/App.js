// import Pera from "./Componets/Pera";
import "./App.css";
import "./Componets/Arrow.js"

import {Pera1,Pera2,Pera3,Pera4,Pera5,Pera6} from "./Componets/Pera"
import Img from './Componets/Img.js';
import Arrow from "./Componets/Arrow.js";


function App() {
  return <>
   <div className="App"> 

    <h1>hello 1</h1>
    <h1>hello 2</h1>
    <h1>hello 3</h1>
    <h1>hello 4</h1>
    <h1>hello 5</h1>
    
    {/* <Index></Index> */}
    <Pera1/>
    <Pera2/>
    <Pera3/>
    <Pera4/>
    <Pera5/>
    <Pera6/>  
    <Img/>
  <Arrow/>
     </div>
  </>
}

export default App;


