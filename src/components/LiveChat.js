import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../redux/chatSlice';


const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const [isShowChat, setIsShowChat] = useState(true);

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.message);

    let offset = 0;
  const fetchData = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=2&offset=" + offset)
      .then((data) => data.json())
      .then((response) => {
  
    dispatch(addChat({
        name:response.results[0].name,
        message : response.results[0].url
    }))
    
    });
    offset+=2;
  };
  useEffect(() => {
    const timer = setInterval( () => fetchData(),500)
    return () => {
        clearInterval(timer)
    }
  }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChat({
            name: 'Krutika Jichkar',
            message: liveMessage
        }));
        setLiveMessage('');
    }

   

    return (
        <>
            {
                !isShowChat ?
                    (<div className=' w-[364px] h-[20px]  mx-3 text-center'><button onClick={() => setIsShowChat(true)} className='rounded-full hover:bg-gray-200 border py-1 w-full text-[14px]'>Show Chat</button></div>)
                    :
                    (
                        <div className='w-[500px] h-[700px] border rounded-lg '>
                            <div className='h-[40px] p-2 m-2' >Top Chat</div>
                            <hr className="h-[1px] my-2 border-b-[1px] border-0" />
                            <div className='h-[470px] overflow-y-scroll overflow-hidden  flex flex-col-reverse'>
                                {
                                    chatMessages.map((msg, i) => (
                                        <ChatMessage key={i} name={msg.name} message={msg.message} />
                                    ))
                                }
                            </div>
                            <hr className="h-[1px] my-2 border-b-[1px] border-0" />
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className='flex px-3 my-2'>
                                    <img className='h-6 rounded-full' alt='user-icon' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
                                    <div className='px-3 w-full'>
                                        <div className='font-medium text-[13px] text-gray-500'>Krutika Jichkar</div>
                                        <input value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} maxLength="200" className='border-b-[1px] border-gray-400 h-7 outline-none text-[13px] w-full focus:border-blue-500 focus:border-b-[2px] pb-2' type='text' placeholder='Chat...' />
                                        <div className='flex justify-end text-gray-500 text-[13px] mt-2'><span className='mr-3'>{liveMessage?.length}/200</span><button className='border rounded-full px-3'>Send</button></div>
                                    </div>
                                </div>
                            </form>
                            <hr className="h-[1px] my-2 border-b-[1px] border-0" />
                            <div className='mx-3 text-center'><button onClick={() => setIsShowChat(false)} className='hover:rounded-full hover:bg-gray-200 py-1 w-full text-[14px]'>Hide Chat</button></div>
                        </div>
                    )
            }
        </>
    )
}

export default LiveChat