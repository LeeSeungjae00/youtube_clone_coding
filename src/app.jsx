import './app.css';
import React, { useCallback, useEffect, useState } from 'react'
import HeaderRapper from './components/headerRapper/headerRapper';
import MainContent from './components/mainContent/mainContent'

const FAMOUS_VIDEO_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=AIzaSyCg2DIwaT5af8y1NmV-PoXMjqk4d_3cZXg`


const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectVideo, setSelectVideo] = useState({
    id: ''
  });

  const getVideos = useCallback(async (url) => {
    try {
      const response = await fetch(url, requestOptions)
      const result = await response.text();
      const { items } = await JSON.parse(result);
      setVideoList(items);
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleSearch = useCallback((url) => {
    getVideos(url);
    setSelectVideo({
      id: ''
    });
  }, [getVideos, setSelectVideo])

  const handleVideoClick = useCallback((info) => {
    setSelectVideo(info);
  }, [setSelectVideo])

  useEffect(() => {
    getVideos(FAMOUS_VIDEO_URL);
    return () => {
      // cleanup
    }
  }, [getVideos]);

  return (
    <>
      <HeaderRapper onSearch={handleSearch}></HeaderRapper>
      <MainContent
        onVideoClick={handleVideoClick}
        videos={videoList}
        selectVideo={selectVideo}></MainContent>
    </>
  );
}

export default App;
