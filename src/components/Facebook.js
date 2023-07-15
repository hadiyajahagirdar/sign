import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {
  const responseFacebook = (response) => {
   
    console.log(response);
   
  };

  return (
    <div>
      <FacebookLogin
        appId="8042"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
        textButton="Signup with Facebook"
      />
    </div>
  );
};

export default Facebook;
