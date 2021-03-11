import './app.css';
import React, { useCallback, useEffect, useState } from 'react'
import HeaderRapper from './components/header-rapper/headerRapper';
import MainContent from './components/main-content/mainContent'

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
      const response = await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyCg2DIwaT5af8y1NmV-PoXMjqk4d_3cZXg", requestOptions)
      const result = await response.text();
      const {items} = await JSON.parse(result);

      // .then(response => response.text())
      // .then(result => JSON.parse(result));
      // console.log(items);
      return result;
    } catch (error) {
      console.log(error)
    }
  },[])

  useEffect(() => {
    console.log(getPopular);
    return () => {
    }
  }, [getPopular])
  return (
    <>
      <HeaderRapper></HeaderRapper>
      <MainContent></MainContent>
    </>
  );
}

export default App;
