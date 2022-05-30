import {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';

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
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// project imports
// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useScriptRef from "../../../hooks/useScriptRef";
import useLocalStorage from "../../../hooks/useLocalStorage";
import AnimateButton from "../../ui-component/extended/AnimateButton";
import {useMutation} from "@apollo/client";
import {SIGN_UP} from "../../../apollo/mutations/user_mutation";
import {useRouter} from "next/router";
import fbConfig from "../../../firebase/fb-config";

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = (props) => {
    const router = useRouter();

    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true);
    const [confirmation, setConfirmation] = useState(null);

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [firebaseID, setFirebaseID] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const [sessionToken, setSessionToken] = useLocalStorage('store', null);
    const [rolesData, setRolesData] = useLocalStorage('roles', null);

    const [singUp, {loading, data, error}] = useMutation(SIGN_UP);

    const {
        match,
        isLoggedIn,
        firebaseID_auth
    } = props;

    const handleVerifyCode = (e) => {
        e.preventDefault();
        confirmation.confirm(verificationCode).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log({
                "token": {
                    "firstName": firstName,
                    "lastName": lastName,
                    "phone": phoneNumber,
                    "password": password,
                    "idToken": result._tokenResponse.idToken,
                    "confirmPassword": password
                }
            })
            singUp({
                variables: {
                    "token": {
                        "firstName": firstName,
                        "lastName": lastName,
                        "phone": phoneNumber,
                        "password": password,
                        "idToken": result._tokenResponse.idToken,
                        "confirmPassword": password
                    }
                }
            }).then(res => {
                console.log("data ===================>", res)
                setSessionToken("accessToken");
                setRolesData(["ADMIN"]);
            });
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = fbConfig.auth;

        window.recaptchaVerifier = new fbConfig.RecaptchaVerifier('RecaptchaVerifier', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // onSignInSubmit();
                console.log("recaptcha response", response)
            }
        }, auth);

        const appVerifier = window.recaptchaVerifier;
        fbConfig.signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("confirmation result ", confirmationResult)
                setConfirmation(confirmationResult);
                // ...
            }).catch((error) => {
            // Error; SMS not sent
            console.log("error ", error)
            // ...
        });
    };

    useEffect(() => {
        if (sessionToken) {
            router.push('/');
        }
        if (isLoggedIn) {
            router.push('/login');
        } else if (sessionToken && rolesData) {
            if (rolesData.token.indexOf('ADMIN') === -1) {
                router.push('/access-denied');
            } else {
                router.push('/');
            }
        }
    }, [isLoggedIn, sessionToken, rolesData])

    return (
        <>
            {confirmation ? (
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
                                <Typography variant='subtitle1'>Enter your verification code</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <form onSubmit={handleVerifyCode}>
                        <FormControl fullWidth
                            // error={Boolean(touched.email && errors.email)}
                            // sx={{...theme.typography.customInput}}
                        >
                            <InputLabel htmlFor='outlined-adornment-email-login'>Verification Code</InputLabel>
                            <OutlinedInput
                                id='outlined-adornment-email-login'
                                type='number'
                                value={verificationCode}
                                name='verification-code'
                                // onBlur={handleBlur}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                label='Verification Code'
                                inputProps={{}}
                            />
                        </FormControl>

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
                                    Verify
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                </>
            ) : (
                <>
                    <Grid container direction='column' justifyContent='center' spacing={2}>
                        <Grid item xs={12} container alignItems='center' justifyContent='center'>
                            <Box sx={{mb: 2}}>
                                <Typography variant='subtitle1'>Sign up with Phone Number</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <form onSubmit={handleSubmit}>

                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label='First Name'
                                    margin='normal'
                                    name='fname'
                                    type='text'
                                    defaultValue=''
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    sx={{...theme.typography.customInput}}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label='Last Name'
                                    margin='normal'
                                    name='lname'
                                    type='text'
                                    defaultValue=''
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    sx={{...theme.typography.customInput}}
                                />
                            </Grid>
                        </Grid>
                        <Box style={{margin: "20px"}}/>
                        <FormControl fullWidth
                            // error={Boolean(touched.email && errors.email)}
                            // sx={{...theme.typography.customInput}}
                        >
                            <InputLabel htmlFor='outlined-adornment-email-register'>Phone Number</InputLabel>
                            <OutlinedInput
                                id='outlined-adornment-email-register'
                                type='phone'
                                value={phoneNumber}
                                name='phone'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                inputProps={{}}
                            />
                            {/*{touched.email && errors.email && (*/}
                            {/*    <FormHelperText error id='standard-weight-helper-text--register'>*/}
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
                            <InputLabel htmlFor='outlined-adornment-password-register'>Password</InputLabel>
                            <OutlinedInput
                                id='outlined-adornment-password-register'
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                name='password'
                                label='Password'
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
                                inputProps={{}}
                            />
                            {/*{touched.password && errors.password && (*/}
                            {/*    <FormHelperText error id='standard-weight-helper-text-password-register'>*/}
                            {/*        {errors.password}*/}
                            {/*    </FormHelperText>*/}
                            {/*)}*/}
                        </FormControl>

                        {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box sx={{mb: 2}}>
                                    <Grid container spacing={2} alignItems='center'>
                                        <Grid item>
                                            <Box
                                                style={{backgroundColor: level?.color}}
                                                sx={{width: 85, height: 8, borderRadius: '7px'}}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='subtitle1' fontSize='0.75rem'>
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}

                        <Grid container alignItems='center' justifyContent='space-between'>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(event) => setChecked(event.target.checked)}
                                            name='checked'
                                            color='primary'
                                        />
                                    }
                                    label={
                                        <Typography variant='subtitle1'>
                                            Agree with &nbsp;
                                            <Typography variant='subtitle1' component="div">
                                                Terms & Condition.
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>

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
                                    Sign up
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                </>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isSigningUp: state.auth.isSigningUp,
        signUpError: state.auth.signUpError,
        isLoggedIn: state.auth.isLoggedIn,
        firebaseID_auth: state.auth.firebaseID,
    };
};

export default connect(mapStateToProps)(FirebaseRegister);
