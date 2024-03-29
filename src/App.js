// import Pera from "./Componets/Pera";
// import "./App.css";
// import "./Componets/Arrow.js"
// import "./index.css"

import CardProps from "./Componets/CardProps";

// import {Pera1,Pera2,Pera3,Pera4,Pera5,Pera6} from "./Componets/Pera"
// import Arrow from "./Componets/Arrow.js";
// import Task from "./Componets/Task.js";
// import Props from "./Componets/Propscard.js";
import Img1 from './Componets/assets/9.jpg';
import Img2 from './Componets/assets/11.jpg';
import Img3 from './Componets/assets/69.jpg';
import Img4 from './Componets/assets/27.jpg';
import Img5 from './Componets/assets/30.jpg';
import Img6 from './Componets/assets/75.jpg';

// import  Props  from "./Componets/Props";


function App() {
  return <>
   <div className="App"> 
  <div className= "h-96 flex flex-wrap items-center justify-around mt-5 rounded-full text-center display: flex;">

  <CardProps name="Akshay" title1="green iguana" img={Img1}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
  <CardProps name="Nori desi" title1="gree" img={Img2}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
  <CardProps name="Ameri" title1="greeana" img={Img3}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
 
  <CardProps name="Viki" title1="greeana" img={Img4}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
  <CardProps name="Elons" title1="gree" img={Img5}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
  <CardProps name="Delhi" title1="green iguana" img={Img6}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>

  </div>

     </div>
  </>
}

export default App;