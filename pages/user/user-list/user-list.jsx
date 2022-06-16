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
  TableFooter,
  TablePagination,
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
  const { data, error, loading, refetch } = useQuery(GET_ALL_USERS)

  const [deleteUser] = useMutation(DELETE_USER)

  const [currentUserId, setCurrentUserId] = useState('')
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const { data: getOneUserData } = useQuery(GET_ONE_USER, {
    variables: { getUserByIdId: currentUserId },
  })

  const setUserUpdate = (id) => {
    setOpen(true)
    setCurrentUserId(id)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
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
          refetch={refetch}
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
                <TableCell align='right'>Role</TableCell>
                <TableCell align='right'>Delete</TableCell>
                <TableCell align='right'>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data?.getAllUsers.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data?.getAllUsers
              ).map((user, index) =>
                !user ? (
                  <Loader />
                ) : (
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
                    <TableCell align='right'>{user.role}</TableCell>
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
                        color='success'
                        sx={{ cursor: 'pointer' }}
                        fontSize='small'
                      />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={data?.getAllUsers.length || 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Typography>
    </MainCard>
  )
}

export default UserList
