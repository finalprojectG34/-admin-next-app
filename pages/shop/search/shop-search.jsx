import {useState, useEffect} from "react";
import {useLazyQuery} from "@apollo/client";

import {
    Alert,
    Box,
    Button,
    Card,
    CardContent, FormControl,
    FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';

import MainCard from '../../../src/ui-components/cards/MainCard';
import Loader from "../../../src/ui-components/Loader";
import {SEARCH_COMPANY_BY_NAME} from "../../../src/apollo/queries/company_queries";
import {withApollo} from '../../../src/hooks/useIsAuth'

import {useTheme} from "@mui/material/styles";



const CompanySearch = () => {
    const theme = useTheme()
    const [getShop, {data, error, loading}] = useLazyQuery(SEARCH_COMPANY_BY_NAME);
    const [text, setText] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        let timer = isSubmitted && setTimeout(() => setIsSubmitted(false), 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [isSubmitted])

    if (loading) return <Loader/>;

    console.log(data)
    return (
        <MainCard title='Shop Search'>
            {
                error && <Alert variant='outlined' severity='error'>
                    {error.message}
                </Alert>
            }

            {
                isSubmitted && !data?.searchCompanyByName?.length && <Alert variant='outlined' severity='error' sx={{mb: 2}}>
                    No Shop Found.
                </Alert>
            }
            <Typography variant='body2' component="div">
                <Box mb={4}>
                    <FormControl component='fieldset'>
                        <FormLabel component='legend'>Search By</FormLabel>
                        <RadioGroup
                            aria-label='Search By'
                            defaultValue='shopName'
                            name='radio-buttons-group'
                        >
                            <FormControlLabel
                                value='shopName'
                                control={<Radio/>}
                                label='Shop Name'
                            />
                        </RadioGroup>
                    </FormControl>
                    <Box sx={{display: 'flex'}} mt={2}>
                        <TextField
                            label="Shop Name"
                            variant='outlined'
                            value={text}
                            onChange={e => setText(e.target.value)}
                            sx={{mr: 2}}
                            data-cy='shop-id-search-input'
                        />

                        <Button
                            variant='outlined'
                            onClick={() => {
                                getShop({
                                    variables: {
                                        name: text
                                    }
                                }).then(() => {
                                    setIsSubmitted(true)
                                }).catch(e => {
                                    console.log("error=====>", e)
                                });
                            }}
                            data-cy='shop-id-search-button'
                        >
                            Search
                        </Button>
                    </Box>
                </Box>
                {data && data?.searchCompanyByName.map(searchCompany => (
                    <Card sx={{maxWidth: 275, bgcolor: theme.palette.primary.light, mb: 1.5}} key={searchCompany.id}>
                        <CardContent>

                            {searchCompany?.name && (
                                <Typography sx={{fontSize: 18}} gutterBottom>
                                    Name: {searchCompany.name}
                                </Typography>
                            )}

                            {searchCompany?.phoneNumber && (
                                <Typography sx={{mb: 1.5}}>
                                    Phone Number: {searchCompany.phoneNumber}
                                </Typography>
                            )}
                            {searchCompany?.description && (
                                <Typography sx={{mb: 1.5}}>
                                    Description: {searchCompany.description}
                                </Typography>
                            )}

                            {searchCompany?.role && (
                                <Typography sx={{mb: 1.5}}>
                                    Role: {searchCompany.role}
                                </Typography>
                            )}

                            {searchCompany?.status && (
                                <Typography sx={{mb: 1.5}}>
                                    Status: {searchCompany.status}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                ))

                }
            </Typography>
        </MainCard>
    );
};

export default withApollo({ssr: false}) (CompanySearch);
