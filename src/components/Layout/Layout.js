import { React } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import  classes from './Layout.css';

const layout = (props) => (
    <auxiliary>
        <div>Toolbar,sidebar,backdrawer</div>
        <main className={classes.Content}>{props.children}</main>
    </auxiliary> 
     
);

export default layout;
