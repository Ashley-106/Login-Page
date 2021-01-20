import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EnteredUsername: undefined, //user entered username
            EnteredPassword: undefined, //user entered password
            UserNameCorrect: undefined, //if username correct
            PasswordCorrect: undefined, //if password correct
            firstAttempt: false, //first attempt stops error icon from appearing before user has 1st login
            successfulLogin: false

        };
    }

    updateEnteredUsername = (e) => {
        this.setState({EnteredUsername: e.target.value});
    };

    updateEnteredPassword = (e) => {
        this.setState({EnteredPassword: e.target.value});
    };

    handleLogin = (e) => {
        e.preventDefault(); //stops page reload on submit
        const username = "username123";
        const password = "password";

        // firstAttempt stops error icon from displaying before user has chance to attempt login.
        this.setState({firstAttempt: true});
        
        //username handler
        if (this.state.EnteredUsername === username) {
            this.setState({UserNameCorrect: true});
        } 
        if (this.state.EnteredUsername !== username) {
            this.setState({UserNameCorrect: false});
        }

        //password handler
        if (this.state.EnteredPassword === password) {
            this.setState({PasswordCorrect: true});
        }
        if (this.state.EnteredPassword !== password) {
            this.setState({PasswordCorrect: false});
        }

         //successful login
         if (this.state.EnteredUsername === username && this.state.EnteredPassword === password) {
            this.setState({successfulLogin: true});
        } 
    };

    render() {
        return (
            <div>
                <div className="info-box">
                    <p>Username: username123</p>
                    <p>Password: password</p>
                </div>
                {!this.state.successfulLogin && 
                <div className="container">
                    <div className="head-strip">
                        <h1>Login</h1>
                    </div>
                    <form>
                        <div className="form-inner username">
                            <label htmlFor="userName">
                                Username 
                                {(!this.state.UserNameCorrect && this.state.firstAttempt) && <i className="error fas fa-asterisk"></i>}
                            </label>
                            <input onChange={this.updateEnteredUsername} id="userName" type="text"  placeholder="example123" required autoComplete="off"/>
                        </div>
                        <div className="form-inner password">
                            <label htmlFor="password">
                                Password 
                                {(!this.state.PasswordCorrect && this.state.firstAttempt) && <i className="error fas fa-asterisk"></i>}
                            </label>
                            <input onChange={this.updateEnteredPassword} id="password" type="password" required/>
            
                        </div>
                    
                        <button onClick={this.handleLogin} className="button" type="submit">
                            Login
                            <i id="icon" className="fas fa-arrow-circle-right"></i>
                        </button>
                    </form>
                </div>
                }   
                {this.state.successfulLogin && 
                <div className="success-box">
                    <div className="success-head-strip">
                    <h2>Successfully logged in</h2>
                        
                    </div>
                    <i className="fas fa-smile smiley"></i>
                </div>
                }
                
            </div>
            );
    }
   
};

export default Login;