import {useEffect, useState} from 'react'
import {useLazyQuery} from '@apollo/client'

import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material'

import MainCard from '../../../src/ui-components/cards/MainCard'

import {
    SEARCH_USER,
} from '../../../src/apollo/queries/user_queries'
import {useTheme} from "@mui/material/styles";
import {withApollo} from '../../../src/hooks/useIsAuth'


const UserSearch = () => {
    const theme = useTheme()
    const [searchByFirstName, {data, error}] =
        useLazyQuery(SEARCH_USER)
    const [text, setText] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        let timer = isSubmitted && setTimeout(() => setIsSubmitted(false), 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [isSubmitted])
    return (
        <MainCard title='Search User'>
            {
                error && <Alert variant='outlined' severity='error'>
                    {error.message}
                </Alert>
            }
            {
                !data?.searchUserByName.length && isSubmitted &&
                <Alert variant='outlined' severity='error' sx={{mb: 2}}>
                    No User Found!
                </Alert>
            }
            <Typography variant='body2' component='div'>
                <Box mb={4}>
                    <FormControl component='fieldset'>
                        <FormLabel component='legend'>Search By</FormLabel>
                        {/* <RadioGroup
              aria-label='Search By'
              defaultValue='id'
              name='radio-buttons-group'
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value='id' control={<Radio />} label='Id' /> */}
                        <RadioGroup
                            aria-label='Search By'
                            defaultValue='firstName'
                            name='radio-buttons-group'
                        >
                            <FormControlLabel
                                value='firstName'
                                control={<Radio/>}
                                label='First Name'
                            />
                        </RadioGroup>
                    </FormControl>
                    <Box sx={{display: 'flex'}} mt={2}>
                        <TextField
                            label='First Name'
                            variant='outlined'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            sx={{mr: 2}}
                        />

                        <Button
                            variant='outlined'
                            onClick={() => {
                                searchByFirstName({
                                    variables: {
                                        name: text,
                                    },
                                }).then(() => setIsSubmitted(true))
                            }}
                            data-cy='user-id-search-button'
                        >
                            Search
                        </Button>
                    </Box>
                </Box>
                {data &&
                    data?.searchUserByName.map((searchData) => (
                        <Card
                            key={searchData.id}
                            sx={{maxWidth: 275, bgcolor: theme.palette.primary.light, marginBottom: '15px'}}
                        >
                            <CardContent>
                                <Typography sx={{fontSize: 18, mb: 1.5}} gutterBottom>
                                    First Name: {searchData.firstName}
                                </Typography>
                                <Typography sx={{mb: 1.5}}>
                                    Last Name: {searchData.lastName}
                                </Typography>

                                <Typography sx={{mb: 1.5}}>
                                    Email: {searchData.email}
                                </Typography>

                                <Typography sx={{mb: 1.5}}>
                                    Phone Number: {searchData.phone}
                                </Typography>

                                <Typography sx={{mb: 1.5}}>
                                    Role: {searchData.role}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
            </Typography>
        </MainCard>
    )
}

export default withApollo({ssr: true})(UserSearch)
