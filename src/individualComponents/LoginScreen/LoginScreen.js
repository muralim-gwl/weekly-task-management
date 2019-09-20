import React from 'react'
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
    
        if ( userCredential.username==="gwl" &&  userCredential.password === "gwl@123") {
         
         alert("sucessfully logged in as user")
          
        }else if (userCredential.username ==="admin" && userCredential.password ==="admin"){
          alert("Successfully logged in as admin ")
    
        }else 
            alert("xxx")
    
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

export default Login;