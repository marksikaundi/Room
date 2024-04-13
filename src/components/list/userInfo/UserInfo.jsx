import "./userInfo.css"
// import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {

  // const { currentUser } = useUserStore();

  return (
    <div className='userInfo'>
      <div className="user">
        {/* <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2> */}
        <img className="image__profile" src="./avatar.png" alt="" />
        <h2>John</h2>
      </div>
      <div className="icons">
        <img className="image__icon" src="./more.png" alt="" />
        <img className="image__icon" src="./video.png" alt="" />
        <img className="image__icon" src="./edit.png" alt="" />
      </div>
    </div>
  )
}

export default Userinfo