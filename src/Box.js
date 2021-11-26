import React, { useState } from "react";



const Box =({color,index,num,changeColor})=>{
  const [color1,setColor1] = useState(color);
  const [text,setText] = useState('');
  const [index1,setIndex1] = useState(index);
  const changeColor1 =()=>{
    setColor1('red')
    setText("Box #"+num)
    changeColor(color1,index1)
  }
    return (
        <div onClick={changeColor1} style={{backgroundColor:color,width:'13em',height:'5em',border:'2px gray solid'}} className="App">
          {text}
        </div>
      );
}
export default Box;