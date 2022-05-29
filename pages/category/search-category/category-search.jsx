// material-ui
import {useState} from 'react';

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
    Typography
} from '@mui/material';
import {useLazyQuery} from '@apollo/client';

// project imports
import {GET_ONE_CATEGORY} from "../../../apollo/queries/category_queries";
import Loader from "../../ui-component/Loader";
import MainCard from "../../ui-component/cards/MainCard";

const CategorySearch = () => {
    const [getCategory, {data, error, loading}] = useLazyQuery(GET_ONE_CATEGORY);
    const [value, setValue] = useState('id');
    const [text, setText] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };
    if (error)
        return (
            <Alert variant='outlined' severity='error'>
                {error.message}
            </Alert>
        );
    if (loading) return <Loader/>;
    return (
        <MainCard title='Search Category'>
            <Typography variant='body2' component="div">
                <Box>
                    <Box mb={4}>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend'>Search By</FormLabel>
                            <RadioGroup
                                aria-label='Search By'
                                defaultValue='id'
                                name='radio-buttons-group'
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value='id' control={<Radio/>} label='Id'/>
                                <FormControlLabel
                                    value='name'
                                    control={<Radio/>}
                                    label='Name'
                                />
                            </RadioGroup>
                        </FormControl>
                        <Box sx={{display: 'flex'}}>
                            <TextField
                                label={value}
                                variant='standard'
                                value={text}
                                onChange={e => setText(e.target.value)}
                                sx={{mr: 2}}
                            />

                            <Button
                                variant='outlined'
                                onClick={() => {
                                    getCategory({
                                        variables: {
                                            getOneCategoryId: text
                                        }
                                    });
                                }}
                            >
                                Search
                            </Button>
                        </Box>
                    </Box>
                    {data && (
                        <Card sx={{maxWidth: 275, bgcolor: '#00000021'}}>
                            <CardContent>
                                {data.getOneCategory.name && (
                                    <Typography sx={{fontSize: 18}} gutterBottom>
                                        Name: {data.getOneCategory.name}
                                    </Typography>
                                )}

                                {data.getOneCategory.description && (
                                    <Typography sx={{mb: 1.5}}>
                                        Description: {data.getOneCategory.description}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    )}
                </Box>
            </Typography>
        </MainCard>
    );
};

export default CategorySearch;
