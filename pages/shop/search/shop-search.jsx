import {useState} from "react";
import {useLazyQuery} from "@apollo/client";

import {Alert, Box, Button, Card, CardContent, TextField, Typography} from '@mui/material';

import MainCard from '../../../src/ui-components/cards/MainCard';
import Loader from "../../../src/ui-components/Loader";

import {GET_ONE_COMPANY} from "../../../src/apollo/queries/company_queries";


const CompanySearch = () => {
    const [getShop, {data, error, loading}] = useLazyQuery(GET_ONE_COMPANY);
    const [text, setText] = useState('');

    if (error)
        return (
            <Alert variant='outlined' severity='error'>
                {error.message}
            </Alert>
        );
    if (loading) return <Loader/>;
    return (
        <MainCard title='Company Search' sx={{margin: 'auto'}} style={{maxWidth: 'max-content'}}>
            <Typography variant='body2' component="div">
                <Box mb={4}>
                    <Box sx={{display: 'flex'}}>
                        <TextField
                            label={text}
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
                                        "getOneCompanyId": text
                                    }
                                }).then(() => {
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
                {data && (
                    <Card sx={{maxWidth: 275, bgcolor: '#00000021'}}>
                        <CardContent>
                            {data.getOneCompany?.id && (
                                <Typography sx={{fontSize: 18}} gutterBottom data-cy='shop-id-search-result'>
                                    Id: {data.getOneCompany.id}
                                </Typography>
                            )}

                            {data.getOneCompany?.name && (
                                <Typography sx={{fontSize: 18}} gutterBottom>
                                    Name: {data.getOneCompany.name}
                                </Typography>
                            )}

                            {data.getOneCompany?.lastName && (
                                <Typography sx={{mb: 1.5}}>
                                    Phone Number: {data.getOneCompany.phoneNumber}
                                </Typography>
                            )}
                            {data.getOneCompany?.email && (
                                <Typography sx={{mb: 1.5}}>
                                    Description: {data.getOneCompany.description}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                )}
            </Typography>
        </MainCard>
    );
};

export default CompanySearch;
