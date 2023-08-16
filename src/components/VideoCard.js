import React from 'react'
import { formatCompactNumber } from '../utils/helper';


const VideoCard = ({ videoInfo }) => {

  const { snippet } = videoInfo;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className='p-2 m-2 w-72'>
      <img className='rounded-lg hover:drop-shadow-xl' alt='thumbnail' src={thumbnails?.medium?.url} />
      <ul className='flex justify-start items-start'>
        <img className='rounded-full w-7 h-7 mt-2 mr-2' alt='thumbnail' src={thumbnails?.default?.url} />
        <div>
          <li className='font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{title}</li>
          <li className='text-gray-500 text-[13px]'>{channelTitle}</li>
          <li className='text-gray-500 text-[13px]'>{videoInfo?.statistics?.viewCount ? formatCompactNumber(videoInfo?.statistics?.viewCount) : 0} views  {(Math.abs(new Date(publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0)} days ago</li>
        </div>
      </ul>
    </div>
  )
}

// This is called higher order function
export const AdVideoCard = ({ videoInfo }) => {
  return (
    <div className='p-1 m-1 border border-red-600'>
      <VideoCard videoInfo={videoInfo} />
    </div>
  )
}


export default VideoCard
