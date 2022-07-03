import { createGlobalStyle } from 'styled-components';
// import { StyleConstants } from './StyleConstants';
import { normalize } from './normalize';
import { typography } from './typography';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography}

  main {
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0 !important;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 1.6;
  }

 
  * {
    box-sizing: inherit;
  }

  ul, ol {
    // doesn't do RTL, it break a sidebar
    padding-left: 15px;
    margin-bottom: 0;
  }

  * {
  text-align: center;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 97vh;
}

.form {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.input {
  width: 60%;
  border: none;
  outline: none;
  height: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  margin: 10px;
}

.btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(#46f8b1 0%, #0fb272 100%);
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
}

.icon {
  padding: 0px;
}

.weather_data {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: -10px;
}

.weather_title h1 {
  text-transform: uppercase;
}
.weather_title h3,
p,
li {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin: 10px;
}

.weather_status ul li {
  list-style-type: none;
  text-align: center;
}

.weather_status li span {
  margin-left: 50px;
}

@media screen and (max-width: 700px) {
  .form {
    width: 90%;
    flex-direction: column;
  }
  .input {
    width: 350px;
  }
  .btn {
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }
  .container {
    height: 90vh;
    flex-direction: row;
  }
}


  img {
    width: 100%;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  button, input, optgroup, select, textarea {
    font-family: 'Poppins', sans-serif; 
  }

`;
