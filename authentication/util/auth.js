import axios from "axios";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyAXX-as0Mrecx7t6p-NE-sMHfwyHeU46FA`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token=response.data.idToken;
  console.log(token);
  return token;
}

export  function createUser(email, password) {
 return authenticate('signUp',email,password);
};

export  function login(email, password) {
  
  return authenticate('signInWithPassword',email,password);
  
  
 };
 
