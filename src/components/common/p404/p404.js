import React,{Component} from 'react';
import { Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

export default class P404 extends Component{


    render(){
        return(
            <div>

                <p>Página no encontrada</p>
                <p>Error 404 </p>
                <Button component={Link}  to="/"  variant="outlined" color="secondary">
                 Regresar
                 </Button>
            </div>
        );
    }

}