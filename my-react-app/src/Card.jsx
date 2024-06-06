import profilePic from "./assets/profile.jpeg"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile picture"></img>
            <h2 className="card-title">MilciukasIT</h2>
            <p className="card-text">I studying JavaScript and listening music</p>
        </div>
    );
}

export default Card