import {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useMutation} from "@apollo/client";

import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {LoadingButton} from "@mui/lab";

import useLocalStorage from "../../../src/hooks/useLocalStorage";
import AnimateButton from "../../../src/ui-components/extended/AnimateButton";
import fbConfig from "../../../src/firebase/fb-config";

import {SIGN_UP} from "../../../src/apollo/mutations/user_mutation";


const FirebaseRegister = () => {
  const router = useRouter();

  const theme = useTheme();
  // const scriptedRef = useScriptRef();
  // const customization = useSelector((state) => state.customization);
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  // const [checked, setChecked] = useState(true);
  const [confirmation, setConfirmation] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [checkPassword, setCheckPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const [sessionToken, setSessionToken] = useLocalStorage('store', null);
  const [rolesData, setRolesData] = useLocalStorage('roles', null);

  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  // const [strength, setStrength] = useState(0);
  // const [level, setLevel] = useState();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [singUp, {loading, error}] = useMutation(SIGN_UP);

  const handleVerifyCode = (e) => {
    e.preventDefault();
    confirmation.confirm(verificationCode).then((result) => {
      const user = result.user;
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
      })
        .then(res => {
          console.log("data ===================>", res)
          setSessionToken("accessToken");
          setRolesData(["ADMIN"]);
        });
    })
      .catch((error) => {
        setSignUpError(true);
        console.log("Code Not verified ==>", error)
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSigningUp(true);
    setSignUpError(false);

    const auth = fbConfig.auth;
    window.recaptchaVerifier = new fbConfig.RecaptchaVerifier('RecaptchaVerifier', {
      'size': 'invisible',
      'callback': (response) => console.log("recaptcha response", response)
    }, auth);
    const appVerifier = window.recaptchaVerifier;

    fbConfig.signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setConfirmation(confirmationResult);
        setIsSigningUp(false);
        console.log("Code sent")
      })
      .catch((error) => {
        setIsSigningUp(false);
        setSignUpError(true);
        console.log("Code Not sent ==>", error)
      });
  };

  const handleResetInfo = () => {
    setConfirmation(null);
    setIsSigningUp(false);
    setSignUpError(false);
  }

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
      {confirmation ? (
        <>
          <Grid container direction='column' justifyContent='center' spacing={2}>
            <Grid item xs={12}>
              <Box sx={{alignItems: 'center', display: 'flex'}}>
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
            <TextField
              fullWidth
              label='Verification Code'
              name='verification-code'
              type='text'
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />

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
                  loading={loading}
                >
                  Verify
                </LoadingButton>
              </AnimateButton>
            </Box>

            <Grid xs={12} container
                  direction="row"
                  alignItems='center'
                  justifyContent='center'>
              <Box sx={{mt: 2}}>
                <Button
                  fullWidth
                  size='large'
                  type='submit'
                  variant='text'
                  color='secondary'
                  onClick={handleResetInfo}
                >
                  Reset Phone Number
                </Button>
              </Box>
            </Grid>

            {signUpError && (
              <Grid xs={12} container
                    direction="row"
                    alignItems='center'
                    justifyContent='center'>
                <Typography
                  variant='caption'
                  fontSize='16px'
                  textAlign="center"
                  color="palevioletred"
                >
                  Error Happened!
                </Typography>
              </Grid>
            )}
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='First Name'
                  name='firstName'
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Last Name'
                  name='lastName'
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Box style={{margin: "20px"}}/>
            <TextField
              fullWidth
              label='Phone Number'
              name='phoneNumber'
              type='text'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Box style={{margin: "20px"}}/>
            <TextField
              fullWidth
              label='Email'
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box style={{margin: "20px"}}/>
            <FormControl fullWidth
              // error={Boolean(touched.password && errors.password)}
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
            </FormControl>
            <Box style={{margin: "20px"}}/>
            {/*<Grid container alignItems='center' justifyContent='space-between'>*/}
            {/*  <Grid item>*/}
            {/*    <FormControlLabel*/}
            {/*      control={*/}
            {/*        <Checkbox*/}
            {/*          checked={checked}*/}
            {/*          onChange={(event) => setChecked(event.target.checked)}*/}
            {/*          name='checked'*/}
            {/*          color='primary'*/}
            {/*        />*/}
            {/*      }*/}
            {/*      label={*/}
            {/*        <Typography variant='subtitle1'>*/}
            {/*          Agree with &nbsp; Terms & Condition.*/}
            {/*        </Typography>*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}

            <Box sx={{mt: 2}}>
              <AnimateButton>
                <LoadingButton
                  disableElevation
                  disabled={isSigningUp}
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  color='secondary'
                  loading={isSigningUp}
                >
                  Sign Up
                </LoadingButton>
              </AnimateButton>
            </Box>

            {(signUpError || error) && (
              <Grid xs={12} container direction="row" alignItems='center' justifyContent='center'>
                <Typography variant='caption' fontSize='16px' textAlign="center" color="palevioletred">
                  Error Happened!
                </Typography>
              </Grid>
            )}
          </form>
        </>
      )}
    </>
  );
};

export default FirebaseRegister;
