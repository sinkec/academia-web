import "./ProfileCard.css";

const ProfileCard = () => {
  let logedIn = true;
  let Username = "Matej Jazbinšek";
  let Smer = "3D Animacija";
  let Rank = 3;
  let Avatar = "img/LoginModul/Avatar/MatJaz_01.png";

  if (!logedIn) {
    return (
      <div className="profile-card-right">
        <h4>Login</h4>
      </div>
    );
  } else {
    return (
      <div className="profile-card-right">
        <img src="img/LoginModul/Avatar/MatJaz_01.png" alt="" />
        <div className="username">{Username}</div>
      </div>
    );
  }
};

export default ProfileCard;
