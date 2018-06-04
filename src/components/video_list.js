import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { //Props recebe os vídeos presentes no Index.js na tag: <VideoList videos={this.state.videos} />
    
    //map = loop do mesmo estilo de for
    console.log(props.videos.length);
    const videoItens = props.videos.map((video) => { //videoItens contem todos os vídeos 
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}//Passando o video selecionado para o VideoListItem
                key={video.etag} 
                video={video} 
            /> //Key serve para atribuir um identificador que neste caso sera o etag do API do YouTube
        )
    });
 
    return(
        <ul className="col-md-4 list-group">
            {videoItens}    
        </ul>

    );
}

export default VideoList;