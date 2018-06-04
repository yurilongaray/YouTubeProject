import React, {Component}   from 'react';
import ReactDOM             from 'react-dom';
import YTSearch             from 'youtube-api-search'
import SearchBar            from './components/search_bar';
import VideoList            from './components/video_list';
import VideoDetail          from './components/video_detail';
import _                    from 'lodash';
const API_KEY = 'AIzaSyAXmKfT0fuAORtRMr6aZyDPq9qjk6y3E5w';

//Componente baseado em Função, neste caso, chama a SearchBar que é um componente baseado em Classe
class App extends Component{ 
    constructor(props){
        super(props);

        this.state = { 
            videos: [], //objeto de vídeos
            selectedVideo: null

        }; 

        this.videoSearch('whindersson'); //Pesquisa inicial

    }

    videoSearch(term) {
        //function que captura os videos
        YTSearch({key: API_KEY, term: term}, (videos) => { 
            //console.log(data)
            this.setState({ //Forma de alteração do state
                videos: videos,
                selectedVideo: videos[0]
            }); //= this.setState({videos: videos}) 
        });
    }

    render() {
        //Função debounce para atrasar o tempo de pesquisa e não travar a tela
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300) //faz com que a função videoSearch seja chamada apenas depois de 300 milisegundos

        //onVideoSelect é passada como uma prop para o componente VideoList que manipulará o VideoListItem
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

//Inserindo no HTML (DOM)
ReactDOM.render(<App />, document.querySelector('#tela-index'))

//<VideoList videos={this.state.videos} /> 
//No caso acima, o videos diz respeito a props