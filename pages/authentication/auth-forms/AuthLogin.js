import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useMutation} from "@apollo/client";

import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import useLocalStorage from "../../../src/hooks/useLocalStorage";
import AnimateButton from "../../../src/ui-components/extended/AnimateButton";

import {SIGN_IN} from "../../../src/apollo/mutations/user_mutation";
import {LoadingButton} from "@mui/lab";


const FirebaseLogin = () => {
    const router = useRouter()

    const [checked, setChecked] = useState(true);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const [sessionToken, setSessionToken] = useLocalStorage('store', null);
    const [rolesData, setRolesData] = useLocalStorage('roles', null);
    const [signIn, {loading, error}] = useMutation(SIGN_IN);

    const handleSubmit = e => {
        e.preventDefault();
        signIn({
            variables: {
                "input": {
                    "info": '+251' + phoneNumber.toString().substr(phoneNumber.length - 9),
                    "info_type": "phone",
                    "password": password
                }
            },
        }).then(res => {
            setSessionToken(res.data.login.token);
            setRolesData(['ADMIN']);
        })
            .catch(e => {
                console.log("error login", e)
            });
    };

    useEffect(() => {
        if (sessionToken) {
            router.push('/');
        }
        if (sessionToken && rolesData) {
            if (rolesData.token.indexOf('ADMIN') === -1) {
                router.push('/404/access-denied');
            } else {
                router.push('/');
            }
        }
    }, [sessionToken, rolesData]);

    return (
        <>
            <Grid container direction='column' justifyContent='center' spacing={2}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{flexGrow: 1}} orientation='horizontal'/>
                    </Box>
                </Grid>
            </Grid>

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label='Phone Number'
                    name='phoneNumber'
                    type='text'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    data-cy='login-phone-input'
                />
                <Box style={{margin: "30px"}}/>
                <FormControl fullWidth
                    // error={Boolean(touched.password && errors.password)}
                >
                    <InputLabel htmlFor='outlined-adornment-password-login'>Password</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-password-login'
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        name='password'
                        data-cy='login-password-input'
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                    size='large'
                                >
                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        label='Password'
                        inputProps={{}}
                    />
                </FormControl>
                <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={1}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                                name='checked'
                                color='primary'
                            />
                        }
                        label='Remember me'
                    />
                    <Typography variant='subtitle1' color='secondary' sx={{textDecoration: 'none', cursor: 'pointer'}}>
                        Forgot Password?
                    </Typography>
                </Stack>

                <Box sx={{mt: 2}}>
                    <AnimateButton>
                        <LoadingButton
                            disableElevation
                            disabled={loading}
                            fullWidth
                            size='large'
                            type='submit'
                            variant='contained'
                            color='secondary'
                            data-cy='login-phone-button'
                            loading={loading}
                        >
                            Sign In
                        </LoadingButton>
                    </AnimateButton>
                </Box>

                {error && (
                    <Grid data-cy='login-error-container' xs={12} container direction="row" alignItems='center'
                          justifyContent='center'>
                        <Typography variant='caption' fontSize='16px' textAlign="center" color="palevioletred">
                            Error Happened!
                        </Typography>
                    </Grid>
                )}
            </form>
        </>
    );
};

export default FirebaseLogin;
