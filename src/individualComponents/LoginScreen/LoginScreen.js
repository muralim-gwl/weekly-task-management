import React from 'react'
import {withRouter} from 'react-router-dom';
class Login extends React.Component {

    state = {
        defaultCredential: {
          username: "gwl",
          password: "gwl@123"
        },
        userCredential: {
          username: null,
          password: null
        }
      };

      handleChange = (value, key) => {

        
        const { userCredential } = this.state;
        this.setState({
          ...this.state,
          userCredential: { ...userCredential, [key]: value }
        });
      };

      handleChangeButton =() =>{
        const { userCredential } = this.state;
        const {defaultCredential}= this.state;

        if (defaultCredential.username == userCredential.username && defaultCredential.password == userCredential.password) {
          this.props.history.push('/userhome')

        }else{
          alert("Please enter valid credientials")

        }

      }

      render() {
        const { userCredential = {} } = this.state;
        const { username, password } = userCredential;
              
        
        console.log(userCredential);
        const { handleChange } = this;
        const{handleChangeButton} = this;
        return (
          <div style={{justifyContent:'center', marginTop:'10%'}}>
            Login
            <br />
            <br />
            <input
              onChange={e => {
                // console.log(e.target.value);
                handleChange(e.target.value, "username");
              }}
              value={username}
              placeholder="User name"
            />
            <br />
            <br />
            <input
              onChange={e => {
                // console.log(e.target.value);
                handleChange(e.target.value, "password");
              }}
              value={password}
              type="password"
              placeholder="Password"
            />
            <br />
            <br />
            <button onClick= {
              handleChangeButton
            }>Login</button>
            <br />
            <br />
          </div>
        );
      }


}

export default withRouter (Login);