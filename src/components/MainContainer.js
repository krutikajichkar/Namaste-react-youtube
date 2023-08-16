import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className= 'mt-[80px] px-3 col-span-11'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer