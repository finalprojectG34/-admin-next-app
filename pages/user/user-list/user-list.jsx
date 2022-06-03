import { useLazyQuery, useMutation, useQuery } from '@apollo/client'

import {
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { HighlightOffOutlined, CachedOutlined } from '@mui/icons-material'

import MainCard from '../../../src/ui-components/cards/MainCard'
import Loader from '../../../src/ui-components/Loader'

import {
  GET_ALL_USERS,
  GET_ONE_USER,
} from '../../../src/apollo/queries/user_queries'
import { DELETE_USER } from '../../../src/apollo/mutations/user_mutation'

import { useEffect, useState } from 'react'
import UserUpdate from '../../../src/ui-components/update-cards/UserUpdate'

const UserList = () => {
  const [getUsers, { data, error, loading }] = useLazyQuery(GET_ALL_USERS, {
    nextFetchPolicy: 'network-only',
  })

  const [deleteUser] = useMutation(DELETE_USER)

  const [open, setOpen] = useState(false)
  const [currentUserId, setCurrentUserId] = useState('')

  const { data: getOneUserData } = useQuery(GET_ONE_USER, {
    variables: { getUserByIdId: currentUserId },
  })

  useEffect(() => {
    getUsers().then((d) => {
      console.log(d)
    })
  }, [])

  const setUserUpdate = (id) => {
    setOpen(true)
    setCurrentUserId(id)
  }

  if (error)
    return (
      <Alert variant='outlined' severity='error'>
        {error.message}
      </Alert>
    )
  if (loading) return <Loader />
  return (
    <MainCard
      title='User List'
      sx={{ margin: 'auto' }}
      style={{ maxWidth: 'max-content' }}
    >
      {open && (
        <UserUpdate
          handleClose={setOpen}
          open={open}
          data={getOneUserData?.getUserById}
        />
      )}
      <Typography variant='body2' component='div'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, bgcolor: '#00000021' }}>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell align='right'>First Name</TableCell>
                <TableCell align='right'>Last Name</TableCell>
                <TableCell align='right'>Phone Number</TableCell>
                <TableCell align='right'>Delete</TableCell>
                <TableCell align='right'>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.getAllUsers?.map((user, index) =>
                !user ? null : (
                  <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    data-cy='user-list-element'
                  >
                    <TableCell component='th' scope='row'>
                      {index + 1}
                    </TableCell>
                    <TableCell align='right'>{user.firstName}</TableCell>
                    <TableCell align='right'>{user.lastName}</TableCell>
                    <TableCell align='right'>{user.phone}</TableCell>
                    <TableCell align='right'>
                      <HighlightOffOutlined
                        data-cy='user-delete-element'
                        onClick={() => {
                          deleteUser({
                            variables: {
                              deleteUserId: user.id,
                            },
                            update: (cache) => {
                              cache.evict({ id: 'User:' + user.id })
                            },
                          }).then(() => {})
                        }}
                        color='error'
                        sx={{ cursor: 'pointer' }}
                        fontSize='small'
                      />
                    </TableCell>
                    <TableCell align='right'>
                      <CachedOutlined
                        data-cy='user-edit-element'
                        onClick={() => setUserUpdate(user.id)}
                        // onClick={() =>
                        //     {
                        //   updateUser({
                        //     variables: {
                        //       deleteUserId: user.id,
                        //     },
                        //     update: (cache) => {
                        //       cache.evict({ id: 'User:' + user.id })
                        //     },
                        //   }).then(() => {})
                        // }}
                        color='success'
                        sx={{ cursor: 'pointer' }}
                        fontSize='small'
                      />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
    </MainCard>
  )
}

export default UserList
