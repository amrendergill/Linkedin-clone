import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import Headeroption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from 'react-redux';
import { auth } from "./firebase";
import { logout} from './features/userSlice';
function Header() {

   const dispatch = useDispatch();

    const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut();
    }
    return (
      <div className="header">
        <div className="header__left">
          <img
            src="https://image.flaticon.com/icons/png/128/174/174857.png"
            alt="name"
          />

          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__right">
          <Headeroption Icon={HomeIcon} title="Home" />
          <Headeroption Icon={SupervisorAccountIcon} title="My Network" />
          <Headeroption Icon={BusinessCenterIcon} title="Jobs" />
          <Headeroption Icon={ChatIcon} title="Messaging" />
          <Headeroption Icon={NotificationsIcon} title="Notifications" />
          <Headeroption
          avatar={true}

            title="me"
            onClick={logoutOfApp}
          />
        </div>
      </div>
    );
}

export default Header
