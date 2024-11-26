import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import './Home.css';
import axios from "axios";
import { Link  } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
const Home = () => {

    const [users, setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(8);
 
    useEffect(()=>{
        try {
            axios.get('https://dummyjson.com/users').then((data)=>{
                
                setError(null);
                setLoading(false); 
                return setUsers(data.data.users);
            });
                
        } catch (error) {
            setUsers([]);
            setLoading(false);
            setError(error);
        }
        
        
    },[])
    console.log(users);

    const lastUsersIndex = currentPage * usersPerPage;
    const firstUsersIndex = lastUsersIndex - usersPerPage;

    const currentUsers = users.slice(firstUsersIndex, lastUsersIndex);
    
    return ( 
        <div className="home">
            {loading && <p>LOADING...</p>}
            {error && <p>Something went terribly wrong... Try again later.</p>}
            {!loading && <h1>Our Users</h1>}
           
                <div className="user-list">
                    { 
                        currentUsers.map(
                            user => 
                            <Link to={`/profile/${user.id}`}>
                                <ProfileCard key={user.id} user={user}/>
                            </Link>
                        )
                    }
                </div>

                <Pagination 
                    totalUsers = {users.length} 
                    usersPerPage={usersPerPage}
                    setCurrentPage={setCurrentPage}  
                    currentPage = {currentPage}  
                />
            
        </div> 
    );
}
 
export default Home;