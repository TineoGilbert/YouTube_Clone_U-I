import { Avatar } from "@material-ui/core"
import '../Styles/VideoCard.css';

const VideoCard = ({image, title, channel, views, timestamp, channelImage}) => {
    return (
        <div className="videoCard">
            <img className="videCard-img" src={image} alt=""/>
            <div className="videoCardInfo">
                <Avatar className="videoCardAvatar" alt={channel} 
                src={channelImage} />

                <div className="videoText">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} - {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
