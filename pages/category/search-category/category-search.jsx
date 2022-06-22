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

import Loader from '../../../src/ui-components/Loader'
import MainCard from '../../../src/ui-components/cards/MainCard'

import { SEARCH_CATEGORY_BY_NAME} from '../../../src/apollo/queries/category_queries'
import {useTheme} from "@mui/material/styles";
import {withApollo} from '../../../src/hooks/useIsAuth'


const CategorySearch = () => {
    const theme = useTheme()
    const [getCategory, {data, error, loading}] = useLazyQuery(SEARCH_CATEGORY_BY_NAME)
    const [text, setText] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        let timer = isSubmitted && setTimeout(() => setIsSubmitted(false), 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [isSubmitted])


    if (loading) return <Loader/>
    return (
        <MainCard title='Search Category'>
            {
                error && <Alert variant='outlined' severity='error'>
                    {error.message}
                </Alert>
            }
            {
                isSubmitted && !data?.searchCategoryByName.length &&
                <Alert variant='outlined' severity='error' sx={{mb: 2}}>
                    No Category Found.
                </Alert>
            }
            <Typography variant='body2' component='div'>
                <Box>
                    <Box mb={4}>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend'>Search By</FormLabel>
                            <RadioGroup
                                aria-label='Search By'
                                defaultValue='name'
                                name='radio-buttons-group'
                            >
                                <FormControlLabel
                                    value='name'
                                    control={<Radio/>}
                                    label='Name'
                                />
                            </RadioGroup>
                        </FormControl>
                        <Box sx={{display: 'flex'}} mt={2}>
                            <TextField

                                label="Category Name"
                                variant='outlined'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                sx={{mr: 2}}
                            />

                            <Button
                                variant='outlined'
                                onClick={() => {
                                    getCategory({
                                        variables: {
                                            name: text,
                                        },
                                    }).then(() => {
                                        setIsSubmitted(true)
                                    })
                                }}
                            >
                                Search
                            </Button>
                        </Box>
                    </Box>
                    {data && data?.searchCategoryByName.map(searchCategory => (
                        <Card sx={{maxWidth: 275, bgcolor: theme.palette.primary.light, mb: 1.5}} key={searchCategory}>
                            <CardContent>
                                {searchCategory.name && (
                                    <Typography sx={{fontSize: 18}} gutterBottom>
                                        Name: {searchCategory.name}
                                    </Typography>
                                )}
                                {
                                    <Typography sx={{mb: 1.5}}>
                                        Count: {searchCategory.count}
                                    </Typography>
                                }
                                {searchCategory.description && (
                                    <Typography sx={{mb: 1.5}}>
                                        Description: {searchCategory.description}
                                    </Typography>
                                )}

                            </CardContent>
                        </Card>
                    ))

                    }
                </Box>
            </Typography>
        </MainCard>
    )
}

export default withApollo({ssr: true}) (CategorySearch)
