import React, {Component} from "react";

class App extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            task: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){
        if(this.state._id){
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({html: 'Tarea Actualizada'});
                    this.setState({title: '', description: '', _id: ''});
                    this.fetchTask();
                })
        } else {
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
                    this.fetchTask();
                })
                .catch(err => console.error(err));
        }
        e.preventDefault();
    }

    deleteTask(id){
        if(confirm('¿Estás seguro de eliminar la tarea?')){
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({html: 'Tarea Eliminada'});
                    this.fetchTask();
                })
        }
    }

    editTask(id){
        if(confirm('¿Está seguro de editar la tarea?')){
            fetch(`/api/tasks/${id}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        title: data.title,
                        description: data.description,
                        _id: data._id
                    })
                })
        }
    }

    componentDidMount(){
        this.fetchTask();
    }

    fetchTask(){
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({task: data});
            });

    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div class="App">
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

                        {/*Table*/}
                        <div className="col s7">
                            <table class="striped">
                                <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Descripcion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.task.map(task => {
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button class="btn  #5e35b1 deep-purple darken-1" onClick={() => this.editTask(task._id)}> 
                                                            <i class="material-icons">edit</i>
                                                        </button>
                                                        <button  class="btn #5e35b1 deep-purple darken-1" style={{margin: '4px'}} onClick={() => this.deleteTask(task._id)}> 
                                                            <i class="material-icons">delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default App;