import React, { useState } from "react";
import { Button, Typography, TextField, Paper, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/user";
//import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        age: "",
        gender: "",
    });

    //const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signup(userData));
        // setUserData({
        //     name: "",
        //     email: "",
        //     password: "",
        //     phone: "",
        //     age: "",
        //     gender: "",
        // });
    };

    return (
        <Grid style={{ padding: "2rem", width: "70%", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>
            <Paper style={{ padding: "1.5rem" }}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h4" style={{ margin: "1rem" }}>Sign Up</Typography>
                    <TextField
                        label="Name"
                        value={userData.name}
                        onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                        }
                        fullWidth
                        style={{ margin: "1rem" }}
                        required
                    />
                    <TextField
                        label="Email"
                        value={userData.email}
                        onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })
                        }
                        fullWidth
                        style={{ margin: "1rem" }}
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
                        style={{ margin: "1rem" }}
                        required
                    />
                    <TextField
                        label="Phone"
                        value={userData.phone}
                        onChange={(e) =>
                            setUserData({ ...userData, phone: e.target.value })
                        }
                        fullWidth
                        style={{ margin: "1rem" }}
                        required
                    />
                    <TextField
                        label="Age"
                        type="number"
                        value={userData.age}
                        onChange={(e) =>
                            setUserData({ ...userData, age: e.target.value })
                        }
                        fullWidth
                        style={{ margin: "1rem" }}
                        required
                    />
                    <FormControl component="fieldset" style={{ margin: "1rem", width: '100%' }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            value={userData.gender}
                            onChange={(e) =>
                                setUserData({ ...userData, gender: e.target.value })
                            }
                            row
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" style={{ margin: "1rem" }}>
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default SignupForm;
