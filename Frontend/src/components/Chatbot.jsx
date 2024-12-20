import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {

    const injectScript1 = document.createElement('script');
    injectScript1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    injectScript1.async = true;
    document.body.appendChild(injectScript1);


    const injectScript2 = document.createElement('script');
    injectScript2.src = "https://files.bpcontent.cloud/2024/11/25/16/20241125165355-LZD6BEFE.js";
    injectScript2.async = true;
    document.body.appendChild(injectScript2);

    return () => {
      document.body.removeChild(injectScript1);
      document.body.removeChild(injectScript2);
    };
  }, []);

  return null;
};

export default Chatbot;
