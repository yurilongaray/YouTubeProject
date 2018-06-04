import React from 'react';

const VideoDetail = ({video}) => { //{video} é um objeto

    //Se nenhum video foi carregado ainda (ao carregar a página)
    if(!video) { //Se for diferente de null, undefined ou empty
        return <div>Carregando...</div>;
    }
    //Não precisa de else pois o if acima já está retornando e deve existir apenas um return

    const videoId = video.id.videoId;
    const url     = `http://www.youtube.com/embed/${videoId}`; //IMPORTANTE, neste caso tem que usar crase neste caso
    //Podemos usar o exemplo abaixo:
    //const url = 'http://www.youtube.com/embed/' + videoId; 

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;