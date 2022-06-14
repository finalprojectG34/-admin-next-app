import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'

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
import Loader from '../../../src/ui-components/Loader'

import {
  GET_ONE_USER,
  SEARCH_USER,
} from '../../../src/apollo/queries/user_queries'

const UserSearch = () => {
  const [searchByFirstName, { data, error, loading }] =
    useLazyQuery(SEARCH_USER)
  //   const [value, setValue] = useState('id')
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }
  if (error)
    return (
      <Alert variant='outlined' severity='error'>
        {error.message}
      </Alert>
    )
  if (loading) return <Loader />
  return (
    <MainCard title='Search User'>
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
                control={<Radio />}
                label='First Name'
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: 'flex' }}>
            <TextField
              label='firstName'
              variant='outlined'
              value={text}
              onChange={(e) => setText(e.target.value)}
              sx={{ mr: 2 }}
            />

            <Button
              variant='outlined'
              onClick={() => {
                searchByFirstName({
                  variables: {
                    name: text,
                  },
                })
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
              sx={{ maxWidth: 275, bgcolor: '#00000021', marginBottom: '15px' }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 18 }} gutterBottom>
                  First Name: {searchData.firstName}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                  Last Name: {searchData.lastName}
                </Typography>

                <Typography sx={{ mb: 1.5 }}>
                  Phone Number: {searchData.phone}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Typography>
    </MainCard>
  )
}

export default UserSearch
