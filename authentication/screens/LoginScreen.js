import {useState,useContext} from 'react';
import AuthContent from '../components/Auth/AuthContent';

import LoadingOverlay from '../components/UI/LoadingOverlay';
import {login} from '../util/auth';
import {Alert} from 'react-native';
import { AuthContext } from '../store/auth-context';



function LoginScreen() {

  const [isAuthenticating,setIsAuthenticating]=useState(false);
  const authCtx=useContext(AuthContext);
 
  async function loginHandler({email,password}){
    setIsAuthenticating(true);
    try{
   const token=await login(email,password);
   authCtx.authenticate(token);
    }
    catch(error){
      console.log(error.name);
      console.log(TypeError.prototype.stack);
Alert.alert('Invalid Credentials','Could not log in you,please enter correct details');
setIsAuthenticating(false);
    }
    
  }

  if(isAuthenticating){
    return <LoadingOverlay message="logging creating.."/>
  }
 

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;