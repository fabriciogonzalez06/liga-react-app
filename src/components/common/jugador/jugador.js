import React,{Component} from 'react';

//material

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


//estilos
import './jugador.css';


class Jugador extends Component{


render(){
        return(

            <div>

            <Card className='card'>
                <CardActionArea>
                    <CardMedia
                    className='media'
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={this.props.foto}
                    title="felinos"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.nombre}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>

            </div>
        );
    }
}


export default Jugador;