import React from 'react';

    //Assistir aula 29 da seção 2 (09:30) para entender https://www.udemy.com/react-redux/learn/v4/t/lecture/4288094?start=15
const VideoListItem = ({video, onVideoSelect}) => {
    //Os parâmetros acima seguem o mesmo conceito de:
    //const video         = props.video;
    //const onVideoSelect = props.onVideoSelect;

    const imageUrl = video.snippet.thumbnails.default.url;
    console.log(video);
    return <li onClick={ () => onVideoSelect(video)} className="list-group-item">
        <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
        </div>
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl}/>
            </div>
        </div>          
    </li>
};

export default VideoListItem;