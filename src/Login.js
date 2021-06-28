import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Quiz from './Quiz';
function Login()
{   return(
    <form>
      Username: <input type="text" placeholder="username" />
      <br/>
      <br/>
      Password: <input type="text" placeholder="password" />
      <br/>
    
      <Link to ="/Quiz"><button>Login</button></Link>
      <Route path="/Quiz" exact><Quiz/></Route>
      
      </form>
)
    

}
export default Login;