import React, {Component} from 'react'; 

//Componente baseado em Classe
class SearchBar extends Component {
    constructor(props){
        super(props);

        //declaração do state que informa que valor o input deve receber (controla o input)
        this.state = {term: ''};
    }
    //tda classe precisa de um método render
    render() {
        //return <input onChange={this.onInputChange}/>
        return (
            //this.setState serve para manipular o state
            <div className="form-group search-bar">
                <input type="text" value={this.state.term} className="form-control"
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        //console.log(event);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
}

export default SearchBar;
