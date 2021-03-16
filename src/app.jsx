import './app.css';
import React, { useCallback, useEffect, useState } from 'react'
import HeaderRapper from './components/headerRapper/headerRapper';
import MainContent from './components/mainContent/mainContent'

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCg2DIwaT5af8y1NmV-PoXMjqk4d_3cZXg", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

function App() {
  const [videoList, setVideoList] = useState([]);
  const getPopular = useCallback(async () => {
    try {
      const response = await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=AIzaSyCg2DIwaT5af8y1NmV-PoXMjqk4d_3cZXg", requestOptions)
      const result = await response.text();
      const {items} = await JSON.parse(result);


      setVideoList(items);
    } catch (error) {
      console.log(error)
    }
  },[])

  useEffect(() => {
    getPopular();
    return () => {
    }
  }, [getPopular])
  return (
    <>
      <HeaderRapper></HeaderRapper>
      {/* <iframe 
      title = "video"
      width="560" height="315" 
      src="https://www.youtube.com/embed/Q88P1gpOJxA" 
      frameborder="0" 
      allow="accelerometer; 
      autoplay; clipboard-write; 
      encrypted-media; gyroscope; 
      picture-in-picture" 
      allowfullscreen></iframe> */}
      <MainContent videos = {videoList}></MainContent>
    </>
  );
}

export default App;
