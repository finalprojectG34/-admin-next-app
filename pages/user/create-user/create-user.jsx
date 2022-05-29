import React, {useState} from 'react';
// material-ui
import {Box, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {useMutation} from '@apollo/client';
// project imports
import MainCard from '../../ui-component/cards/MainCard';
import {InputField} from '../../ui-component/input/InputField';
import {CREATE_USER} from "../../../apollo/mutations/user_mutation";
import {LoadingButton} from "@mui/lab";

const UserCreate = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const [createUser, {loading, error}] = useMutation(CREATE_USER);

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser({
            variables: {
                input: {
                    firstName,
                    lastName,
                    phone,
                    role
                }
            }
        }).then((data) => {
            console.log("==============>", data)
        });
    };

    return (
        <MainCard title='Create User' sx={{margin: 'auto'}} style={{maxWidth: 'max-content'}}>
            <form onSubmit={handleSubmit}>
                <InputField
                    label='First Name'
                    name='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <InputField
                    label='Last Name'
                    name='lastName'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <InputField
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Image'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    label='Phone Number'
                    name='phone'
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <FormControl fullWidth margin='normal'>
                    <InputLabel id='role-label'>Role</InputLabel>
                    <Select
                        labelId='role-label'
                        id='role-select'
                        value={role}
                        label='Role'
                        onChange={(e) => setRole(e.target.value)}
                        data-cy={'dataCy'}
                    >
                        <MenuItem value='user'>USER</MenuItem>
                        <MenuItem value='admin'>ADMIN</MenuItem>
                        <MenuItem value='seller'>SELLER</MenuItem>
                        <MenuItem value='super'>SUPER</MenuItem>
                    </Select>
                </FormControl>

                <Box textAlign={'center'} mt={2}>
                    <LoadingButton
                        type='submit'
                        variant='contained'
                        loading={loading}
                    >
                        Create User
                    </LoadingButton>
                </Box>
            </form>
        </MainCard>
    );
};

export default UserCreate;
