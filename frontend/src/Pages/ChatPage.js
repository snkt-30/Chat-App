import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {

  const [chat, setChat] = useState([]);

  const fetchChats = async () => {
    const data  = await axios.get("/api/chat");
    setChat(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (<div>{chat.map((chat)=>(
    <div>{chat.chatName}</div>
  ))}</div>
  );
};

export default ChatPage;
