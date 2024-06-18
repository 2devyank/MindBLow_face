import React from 'react'
import Chatbot from 'react-chatbot-kit'
import config from '../chatbot/config'
import MessageParser from '../chatbot/MessageParser'
import ActionProvider from '../chatbot/ActionProvider'

const Chat = () => {
  return (
    <div className='chatbotcover'>
    <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default Chat