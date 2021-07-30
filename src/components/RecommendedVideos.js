import '../Styles/RecommendedStyle.css';
import VideoCard from './VideoCard';

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h1>Recommended Videos</h1>
            <div className="recommended-videos">
                <VideoCard
                title="Azure DevOps Tutorial"
                views="34.988 Views"
                timestamp="4 Month ago"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLS6b8799EKUAXsDl9MW2Er4x07qWinXpeKgfuTMLrk=s900-c-k-c0x00ffffff-no-rj"
                channel="Intellipaat"
                image="https://i.ytimg.com/vi/0WlDQakFAwE/maxresdefault.jpg"
                />

<VideoCard
                title="Azure DevOps Tutorial"
                views="4.5M Views"
                timestamp="2 Years ago"
                channelImage="https://3.bp.blogspot.com/-JjdknIsDwvw/WhCqjASEGeI/AAAAAAAABCc/ivhIALZGa6QCNJrfG29Zy51gogbaKUIuACLcBGAs/s1600/faazt_v3.png"
                channel="Intellipaat"
                image="https://i.ytimg.com/vi/chPhlsHoEPo/maxresdefault.jpg"
                />
                

                <VideoCard
                title="Learn English in 3 Hours"
                views="9 M Views"
                timestamp="2 Years ago"
                channelImage="https://i.pinimg.com/originals/1e/7c/8d/1e7c8d7d5acd9b05af2efa9743b71462.jpg"
                channel="Englishclass101.com"
                image="https://i.ytimg.com/vi/kCMYfcjqlvI/maxresdefault.jpg"
                />
                

                <VideoCard
                title="Full React Course 2020"
                views="991.484 Views"
                timestamp="9 Month ago"
                channelImage="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg"
                channel="Freecodecamp"
                image="https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/react10.png"
                />
                

                <VideoCard
                title="Curso JavaScript. Funciones"
                views="40.264"
                timestamp="1 Year ago"
                channelImage="data:image/png;base64,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"
                channel="JonMircha"
                image="https://i.ytimg.com/vi/H6U1Pm7x60E/maxresdefault.jpg"
                />
                
                
                
            </div>
        </div>
    )
}

export default RecommendedVideos
