import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Google= () => {
  const handleGoogleSignup = (response) => {
    // Access the user profile and token from the response
    const { profileObj, tokenId } = response;
    console.log('Signing up with Google...');
    console.log('User:', profileObj);
    console.log('Token:', tokenId);
    // Perform signup logic or API call using the profile and token
  };

  const handleGoogleSignupFailure = (error) => {
    console.log('Failed to sign up with Google:', error);
  };

  return (
    <div>
      <h1>Create Account</h1>
      <GoogleLogin
        clientId="964065372421-01o3o5knudb3j34k6n41pnsc1ddkdcs2.apps.googleusercontent.com"
        buttonText="Signup with Google"
        onSuccess={handleGoogleSignup}
        onFailure={handleGoogleSignupFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Google;
