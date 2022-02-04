import React from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({endOfMessagesRef}) {
    const { user, Moralis } = useMoralis();

    const [message, setMessage] = React.useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if(!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress"),
        }).then((message) => {

        }, (error) => {
            console.log(error.message);
        })
        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

        setMessage("");
    };

  return (
    <form className='flex fixed bottom-10 w-11/12 bg-black/80 px-6 py-4 max-w-2xl shadow-xl rounded-full'>
        <input 
            className='flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5' 
            placeholder='Enter a Message' 
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
        />
        <button 
            onClick={sendMessage}
            type="submit"
            className='font-bold text-pink-500'>SEND</button>
    </form>
  )
}

export default SendMessage;
