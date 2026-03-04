import {Plus,UserRoundCheck,ThumbsUp} from 'lucide-react'
function Cards(props)
{
    return(
      
         <div className="card">
       <div className="top">
         <div className="user-image"><img src={props.image_url} height="250px"></img></div>
       <div className="card-center">
        <div className="userName" style={{fontSize:"22px" , fontWeight:"bold"}}>{props.userName}</div>
        <div className="userDetail" style={{fontSize:"20px",marginTop:"5px"}}>{props.userDetail}</div>
       </div>
       </div>
       <div className="card-footer">
        <div className="userFollower">
            <div className="followerIcon"><UserRoundCheck /></div>
            <div className="followers" style={{fontSize:"20px",fontWeight:"bold"}}>{props.userFollowers}</div>
        </div>
        <div className="userLikes">
            <div className='likesIcon'><ThumbsUp /></div>

            <div className='likes' style={{fontSize:"20px" , fontWeight:"bold"}}>{props.userLikes}</div>
        </div>
       
            <button className='follow-button'>
                <div>Follow</div>
                <div><Plus/></div>
            </button>
            
      
       </div>
        </div>
      
    )
}
export default Cards;