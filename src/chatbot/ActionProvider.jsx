import React, { useEffect } from 'react'
import { createClientMessage } from 'react-chatbot-kit';


export default function ActionProvider({createChatBotMessage, setState, children }) {

    


//this function get triggered when user click on got it widget , it dispaly client message got it
//and then it ask for user name
const handleHello=()=>{
         const botMessage=createChatBotMessage('Hello, Nice to meet you');
          setState((prev)=>({
              ...prev,
              messages:[...prev.messages,botMessage],
          }))
      }
      const handleMessage=()=>{
        console.log("hello")
        const clientMessage=createClientMessage('ok Got it!');
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage],
        }))
        const clientMessage1=createChatBotMessage('what shall we call you',{widget:'Nameinput',delay:500});
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage1],
        }))
      }
      const DisplayName=(x)=>{
        const clientMessage1=createClientMessage(x);
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage1],
        }))
        const clientMessage=createChatBotMessage('you are',{widget:'CustomerOptions'});
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage],
        }))
      }
      const DisplayCustomerType=(x)=>{
        const clientMessage1=createClientMessage(x);
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage1],
        }))

        const clientMessage=createChatBotMessage('Tell us how you feel ?',{widget:'Multipleop'});
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage],
        }))
      }
      const Displayemotions=(x)=>{
        const clientMessage1=createClientMessage(x);
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage1],
        }))
        const clientMessage=createChatBotMessage('what do you think might be causing these feelings?',{widget:'Cause'});
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage],
        }))
      }

      const DisplayCause=(x)=>{
        const clientMessage1=createClientMessage(x);
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage1],
        }))
        const clientMessage=createChatBotMessage('Pick a Slot',{widget:'Calender'});
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage],
        }))
      }

      const DisplyTime=(x)=>{
        const clientMessage1=createClientMessage(x);
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage1],
        }))
        const clientMessage=createChatBotMessage('Pick a Slot',{widget:'Phone'});
        setState((prev)=>({
          ...prev,
          messages:[...prev.messages,clientMessage],
        }))
      }

    return (
        <div>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        actions: {
                          handleHello,handleMessage,DisplayName,DisplayCustomerType,Displayemotions,DisplayCause,DisplyTime
                        },
                    })
                })
            }
        </div>
    )
}