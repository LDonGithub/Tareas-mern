import React, {Component} from "react";

class App extends Component {
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
                                    <form>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="text" placeholder="Titulo Tarea"></input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                             <textarea id="textarea2" class="materialize-textarea" placeholder="Descripcion Tarea"></textarea>
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