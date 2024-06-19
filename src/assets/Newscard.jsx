import React from 'react'
import styled from 'styled-components'
export const Newscard = (values) => {
  return (

    <Container>
        <a className='main' href={values.url}>
        <div className='title'>{values.title}</div>
        {values.urlToImage!==null?<img className='img' src={values.urlToImage}/>:<></>}
        <div className='description'>{values.description}</div>
        <div className=''>{values.content}</div>
        </a>
    </Container>
  )
}
const Container=styled.div`
    .main{
        display:flex;
        gap:1rem;
        flex-wrap:wrap;
        flex-direction:column;
        align-items:center;
        text-decoration:none;
        color:black;
        background-color: #71e3fa23;
	border: 1px solid #ddd;
	border-radius: 8px;
    margin-left:15%;
	padding: 16px;
	width: 70%;
    .img{
        width:90%;
    }
    .title{
        font-size:10mm;
        font-size:bolder;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
	margin-bottom: 30px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`
