import { createChatBotMessage } from 'react-chatbot-kit';
import Botguide from '../components/chatcompoents/Botguide';

const config = {
  initialMessages: [createChatBotMessage(`Hi I am dev's assistant`),
    createChatBotMessage(`I will guide for your booking`,{delay:1000}),
    createChatBotMessage(`It will take few minutes only!`,{delay:2000,widget:'gotit'}),
   ],
  widgets:[
   {
    widgetName:'gotit',
    widgetFunc:(props)=><Botguide {...props}/>
   }
  ]
};

export default config;