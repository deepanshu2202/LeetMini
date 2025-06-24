import {useState} from 'react'
import './style.css'
import Loader from './Loader';

const UsernameInput = ( props ) => {
    const [username, setUsername] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const statsUrl = `https://leetcode-stats-api.herokuapp.com/${username}`;

    async function handleClick() {
        try {
            setLoading(true);
            setShow(false);
            const res = await fetch(statsUrl);
            const data = await res.json();
            const found = data.status == "success";
            if (!found) {
                throw new Error("USER NOT FOUND");
            }
            props.setData(data);
            props.setUserName(username);
            props.setUserFound(found);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setShow(true);
        }
    }

  return (
    <div id='usernameinput-root'>
        <h1>Welcome to LeetMini</h1>
        <label id='name-label' htmlFor="">Enter Username</label>
        <input id='input-box' type="text" onChange={(e) => setUsername(e.target.value.trim())}/>
        <button id='search-btn' disabled={username.length == 0} onClick={handleClick}>Search</button>
        {loading && <Loader />}
        {show && <h3 className='err-txt'>User not found!</h3>}
        {username.length == 0 && <h3 className='err-txt'>textfield cannot be empty</h3>}
    </div>
  )
}

export default UsernameInput