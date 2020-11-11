import React from 'react';
//import axios this http client talk to web
import axios from 'axios';

export class Create extends React.Component {


    constructor() {
        super();
//binding your code allways
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }


    onChangeYear(e){
        this.setState({
Year: e.target.value
        });
    }


    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + "" + this.state.Year +"" +this.state.Poster);
        //make a object to retrieve the value
        const newMovie ={
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        axios.post('http://localhost:4000/api/movies',newMovie)
        .then((res)=>{
        console.log(res);
        })
        
        // if any error happens it will catch it
        .catch((err)=>{
            console.log(err);

        });
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Movie year:</label>
                        <input type = 'text'
                        className = 'form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                        
</div>

<div className ='form-group'>
    <label> Add Movie Poster</label>
    <textarea type= 'text'
    className= 'form-control'
    value= {this.state.Poster}
    onChange={this.onChangePoster}>

    </textarea>

</div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>

                    </div>
                </form>

            </div>
        );
    }

}
