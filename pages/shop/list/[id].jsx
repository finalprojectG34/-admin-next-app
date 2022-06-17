import { useRouter } from 'next/router'
import NavigationDrawer from '../../../src/ui-components/navigation'

import { useLazyQuery, useQuery } from '@apollo/client'
import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import { Box } from '@mui/system'
import { GET_ONE_COMPANY } from '../../../src/apollo/queries/company_queries'
import { useState } from 'react'
import { SEARCH_USER } from '../../../src/apollo/queries/user_queries'
import Loader from '../../../src/ui-components/Loader'

const CompanyStatus = () => {
  const router = useRouter()
  const [text, setText] = useState('')
  const { data, loading } = useQuery(GET_ONE_COMPANY, {
    variables: { getOneCompanyId: router.query.id },
  })
  const [
    searchByFirstName,
    { data: searchData, error, loading: searchLoading },
  ] = useLazyQuery(SEARCH_USER)

  if (loading || searchLoading) {
    return <Loader />
  }

  if (error) {
    return console.log(error)
  }
  const {
    description,
    name,
    phoneNumber,
    status,
    tinNumber,
    address: { addressName, city, subCity },
    image: { imagePath },
  } = data?.getOneCompany

  return (
    <Box mt={2}>
      <NavigationDrawer>
        <Typography variant='h6' gutterBottom sx={{ fontSize: 25 }}>
          Shop Status
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} pb={2}>
            <Card sx={{ minWidth: 275, backgroundColor: '#00000021' }}>
              <CardContent>
                {/* {data?.getOneCompany !== undefined &&
                  image?.imagePath !== 'null' && (
                    <Image
                      src={`${image.imagePath}`}
                      layout='fill'
                    />
                  )} */}
                <Stack direction={'row'} alignItems='baseline' mb={3}>
                  <Typography sx={{ fontSize: 22 }} mr={6}>
                    {name}
                  </Typography>
                  <Typography sx={{ fontSize: 18 }}>{phoneNumber}</Typography>
                </Stack>
                <Typography sx={{ fontSize: 18 }} mb={1}>
                  Address: {addressName}, {city}, {subCity}
                </Typography>
                <Typography sx={{ fontSize: 18 }} mb={1}>
                  Description: {description}
                </Typography>
                <Typography sx={{ fontSize: 18 }} mb={1}>
                  Status: {status}
                </Typography>
                <Typography sx={{ fontSize: 18 }} mb={1}>
                  Tin Number: {tinNumber}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction={'row'} mb={4} minWidth={'100%'}>
              <TextField
                label='name'
                variant='outlined'
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
              />

              <Button
                variant='contained'
                sx={{ marginLeft: '10px' }}
                onClick={() => {
                  searchByFirstName({
                    variables: {
                      name: text,
                    },
                  })
                }}
              >
                Search
              </Button>
            </Stack>

            {searchData &&
              searchData?.searchUserByName.map((data) => (
                <Card
                  key={data.id}
                  sx={{
                    minWidth: 275,
                    bgcolor: '#00000021',
                    marginBottom: '15px',
                  }}
                >
                  <CardContent>
                    <Stack
                      direction={'row'}
                      justifyContent='space-between'
                      alignItems={'center'}
                    >
                      <Typography sx={{ fontSize: 18 }} gutterBottom>
                        First Name: {data.firstName}
                      </Typography>
                      <Button
                        variant='contained'
                        sx={{
                          backgroundColor: 'gray',
                          ':hover': { backgroundColor: 'GrayText' },
                        }}
                      >
                        ASSIGN
                      </Button>
                    </Stack>
                    <Typography sx={{ mb: 1.5 }}>
                      Last Name: {data.lastName}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }}>
                      Phone Number: {data.phone}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }}>Role: {data.role}</Typography>
                  </CardContent>
                </Card>
              ))}
          </Grid>
        </Grid>
      </NavigationDrawer>
    </Box>
  )
}

export default CompanyStatus
