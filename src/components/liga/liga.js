import React,{Component} from 'react';
import {Link } from 'react-router-dom';


//material
import Button from '@material-ui/core/Button';

//css 
import './liga.css';

//componentes
import Equipo from '../common/equipo/equipo';
import Jugador from '../common/jugador/jugador';



//imagenes
import LogoFelinos from '../../assets/logos/felinos.png';
import LogoPiratas from '../../assets/logos/piratas.png';
import LogoTiburones from '../../assets/logos/tiburones.png';
import FotoSergio from '../../assets/fotos/sergio.png';
import FotoManuel from '../../assets/fotos/manuel.png';
import FotoJose from '../../assets/fotos/jose.png';
import FotoPaco from '../../assets/fotos/paco.png';


export default class Liga extends Component{
    render(){
        return(
            <div>

                    
         <div className="lista-equipos">
            <Equipo nombre="Felinos" logo={LogoFelinos} />
            <Equipo nombre="Piratas" logo={LogoPiratas} />
            <Equipo nombre="Tiburones" logo={LogoTiburones} />
          </div>

        <Button variant="contained" component={Link} to="/calendario/piratas"  color="primary">
          Ir a Calendario
        </Button>
          
          <div className="lista-jugadores">
            <Jugador nombre="Sergio" foto={FotoSergio} />
            <Jugador nombre="Manuel" foto={FotoManuel} />
            <Jugador nombre="Jose" foto={FotoJose} />
            <Jugador nombre="Paco" foto={FotoPaco} />
          </div>

       

         </div>

          

        );
    }
}