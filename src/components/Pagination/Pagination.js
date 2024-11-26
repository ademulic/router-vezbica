import './Pagination.css';

const Pagination = ({totalUsers, usersPerPage,setCurrentPage,currentPage}) => {


    let pages = [];

    for(let i = 1; i<=Math.ceil(totalUsers/usersPerPage); i++){
        pages.push(i);
    }
    return ( 
        <div className='pagination-buttons'>
            {pages.map((page,index)=>
                <button 
                    className={page === currentPage ? "active" : ""}
                    key={index} 
                    onClick={()=>{setCurrentPage(page)}
                }>
                    {page}
                </button>)
            }
        </div>
     );
}
 
export default Pagination;