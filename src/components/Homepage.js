import React, {useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Homepage() {
  const {myList} = useContext(AppContext)


  return (
    <>
      <h1>Homepage</h1>
      <hr/>
      <ul>
        {myList.map((i, index)=><li key={index}>{i}</li>)}
      </ul>
    </> 
     )
}
