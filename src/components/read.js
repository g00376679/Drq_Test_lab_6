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

//just replace the new url
        axios.get('http://localhost:4000/api/movies')
            .then((Response) => {
                    this.setState({ movies: Response.data.movies })//add the movies to acces to movies data because in data we have only movies option.
                })
            .catch((err)=>{
                console.log(err)
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
