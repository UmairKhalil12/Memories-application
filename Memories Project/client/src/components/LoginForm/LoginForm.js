import React, { useState } from "react";
import { Button, Typography, TextField, Paper, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(userData)); // Dispatch loginUser action with user data
        // Optionally, you can clear the form fields after submission
        // setUserData({
        //     email: "",
        //     password: "",
        // });
    };

    return (
        <Grid style={{ padding: "2rem", width: "70%", margin: "0 auto",  display : "flex", justifyContent : "center", alignItems : "center", height : "80vh"}   } >
            <Paper style={{padding : "3rem"}} >

                <form onSubmit={handleSubmit} >
                    <Typography variant="h4" style={{margin : "1rem"}} >Login</Typography>
                    <TextField
                        label="Email"
                        value={userData.email}
                        onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })
                        }
                        fullWidth
                        style={{margin : "1rem"}}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={userData.password}
                        onChange={(e) =>
                            setUserData({ ...userData, password: e.target.value })
                        }
                        fullWidth
                        style={{margin : "1rem"}}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" style={{margin : "1rem"}} >
                        Login
                    </Button>
                </form>

            </Paper>
        </Grid>
    );
};

export default LoginForm;
