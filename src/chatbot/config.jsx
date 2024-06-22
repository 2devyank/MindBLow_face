import { createChatBotMessage } from "react-chatbot-kit";
import Botguide from "../components/chatcompoents/Botguide";
import { NameInput } from "../components/chatcompoents/NameInput";
import { CustomerOptions } from "../components/chatcompoents/CustomerOptions";
import { Multipleop } from "../components/chatcompoents/Multipleop";
import Cause from "../components/chatcompoents/Cause";
import Calender from "../components/chatcompoents/Calender";


const config = {
  initialMessages: [
    createChatBotMessage(`Hi I am dev's assistant`),
    createChatBotMessage(`I will guide for your booking`, { delay: 1000 }),
    createChatBotMessage(`It will take few minutes only!`, {
      delay: 2000,
      widget: "Botguide",
    }),
  ],
  widgets: [
    {
      widgetName: "Botguide",
      widgetFunc: (props) => <Botguide {...props} />,
    },
    {
      widgetName:"Nameinput",
      widgetFunc:(props)=> <NameInput {...props}/>,
    },
    {
      widgetName:"CustomerOptions",
      widgetFunc:(props)=> <CustomerOptions {...props}/>,
    },{
      widgetName:"Multipleop",
      widgetFunc:(props)=> <Multipleop {...props}/>,
    },
    {
      widgetName:"Cause",
      widgetFunc:(props)=> <Cause {...props}/>,
    },
    {
      widgetName:"Calender",
      widgetFunc:(props)=> <Calender {...props}/>,
    }
  ],
};

export default config;
