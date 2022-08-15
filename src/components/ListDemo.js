import React, {useState, useContext, useEffect} from 'react'
import { AppContext } from '../context/AppContext'
export default function ListDemo() {
  
  const {myList, setMyList} = useContext(AppContext)
  const [item, setItem]=useState('')
  const [color, setColor] =useState('red')

  useEffect(()=>{
      console.log(typeof item.length,"get")
      switch(item.length){
        case 0:
              setColor('white');
              break;
        case 1:
            setColor('blue');
            break;
        case 2:
            setColor('tomato');
            break;
        case  3:
            setColor('cyan');
            break;
        default:
            setColor('indigo');
            break;

      }

  },[item])

  return (
      <>
      <h1 style={{backgroundColor:color}}>Hello</h1>
        <input type="text" placeholder="thing" onChange={(event)=>{setItem(event.target.value)}} name="thing"/>
        <button type="button" onClick={()=>{setMyList([...myList, item])}}>Submit</button>
        <ul>
            {myList.map((i, index)=><li key={index}>{i}</li>)}
        </ul>
      </>


  )
}
