import {useState,useContext} from 'react';
import AuthContent from '../components/Auth/AuthContent';

import { createUser} from '../util/auth';

import LoadingOverlay from '../components/UI/LoadingOverlay';
import {Alert} from 'react-native';
import { AuthContext } from '../store/auth-context';




function SignupScreen() {
  const [isAuthenticating,setIsAuthenticating] =useState(false);
  const authCtx=useContext(AuthContext);

  async function signupHandler({email,password}){
    setIsAuthenticating(true);
    try{
   const token=await createUser(email,password);
   authCtx.authenticate(token);
    }catch(error){
    
      Alert.alert('authentication failled','try again after some time');
      setIsAuthenticating(false);
    }
    
  }

  if(isAuthenticating){
   return <LoadingOverlay message="user creating.."/>
  }
 
  return <AuthContent onAuthenticate={signupHandler}/>;
}


export default SignupScreen;