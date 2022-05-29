// material-ui
import {useMutation} from '@apollo/client';
import {useState} from "react";
import {LoadingButton} from '@mui/lab';
import {Box} from '@mui/material';
// project imports
import {CREATE_CATEGORY} from "../../../apollo/mutations/category_mutation";
import {InputField} from "../../ui-component/input/InputField";
import MainCard from "../../ui-component/cards/MainCard";

const CategoryCreate = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [createCategory, {loading, error}] = useMutation(CREATE_CATEGORY);

    const handleSubmit = (e) => {
        e.preventDefault();
        createCategory({
            variables: {
                "input": {
                    "name": name,
                    "description": description
                }
            },
            update: cache => {
                cache.evict({fieldName: 'Category'});
            }
        }).then((data) => {
            console.log("==============>", data)
        });
    };

    return (
        <MainCard title='Create Category'>
            <form onSubmit={handleSubmit}>
                <Box sx={{margin: 'auto'}} style={{width: 'max-content'}}>
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
                    <Box textAlign={'center'} mt={2}>
                        <LoadingButton
                            type='submit'
                            variant='contained'
                            loading={loading}
                            data-cy='create-category-button'
                        >
                            Create Category
                        </LoadingButton>
                    </Box>
                </Box>
            </form>
        </MainCard>
    );
};

export default CategoryCreate;
