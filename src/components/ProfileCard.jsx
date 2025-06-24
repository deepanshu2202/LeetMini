import React from 'react'
import './style.css'

const ProfileCard = ( props ) => {
  const data = props.data;
  const totalProgress = (data.totalSolved / data.totalQuestions) * 100;
  const easyProgress = (data.easySolved / data.totalEasy) * 100;
  const mediumProgress = (data.mediumSolved / data.totalMedium) * 100;
  const hardProgress = (data.hardSolved / data.totalHard) * 100;

  const getCircleStyle = (progress) => ({
        background: `conic-gradient(#547792 ${100 - progress}%, #213448 0%)`,
        transition: 'background 1s ease-in-out',
  });

  return (
    <div id='profilecard-root'>
        <h1>Here are your stats!</h1>
        <div id='display-box'>
            <ul id='info-box'>
                <li>Username : {props.username}</li>
                <li>Ranking : {data.ranking}</li>
                <li>Reputation : {data.reputation}</li>
                <li>Acceptance Rate : {data.acceptanceRate}%</li>
                <li>Controbution Points : {data.contributionPoints}</li>
            </ul>
            <div id='circle-box'>
                <div className="circles" style={getCircleStyle(totalProgress)}>
                  TOTAL <br />
                  {data.totalSolved}/{data.totalQuestions}
                </div>

                <div className="circles" style={getCircleStyle(easyProgress)}>
                  Easy <br />
                  {data.easySolved}/{data.totalEasy}
                </div>

                <div className="circles" style={getCircleStyle(mediumProgress)}>
                  Medium <br />
                  {data.mediumSolved}/{data.totalMedium}
                </div>

                <div className="circles" style={getCircleStyle(hardProgress)}>
                  Hard <br />
                  {data.hardSolved}/{data.totalHard}
                </div>

            </div>
        </div>
        <button id='back-btn' onClick={() => props.setUserFound(false)}>Go back</button>
    </div>
  )
}

export default ProfileCard