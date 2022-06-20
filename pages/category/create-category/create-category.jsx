import {useState, useEffect} from 'react'
import {useMutation} from '@apollo/client'

import {LoadingButton} from '@mui/lab'
import {Alert, Box, Dialog, Grid, Typography} from '@mui/material'

import {InputField} from '../../../src/ui-components/input/InputField'
import MainCard from '../../../src/ui-components/cards/MainCard'

import {CREATE_CATEGORY} from '../../../src/apollo/mutations/category_mutation'
import AnimateButton from '../../../src/ui-components/extended/AnimateButton'
import Loader from "../../../src/ui-components/Loader";

const CategoryCreate = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        let timer = isSubmitted && setTimeout(() => setIsSubmitted(false), 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [isSubmitted])

    const [createCategory, {loading, error}] = useMutation(CREATE_CATEGORY)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        createCategory({
            variables: {
                input: {
                    name: name,
                    description: description,
                },
            },
        }).then((data) => {
            console.log('==============>', data)
            setName('')
            setDescription('')
        }).catch(e => {
            console.log('==============>', e)
            setName('')
            setDescription('')
        })
    }

    return (
        <MainCard
            title='Create Category'
            sx={{margin: 'auto'}}
            style={{maxWidth: 'fit-content'}}
        >

            {
                isSubmitted && <Alert
                    variant="filled"
                    severity={'success'}

                >
                    Category Created Successfully.
                </Alert>
            }
            {error && (
                <Dialog open={true}>
                    <div className='vw-100 uploading'>
                        <Loader/>
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
                    dataCy='category-name-input'
                />
                <InputField
                    label='Description'
                    name='description'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    dataCy='category-description-input'
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
                            loading={loading}
                            data-cy='category-create-button'
                        >
                            Create Category
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

export default CategoryCreate
