const USERS_ITEM = "users"

const parseLocalStorage= (item) => JSON.parse(localStorage.getItem(item));

export const validateAlreadyRegisteredEmail = (email) => {
  return parseLocalStorage(USERS_ITEM)?.filter((obj) => obj.email === email).length !== 0;
};

export const validUser = (email,password) =>{
  return parseLocalStorage(USERS_ITEM)?.filter(({email:Email,password:Password})=>Email === email && Password === password)
}

export const validateName = (name) => new RegExp(/[a-zA-Z]{3,}/).test(name);

export const validateEmail = (email) =>
  new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email);

export const validatePassword = (password) =>
  new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm).test(
    password
  );


export const containsLowerCase = text => new RegExp(/[a-z]/g).test(text);
export const containsUpperCase = text => new RegExp(/[A-Z]/g).test(text);
export const containsSpecialCharacters = text => new RegExp(/[-'/`~!#*$@_%+=.,^&(){}[\]|;:"<>?\\]/g).test(text);
export const containsNumber = text => new RegExp(/[0-9]/g).test(text);

export const passwordErrorToolTip = (text) => 
    (<ul>
      {text.length<8 && <li>Minimum length of password is 8</li>}
      {!containsLowerCase(text) && <li>includes lowerCase latter</li>}
      {!containsUpperCase(text) && <li>includes upperCase latter</li>}
      {!containsNumber(text) && <li>includes numbers</li>}
      {!containsSpecialCharacters(text) && <li>includes special charterers"</li>}
    </ul>)

export const nameErrorToolTip = <p>Name should contain minimum 3 characters</p>
export const emailErrorToolTip = <p>Invalid email address</p>
export const  ToolTipError = {
    passwordErrorToolTip,
    nameErrorToolTip,
    emailErrorToolTip
}