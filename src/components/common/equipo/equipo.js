import React,{Component} from 'react';

//estilos 
import './equipo.css';


class Equipo extends Component {


    render(){
        return (

            <div>
                <img className="team-logo"  src={this.props.logo} alt={this.props.nombre} />
            </div>
        );
    }

}


export default Equipo;