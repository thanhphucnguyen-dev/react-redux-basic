import { useSelector } from 'react-redux';
import './header.css';

const Header = (props) => {
  const { setEdit } = props;
  const user = useSelector((state) => state.user);


  const handleEdit = () => {
    setEdit(true);
  }

    return (
      <>
        <header style={{ 
          backgroundColor: `${user.themeColor}`, 
          backgroundImage: `linear-gradient(180deg, ${user.themeColor} 2%, ${user.themeColor}, 45%, #ff4c4c, #181818 100%)`
        }}>
          <div className="info-container">
            <div className="info-edit" onClick={handleEdit}>
              Edit
            </div>
            <img className="info-ava" src={user.avaUrl} alt="avatar" />
            <div className="info-username">{user.name}</div>
            <div className="info-age">{user.age}</div>
            <div className="info-about">{user.about}</div>
          </div>
        </header>
      </>
    )
}

export default Header;