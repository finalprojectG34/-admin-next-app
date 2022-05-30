import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router'
// material-ui
import {useTheme} from '@mui/material/styles';
import {
    Box,
    Button,
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
    Typography,
    useMediaQuery
} from '@mui/material';
import {useMutation} from "@apollo/client";

// project imports
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import useScriptRef from "../../../hooks/useScriptRef";
import useLocalStorage from "../../../hooks/useLocalStorage";

import AnimateButton from "../../ui-component/extended/AnimateButton";

// assets
import {SIGN_IN} from "../../../apollo/mutations/user_mutation";

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({...others}) => {
    const router = useRouter()

    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);

    const googleHandler = async () => {
        console.error('Login');
    };

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
    const [signIn, {
        loading,
        error
    }] = useMutation(SIGN_IN);

    const handleSubmit = e => {
        e.preventDefault();
        // signIn({
        //     variables: {
        //         phoneNumber: '+251' + phoneNumber.toString().substr(phoneNumber.length - 9),
        //         password
        //     }
        // }).then(res => {
        //     setSessionToken(res.data['ownerSignIn']['accessToken']);
        //     setRolesData(res.data['ownerSignIn']['roles']);
        // });
        // async (values, {setErrors, setStatus, setSubmitting}) => {
        //     try {
        //         if (scriptedRef.current) {
        //             setStatus({success: true});
        //             setSubmitting(false);
        //         }
        //     } catch (err) {
        //         console.error(err);
        //         if (scriptedRef.current) {
        //             setStatus({success: false});
        //             setErrors({submit: err.message});
        //             setSubmitting(false);
        //         }
        //     }
        // }
    };

    // if (sessionToken && rolesData) {
    //     if (rolesData.token.indexOf('ADMIN') === -1) {
    //         router.push('/access-denied')
    //         return <></>;
    //     }
    //     router.push('/')
    //     return <></>;
    // } else {
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
                <Grid item xs={12} container alignItems='center' justifyContent='center'>
                    <Box sx={{mb: 2}}>
                        <Typography variant='subtitle1'>Sign in with Phone Number</Typography>
                    </Box>
                </Grid>
            </Grid>

            <form onSubmit={handleSubmit}>
                <FormControl fullWidth
                    // error={Boolean(touched.email && errors.email)}
                    // sx={{...theme.typography.customInput}}
                >
                    <InputLabel htmlFor='outlined-adornment-email-login'>Phone Number</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-email-login'
                        type='phone'
                        value={phoneNumber}
                        name='email'
                        // onBlur={handleBlur}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        label='Phone Number'
                        inputProps={{}}
                    />
                    {/*{touched.email && errors.email && (*/}
                    {/*    <FormHelperText error id='standard-weight-helper-text-email-login'>*/}
                    {/*        {errors.email}*/}
                    {/*    </FormHelperText>*/}
                    {/*)}*/}
                </FormControl>
                <Box style={{margin: "30px"}}/>
                <FormControl
                    fullWidth
                    // error={Boolean(touched.password && errors.password)}
                    // sx={{...theme.typography.customInput}}
                >
                    <InputLabel htmlFor='outlined-adornment-password-login'>Password</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-password-login'
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        name='password'
                        // onBlur={handleBlur}
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
                    {/*{touched.password && errors.password && (*/}
                    {/*    <FormHelperText error id='standard-weight-helper-text-password-login'>*/}
                    {/*        {errors.password}*/}
                    {/*    </FormHelperText>*/}
                    {/*)}*/}
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
                    <Typography variant='subtitle1' color='secondary'
                                sx={{textDecoration: 'none', cursor: 'pointer'}}>
                        Forgot Password?
                    </Typography>
                </Stack>
                {/*{errors.submit && (*/}
                {/*    <Box sx={{mt: 3}}>*/}
                {/*        <FormHelperText error>{errors.submit}</FormHelperText>*/}
                {/*    </Box>*/}
                {/*)}*/}

                <Box sx={{mt: 2}}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            disabled={loading}
                            fullWidth
                            size='large'
                            type='submit'
                            variant='contained'
                            color='secondary'
                        >
                            Sign in
                        </Button>
                    </AnimateButton>
                </Box>
            </form>
        </>
    );
    // }
};

export default FirebaseLogin;
