import './App.css';
import React,{useState} from 'react';
import Box from './Box';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Grid from '@mui/material/Grid';

function App() {
  const [color,setColor] = useState('blue');
  const [num,setNum] = useState(1);
  
  const generateMatrix=(num)=>{
    let matrix = [];
    for(let i=0;i<num;i++){
      matrix.push({color:`rgb(0,0,255)`,num:0})
    }
    return matrix;
  }
  const [data,setData] = useState(generateMatrix(16));
  const changeColor =(color,index)=>{
    try{
      data.map((item,ind)=>{
        if(ind === index){
          
          data[index].color = 'red';
          data[index].num = num
        }
        if(data[ind].num !== num && data[ind].num !== num-1){
          data[ind].color = 'blue';
          data[ind].num = 0
        }
        setNum(num+1)
      })
      setData(data);
    }catch(e){
      console.log(e)
    }
  }
  
  return (
   <Row className={{}} className="App">
      <Col xs lg="2">
      {data.map(( col, index ) => {
        return ( 
        <Box key={index} color={col.color} index={index} num={num} changeColor={changeColor}/>
        )
        })}
        </Col>
    </Row>
        
  );
  
}

export default App;
