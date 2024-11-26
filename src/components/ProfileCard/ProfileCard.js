import './ProfileCard.css';
const ProfileCard = ({user}) => {
    return ( 
        <div className="card">
            <div className="image-card"> 
                <img src={user.image} alt="" />
            </div>
            <div className="name-and-lastname">
                <p>{user.firstName} {user.lastName}</p>
            </div>
            <p>age: {user.age}</p>
            <p>email: {user.email}</p>
            <p>id = {user.id}</p>
        </div>
     );
}
 
export default ProfileCard;