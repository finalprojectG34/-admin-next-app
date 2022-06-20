import { useMutation } from '@apollo/client'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, FormControl, InputLabel, MenuItem, Select,
} from '@mui/material'
import { useState } from 'react'
import { UPDATE_COMPANY } from '../../apollo/mutations/shop_mutations'
import { InputField } from '../input/InputField'

const CompanyUpdate = ({ handleClose, open, data, refetch }) => {
  const [name, setName] = useState(data?.name || '')
  const [description, setDescription] = useState(data?.description || '')
  const [tinNumber, setTinNumber] = useState(data?.tinNumber || '')

  const [subCity, setSubCity] = useState(data?.address?.subCity || '')
  const [city, setCity] = useState(data?.address?.city || '')
  const [addressName, setAddressName] = useState(
    data?.address?.addressName || ''
  )
  const [role, setRole] = useState(data?.role || '')


  const [updateCompany] = useMutation(UPDATE_COMPANY)

  const update = () => {
    updateCompany({
      variables: {
        input: {
          name,
          description,
          tinNumber,
          role,
          address: { subCity, city, addressName },
        },
        updateCompanyId: data.id,
      },
    }).then(() => {
      refetch()
      handleClose()
    })
  }
  const ROLE = ['SHOP', 'DELIVERY']

  const closeModal = () => {
    handleClose()
  }
  return (
    // <Box>
    <Dialog open={open} onClose={closeModal}>
      <DialogTitle fontSize={18} textAlign={'center'}>
        Shop Update
      </DialogTitle>
      <DialogContent>
        <InputField
          value={name}
          label='Shop Name'
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          value={description}
          label='description'
          name='description'
          onChange={(e) => setDescription(e.target.value)}
        />

        <InputField
          value={tinNumber}
          label='tin number'
          name='tinNumber'
          type={'number'}
          onChange={(e) => setTinNumber(e.target.value)}
        />

        <InputField
          value={subCity}
          label='sub city'
          name='subCity'
          onChange={(e) => setSubCity(e.target.value)}
        />

        <InputField
          value={city}
          label='city'
          name='city'
          onChange={(e) => setCity(e.target.value)}
        />

        <InputField
          value={addressName}
          label='address name'
          name='addressName'
          onChange={(e) => setAddressName(e.target.value)}
        />

        <FormControl variant='outlined' fullWidth sx={{ mt: 1 }}>
          <InputLabel>Role</InputLabel>
          <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label='role'
          >
            {ROLE.map((role, index) => (
                <MenuItem key={index} value={role}>
                  {role}
                </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeModal()}>Cancel</Button>
        <Button onClick={() => update()}>Update</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CompanyUpdate
