import React from 'react';
import { Movies } from './movies';
// import axios, first you have to install in cmd (install anxios) otherwise it wont recognise.
import axios from 'axios';

export class Read extends React.Component {
    state = {
        //get movie info from jsonblob file convert in json format
        movies: []
    };


    componentDidMount() {

        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((Response) => {
                    this.setState({ movies: Response.data.Search })
                })
            .catch((error)=>{
                console.log(error)
            });
    }
    render() {
        return (
            <div>
                <hi> Hello from Read Component.</hi>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }

}
