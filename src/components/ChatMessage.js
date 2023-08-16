import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center px-3 my-2'>
            <img className='h-6 rounded-full' alt='user-icon' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
            <span className='font-medium text-[13px] px-2 text-gray-500'>{name}</span>
            <span className='text-[13px] break-words overflow-x-hidden'>{message}</span>
        </div>
    )
}

export default ChatMessage