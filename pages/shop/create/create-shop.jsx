import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import Compressor from 'compressorjs'

import { LoadingButton } from '@mui/lab'
import {
  Box,
  Dialog,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

import MainCard from '../../../src/ui-components/cards/MainCard'
import { InputField } from '../../../src/ui-components/input/InputField'
import Loader from '../../../src/ui-components/Loader'
import AnimateButton from '../../../src/ui-components/extended/AnimateButton'

import { CREATE_COMPANY } from '../../../src/apollo/mutations/shop_mutations'
import fbConfig from '../../../src/firebase/fb-config'

const CompanyCreate = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [subCity, setSubCity] = useState('')
  const [addressName, setAddressName] = useState('')
  const [tinNumber, setTinNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [role, setRole] = useState('')

  const [filePath, setFilePath] = useState(null)
  const [picture, setPicture] = useState(null)
  const [fileSizeError, setFileSizeError] = useState(null)
  const [url, setUrl] = useState(null)
  const [isCreating, setIsCreating] = useState(null)

  const [createCompany, { loading, error }] = useMutation(CREATE_COMPANY)

  const ROLE = ['SHOP', 'DELIVERY']

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsCreating(true)
    if (picture) {
      // setCheckFields(true);
      fbConfig
        .uploadBytes(fbConfig.storageRef, picture)
        .then((snapshot) => {
          console.log('Uploaded a blob or file!', snapshot)
          fbConfig
            .getDownloadURL(fbConfig.storageRef)
            .then((url) => setUrl(url))
        })
        .catch((e) => {
          setIsCreating(false)
          console.log('error happened ====>', e)
        })
    } else {
      setUrl('url')
      // setCheckFields(false);
    }
  }

  const handleFile = (e) => {
    if (e.target.files[0].size >= 1500000) {
      setFileSizeError(true)
    } else {
      setFileSizeError(false)
    }
    if (e.target.files[0] && !fileSizeError) {
      const image = e.target.files[0]
      new Compressor(image, {
        quality: 0.6,
        success: (res) => {
          setPicture(res)
        },
      })
      setFilePath(URL.createObjectURL(e.target.files[0]))
    }
  }

  useEffect(() => {
    if (url) {
      createCompany({
        variables: {
          input: {
            name: name,
            description: description,
            // ownerID: '6293bb9598be04cb9f7df319',
            phoneNumber: phoneNumber,
            address: {
              location: {
                coordinates: [654.545, 864.64554],
                // type: 'Point',
              },
              subCity: subCity,
              city: city,
              addressName: addressName,
            },
            role,
            tinNumber: tinNumber,
            image: {
              images: [url],
              bgImage: 'bgImage',
              imageCover: picture?.name,
              suffix: picture?.type,
              imagePath: url,
            },
          },
        },
      }).then((data) => {
        console.log('==============>', data)
        setIsCreating(false)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return (
    <MainCard
      title='Create Shop'
      sx={{ margin: 'auto' }}
      style={{ maxWidth: 'max-content' }}
    >
      {isCreating && (
        <Dialog open={true}>
          <div className='vw-100 uploading'>
            <Loader />
          </div>
        </Dialog>
      )}
      <form onSubmit={handleSubmit}>
        <InputField
          label='Name'
          name='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          dataCy='company-name-input'
        />
        <InputField
          label='Description'
          name='description'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          dataCy='company-description-input'
        />
        <InputField
          label='City'
          name='city'
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          dataCy='company-city-input'
        />
        <InputField
          label='Sub-City'
          name='sub-city'
          placeholder='Sub-City'
          value={subCity}
          onChange={(e) => setSubCity(e.target.value)}
          dataCy='company-sub-city-input'
        />
        <InputField
          label='Phone Number'
          name='phoneNumber'
          placeholder='Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          dataCy='company-phoneNumber-input'
        />
        <InputField
          label='Street Name'
          name='street-name'
          placeholder='Street Name'
          value={addressName}
          onChange={(e) => setAddressName(e.target.value)}
          dataCy='company-address-name-input'
        />
        <InputField
          label='Tin Number'
          name='tin-number'
          placeholder='Tin Number'
          value={tinNumber}
          onChange={(e) => setTinNumber(e.target.value)}
          dataCy='company-tin-number-input'
        />

        <FormControl sx={{ width: '-webkit-fill-available' }} margin='normal'>
          <InputLabel id='role-label'>Role</InputLabel>
          <Select
            labelId='role-label'
            id='role-select'
            value={role}
            label='Role'
            onChange={(e) => setRole(e.target.value)}
          >
            {ROLE.map((role, index) => (
              <MenuItem key={index} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className='mb-3 mt-3'>
          <img className='w-100' src={filePath} alt='' />
          <Typography component='p'>Upload Picture</Typography>
          <div className='px-3'>
            <input
              type='file'
              accept='.gif,.jpg,.jpeg,.png'
              className=''
              onChange={handleFile}
            />
          </div>
        </div>

        <Box sx={{ mt: 2 }}>
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
              data-cy='company-create-button'
            >
              Create Shop
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

export default CompanyCreate
