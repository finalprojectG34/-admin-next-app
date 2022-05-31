import {useMutation, useQuery} from '@apollo/client';

import {Alert, Box, Button, Dialog, FormControl, Grid, InputLabel, Select, Typography} from '@mui/material';


// import * as React from 'react';
import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import {LoadingButton} from "@mui/lab";
import Loader from "../../../../src/ui-components/Loader";
import {InputField} from "../../../../src/ui-components/input/InputField";
import AnimateButton from "../../../../src/ui-components/extended/AnimateButton";
import {GET_ALL_USERS} from "../../../../src/apollo/queries/user_queries";
import {CREATE_USER, DELETE_USER} from "../../../../src/apollo/mutations/user_mutation";
import {useRouter} from "next/router";

const ITEM_HEIGHT = 48;


const UserList = () => {
  const router = useRouter();

  const {data, error, loading} = useQuery(GET_ALL_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  const [openEdit, setOpenEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEdit = (user) => {
    setAnchorEl(null);
    console.log(user)
    setOpenEdit(true);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setPhone(user.phone);
    setRole(user.role);
  };

  const handleDelete = (user) => {
    setAnchorEl(null);
    deleteUser({
      variables: {
        deleteUserId: user.id
      },
      update: cache => {
        cache.evict({id: 'User:' + user.id});
      }
    }).then(() => {

    });
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  const [updateUser, {loading: updating, error: updateError}] = useMutation(CREATE_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({
      variables: {
        input: {
          firstName,
          lastName,
          phone,
          role
        }
      }
    }).then(() => {
      // router.push("/user/user-list")
    });
  };

  if (error)
    return (
      <Alert variant='outlined' severity='error'>
        {error.message}
      </Alert>
    );
  if (loading) return <Loader/>;
  return (
    <Dialog open={true}>

      <Box p={2}>
        <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="text" onClick={() => router.push("/user/user-list")}>x</Button>
        </Box>
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

          <Box sx={{mt: 2}}>
            <AnimateButton>
              <LoadingButton
                disableElevation
                disabled={updating}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                color='secondary'
                loading={updating}
              >
                Update User
              </LoadingButton>
            </AnimateButton>
          </Box>

          {error && (
            <Grid xs={12} container direction="row" alignItems='center' justifyContent='center'>
              <Typography variant='caption' fontSize='16px' textAlign="center" color="palevioletred">
                Error Happened!
              </Typography>
            </Grid>
          )}
        </form>
      </Box>

    </Dialog>
  );
};

export default UserList;
