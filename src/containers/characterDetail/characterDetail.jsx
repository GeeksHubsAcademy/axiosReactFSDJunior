
import React from "react";


class CharacterDetail extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            datosPersonaje : JSON.parse(localStorage.getItem("personajeEscogido"))
        }
        
    };

    devuelvemeHome(){
        
        this.props.history.push("/");
    }

    componentDidMount(){
        
            console.log(this.state.datosPersonaje);
    }
    
    render() {

        
        return(
            <div className="cardPersonaje">

                <div className="personajeNombre">
                    {this.state.datosPersonaje?.name}
                </div>


                
                <img src={this.state.datosPersonaje?.image}/>
                {this.state.datosPersonaje?.status}
                {this.state.datosPersonaje?.species}
                {this.state.datosPersonaje?.genre}

                <button onClick={()=> this.devuelvemeHome()}>VOLVER</button>

            </div>
            
        );
    };
    
    
};


export default CharacterDetail;