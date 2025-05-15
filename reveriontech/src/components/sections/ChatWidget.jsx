import React from 'react';

const ChatWidget = () => {
  return (
    <>
      <chat-bot 
        platform_id="8cceb92a-71d2-4552-9064-f25e18abaf6b" 
        user_id="4d260943-e198-41db-8b00-80e4deadbe01" 
        chatbot_id="60705a16-dac5-45e3-ad54-4341fce58f47"
      >
        <a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">chatsimple</a>
      </chat-bot>
      <script src="https://cdn.chatsimple.ai/chat-bot-loader.js" defer></script>
    </>
  );
};

export default ChatWidget;
