import React, {Component} from "react";

class App extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){
        fetch('api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Tarea Guardada'});
                this.setState({title: '', description: ''});
            })
            .catch(err => console.error(err));

        e.preventDefault();
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div className="App">
                {/*Navigation*/}
                <nav class="#5e35b1 deep-purple darken-1">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo">Tareas</a>
                    </div>
                </nav>

                {/*Input Tarea*/}
                <div class="container">
                    <div class="row">
                        <div class="col s5">
                            <div class="card">
                                <div class="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input name="title" type="text" placeholder="Titulo Tarea" value={this.state.title} onChange={this.handleChange}></input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                             <textarea name="description" id="textarea2" class="materialize-textarea" placeholder="Descripcion Tarea" value={this.state.description} onChange={this.handleChange}></textarea>
                                            </div>
                                        </div>
                                        <button class="btn #5e35b1 deep-purple darken-1" type="submit" name="action">Enviar
                                            <i class="material-icons right">send</i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default App;