import React, { useState } from 'react'
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material'
import { GET_ONE_USER } from '../../apollo/queries/user_queries'
import { useQuery, useMutation } from '@apollo/client'
import { InputField } from '../input/InputField'
import { UPDATE_USER } from '../../apollo/mutations/user_mutation'
import Loader from '../Loader'

const UserUpdate = ({ handleClose, open, data }) => {
  // const { data, loading } = useQuery(GET_ONE_USER, {
  //   variables: { getUserByIdId: id },
  // })
  if (!data) {
    return <Loader />
  }

  const [firstName, setFirstName] = useState(data.firstName || '')
  const [lastName, setLastName] = useState(data.lastName || '')
  const [phone, setPhone] = useState(data.phone || '')
  const [email, setEmail] = useState(data.email || '')
  const [updateUser] = useMutation(UPDATE_USER)

  const update = () => {
    // console.log({ firstName, lastName, email, phone, data.id })s
    updateUser({
      variables: {
        input: { firstName, lastName, email, phone },
        updateUserId: data.id,
      },
    })
    handleClose()
  }
  const closeModal = () => {
    handleClose()
  }
  return (
    // <Box>
    <Dialog open={open} onClose={closeModal}>
      <DialogTitle fontSize={18} textAlign={'center'}>
        User Update
      </DialogTitle>
      <DialogContent>
        <InputField
          value={firstName}
          label='firstName'
          type='text'
          name='firstName'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          value={lastName}
          label='lastName'
          type='text'
          name='lastName'
          onChange={(e) => setLastName(e.target.value)}
        />

        <InputField
          value={phone}
          label='phone'
          name='phone'
          onChange={(e) => setPhone(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeModal()}>Cancel</Button>
        <Button onClick={() => update()}>Update</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserUpdate
