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
    redner(){
        return(
            <div className = 'login'>
                <form>
                    <input type = 'text' palceholder = 'username'>
                    
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