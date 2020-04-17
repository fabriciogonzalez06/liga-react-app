import React, { Component } from 'react';


//estilos 
import './juego.css';

//material

import {Card,CardHeader,CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

//componentes
import Equipo from '../equipo/equipo';


class Juego extends Component {
    render() {
        return (
            <div>

            <Card className="juegos">
                <CardHeader
                 
                    title="Local"
                    subheader="September 14, 2016"
                />
                <div className="logo-score">
                    <Equipo nombre={this.props.localNombre} logo={this.props.localLogo} />
                    <Typography className="score-game" variant="body2" color="textSecondary">
                        {this.props.localAnotaciones}
                    </Typography>
                </div>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.localNombre}
                    </Typography>
                </CardContent>

                <div className="logo-score">
                    <Typography className="score-game" variant="body2" color="textSecondary">
                        {this.props.visitanteAnotaciones}
                    </Typography>
                    
                    <Equipo nombre={this.props.visitanteNombre} logo={this.props.visitanteLogo} />
                </div>

                
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.visitanteNombre}
                    </Typography>
                </CardContent>


             
                </Card>

            </div>
        );
    }
}


export default Juego;