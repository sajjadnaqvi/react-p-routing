import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

const Users = () => {

    const {fname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return(
        <div >
        <h1> user {fname} is on page</h1>
        <p> my current location is {location.pathname}</p>
        {location.pathname === '/user/sajjad' ? 
        <button className="btn btn-success" onClick={()=> history.goBack()}>go back</button> :
         null}

<button onClick={history.push('/contact')}>move to contact</button>
        </div>
    );
}

export default Users;