import React from 'react'
import demo from "../Componets/assets/demo.jpg"


function Task() {
    
// const customStyle={
//     color: " "
//   }
  let greet;
    const time=new Date().getHours ()
    if (time >= 0 && time < 12){
      greet="Good Morning"
    }
   else if(time >= 12 && time < 16){
      greet="Good Afternoon"

    }
    else if (time >= 16 && time < 19){
      greet="Good Evening"
      // customStyle.color='blue'
    }
      else if (time >= 19 && time < 24){
        greet="Good Night"
      }
  return (
    <div  className="w-full h-full">
      <img src={demo}/>
        <h1 className='heading text-5xl font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'>{greet}</h1>
    </div>

  )
}

export default Task;

