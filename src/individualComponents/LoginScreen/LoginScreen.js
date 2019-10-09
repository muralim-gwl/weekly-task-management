import React from 'react';
import { withRouter } from 'react-router-dom';


const Login = ({ user, dummyCredential, handleChange, history }) => {

  const { username, password } = dummyCredential;

  const handleChangeButton = () => {

    user.map(element => {
      if (element.username === dummyCredential.username && element.password === dummyCredential.password) {
        if (element.type === 'user')
          history.push('/userhome')
        else
          history.push('/adminhome')
      }
    })
  }
  return (
    <div style={{ justifyContent: 'center', marginTop: '10%' }}>
      Login
            <br />
      <br />
      <input
        onChange={e => {

          handleChange(e.target.value, "username");
        }}
        value={username}
        placeholder="Username"
      />
      <br />
      <br />
      <input
        onChange={e => {

          handleChange(e.target.value, "password");
        }}
        value={password}
        type="password"
        placeholder="Password"
      />
      <br />
      <br />
      <button onClick={() => { handleChangeButton(history) }}>Login</button>
      <br />
      <br />
    </div>
  );
}

export default withRouter(Login);