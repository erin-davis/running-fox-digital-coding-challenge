import React, {useState} from 'react'
import "../styles/userInfo.css"; 

function UserInfo() {
  const [user, setUser] = useState({
    name: "Filip Martin Jose",
    location: "Los Angeles",
    follower_count: "980",
    project_count: "142",
    rank: "129",
    profile_image_url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    background_image_url: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    level: "Pro Level"
  })

  return (
    <div className="user-profile">
      <header className="profile-header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${user.background_image_url})`,
        backgroundPosition: "center center",
      }}
      >
      <img src={`${user.profile_image_url}`} alt={`${user.name} Profile Picture`} className="profile-pic"/>
      </header>
      <div className="user-info">
        <h1>{user.name}</h1>
        <p>{user.location}</p>
        <button className="user-level">{user.level}</button>
      </div>
    <span className="user-stats">
      <article>
        <p>Followers</p>
        <h3>{user.follower_count}</h3>
        </article>
      <article>
        <p>Projects</p>
        <h3>{user.project_count}</h3>
        </article>
      <article>
        <p>Rank</p> 
        <h3>{user.rank}</h3>
        </article>
    </span>
    </div>
  )
}

export default UserInfo
