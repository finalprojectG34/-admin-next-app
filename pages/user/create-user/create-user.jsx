import {useMutation} from '@apollo/client'
import {useEffect, useState} from 'react'

import {LoadingButton} from '@mui/lab'
import {
    Box,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Alert
} from '@mui/material'

import MainCard from '../../../src/ui-components/cards/MainCard'
import {InputField} from '../../../src/ui-components/input/InputField'

import {CREATE_USER} from '../../../src/apollo/mutations/user_mutation'
import AnimateButton from '../../../src/ui-components/extended/AnimateButton'

const UserCreate = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [createUser, {loading, error}] = useMutation(CREATE_USER)


    useEffect(() => {
        let timer = isSubmitted && setTimeout(() => setIsSubmitted(false), 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [isSubmitted])

    const handleSubmit = (e) => {
        e.preventDefault()
        createUser({
            variables: {
                input: {
                    firstName,
                    lastName,
                    phone,
                    role,
                },
            },
        }).then(() => {
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            setRole('')
            setIsSubmitted(true)
        }).catch(e => {
            console.log(e)
        })
        // .then((data) => {
        //   router.push('/user/user-list')
        //   console.log('user creation success', data)
        // })
        // .catch((e) => {
        //   console.log('user creation error', e)
        // })
    }

    return (
        <MainCard
            title='Create User'
            sx={{margin: 'auto'}}
            style={{maxWidth: 'max-content'}}
        >
            {
                isSubmitted && <Alert
                    variant="filled"
                    severity={'success'}

                >
                   User Created Successfully.
                </Alert>
            }
            <form onSubmit={handleSubmit}>
                <InputField
                    label='First Name'
                    name='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    dataCy='user-firstName-input'
                />

                <InputField
                    label='Last Name'
                    name='lastName'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    dataCy='user-lastName-input'
                />

                <InputField
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Image'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    dataCy='user-email-input'
                />

                <InputField
                    label='Phone Number'
                    name='phone'
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    dataCy='user-phoneNumber-input'
                />

                <FormControl sx={{width: '-webkit-fill-available'}} margin='normal'>
                    <InputLabel id='role-label'>Role</InputLabel>
                    <Select
                        labelId='role-label'
                        id='role-select'
                        value={role}
                        label='Role'
                        onChange={(e) => setRole(e.target.value)}
                        data-cy='user-role-select'
                    >
                        <MenuItem value='USER'>USER</MenuItem>
                        <MenuItem value='ADMIN'>ADMIN</MenuItem>
                        <MenuItem value='SELLER'>SELLER</MenuItem>
                        <MenuItem value='SUPER'>SUPER</MenuItem>
                    </Select>
                </FormControl>

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
                            data-cy='user-create-button'
                        >
                            Create User
                        </LoadingButton>
                    </AnimateButton>
                </Box>

                {error && (
                    <Grid
                        xs={12}
                        container
                        direction='row'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Typography
                            variant='caption'
                            fontSize='16px'
                            textAlign='center'
                            color='palevioletred'
                        >
                            Error Happened!
                        </Typography>
                    </Grid>
                )}
            </form>
        </MainCard>
    )
}

export default UserCreate
