import React, { useState } from 'react'
import './App.css'
import UsernameInput from './components/UsernameInput'
import ProfileCard from './components/ProfileCard'

const App = () => {
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <div id='app-root'>
      {!userFound && <UsernameInput setUserName={setUsername} setUserFound={setUserFound} setData={setData}/>}
      {userFound && <ProfileCard username={username} data={data} setUserFound={setUserFound}/>}
    </div>
  )
}

export default App