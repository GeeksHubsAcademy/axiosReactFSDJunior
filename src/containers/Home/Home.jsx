
import React from "react";
import axios from 'axios';

class Home extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {

            arrayData : []


        }
        
    };


    meHasClickado(character){

        
        localStorage.setItem("personajeEscogido", JSON.stringify(character));
        

        this.props.history.push("/character");
    }

    async componentDidMount(){
        //conexion a la api

        let res = await axios.get('https://rickandmortyapi.com/api/character');

        this.setState({arrayData : res.data.results});

    }

    componentDidUpdate(){
        // console.log("SE HA ACTUALIZADO EL COMPONENTE");
        // console.log(this.state.arrayData);
    }
    
    render() {

        if(!this.state.arrayData[0]?.name){
            return(
                <div>
                    CARGANDO
                </div>
            );
        } else {

           return(
                this.state.arrayData.map(character => {
                    
                    return(<div className="personajeSerieRickMortyCard" key={character.id}>
                    <div className="nameCharacter">
                         {character.name}
                    </div>
                    <div onClick={()=> this.meHasClickado(character)} className="pictureCharacter">
                         <img src={character.image} alt={character.id}/>
                    </div>
                     <div className="speciesCharacter">
                         {character.species}
                     </div>
                </div>);
                   
               
                })

           );
        
        };
    
    }
};


export default Home;