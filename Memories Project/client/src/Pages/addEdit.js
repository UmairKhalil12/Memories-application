import React from 'react';
import { Grid } from '@material-ui/core';
import Form from '../components/Form/Form';
import Navbar from '../components/Navbar/Navbar';

const AddEdit = () => {
    return (
        <div>
            <Navbar /> 
            <Grid style={{display: 'flex' , justifyContent : 'center', alignItems : 'center', height : "80vh"}}>
                <Form />
            </Grid>
        </div>
    );
}

export default AddEdit;
