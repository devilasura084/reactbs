import { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { Newscard } from './assets/Newscard';
import styled from 'styled-components';
import './App.css'
function App() {
  const [values,setvalues]=useState();
  const [receive,setreceive]=useState(false)
  useEffect(()=>{
    news()
  },[])
  function news(){
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=203e7dca7d104d37935b13702b5cbfed')
    .then(res=>{
      setreceive(true)
      setvalues(res.data.articles)
    })
    .catch(err=>{console.log(err)})
  }
  return (
    <Container>
      <h1 style={{fontSize:80,textAlign:'center'}}>News Articles</h1> 
      <div>{receive===true?values.map((value)=>{return(<div className='divfloat' key={values.indexOf(value)}>{Newscard(value)}</div>)}):<div></div>}</div>
      </Container>
  )
}

export default App
const Container=styled.div`
  
`
