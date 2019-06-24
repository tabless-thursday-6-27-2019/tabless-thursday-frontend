import React from 'react';


class Login extends React.Component {
    state = {
        creds: {
            username: '',
            password: ''
        }
    }


    login(){
        //use login from aciton here
    }
    render(){
        return(
            <div className = 'login'>
                <form>
                    <input type = 'text' placeholder = 'username'>
                    
                    </input>
                    <input type = 'password' placeholder = 'password'>
                    
                    </input>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}


export default Login;