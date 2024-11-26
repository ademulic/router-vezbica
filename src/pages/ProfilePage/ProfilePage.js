import { Link, useParams } from 'react-router-dom';
import './ProfilePage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ProfilePage = () => {

    const {id} = useParams();
    const [user,setUser] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading]= useState(true); 
    
    useEffect(()=>{
        
        axios.get(`https://dummyjson.com/users/${id}`)
        .then(data=>{
            setUser(data.data)  
            setLoading(false);
            setError(null);
        }).catch((error)=>{
            setError(error);
            setLoading(false);
            setUser({}); 
        });  
        
    },[id])
    console.log(user)
    return (
        <>
            {error && <p>OOPS, That user doesn't exist!!! <Link to='/'>Go to homepage</Link></p>}
            {loading && <p>Loading...</p>}
            {!loading && 
                <div className="profile-page">
                    <div className="profile-image">
                        <img src={user.image} alt="" />
                    </div>
                    <div className="profile-body">
                        <h1>{user.firstName} {user.lastName}</h1>
                        <h2>age: {user.age}</h2>
                        <h2>email: {user.email}</h2>
                         
                    </div>
                </div>
            } 
        </>
    );
}
 
export default ProfilePage;