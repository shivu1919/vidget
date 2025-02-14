import React, { useState } from 'react'
import './App.css'

function App() {

  const[theme, setTheme] = useState('main-dark')
  const[darkBtn, setDarkbtn] = useState('active')
  const[lightBtn, setLightBtn] = useState('not-active')
  const[url, setUrl] = useState('')
  const key = process.env.API_KEY;

  const lightTheme = ()=>{
    setTheme('main-light')
    setDarkbtn('not-active')
    setLightBtn('active')
  }
  const darkTheme = ()=>{
    setTheme('main-dark')
    setDarkbtn('active')
    setLightBtn('not-active')
  }

  const downloadInsta = async() =>{
    try{
      const response = await fetch(`https://instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com/${url}`,{
        method:'GET',
        headers:{
          'x-rapidapi-key':{key},
          'x-rapidapi-host':'instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com'
        }
      })

      const data = await response.json()
      console.log(data)
  }catch(error){
    console.log(error)
  }
}
 

  return (
    <>
      <div className={theme}>

        <div className='first'>
            <h1>Instagram Video/ Reels/ Stories/ Photos Downloader</h1>
            <input
            type='text'
            value={url}
            placeholder='Enter your link'
            onChange={(e)=>setUrl(e.target.value)}
            />

            <button id="downloadBtn" onClick={downloadInsta}>Download</button>

        </div>


        <div className='second'>
          <button onClick={lightTheme} className={lightBtn}>
            <img src="/sun.png"/>
          </button>
          <br/>
          <button onClick={darkTheme} className={darkBtn}>
            <img src="/moon.png" />
          </button>
        </div>
           
      </div>
    </>
  )
}

export default App