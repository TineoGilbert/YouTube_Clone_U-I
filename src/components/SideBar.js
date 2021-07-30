import '../Styles/SidebarStyle.css';
import SideRow from './SideRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
const SideBar = () => {
    return (
        <div className="sidebar">

            <SideRow selected Icon={HomeIcon} title="Home"/>
            <SideRow Icon={WhatshotIcon} title="Trending"/>
            <SideRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>

            <SideRow Icon={VideoLibraryIcon} title="Library"/>
            <SideRow Icon={HistoryIcon} title="History"/>
            <SideRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SideRow Icon={WatchLaterIcon} title="Whatch Later"/>
            <SideRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <SideRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
        </div>
    )
}

export default SideBar
