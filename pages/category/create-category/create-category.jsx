import {useState} from "react";
import {useMutation} from '@apollo/client';

import {LoadingButton} from '@mui/lab';
import {Box, Grid, Typography} from '@mui/material';

import {InputField} from "../../../src/ui-components/input/InputField";
import MainCard from "../../../src/ui-components/cards/MainCard";

import {CREATE_CATEGORY} from "../../../src/apollo/mutations/category_mutation";
import AnimateButton from "../../../src/ui-components/extended/AnimateButton";

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
    <MainCard title='Create Category' sx={{margin: 'auto'}} style={{maxWidth: 'max-content'}}>
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
              color='secondary'
              loading={loading}
              data-cy='category-create-button'
            >
              Create Category
            </LoadingButton>
          </AnimateButton>
        </Box>

        {error && (
          <Grid xs={12} container direction="row" alignItems='center' justifyContent='center'>
            <Typography variant='caption' fontSize='16px' textAlign="center" color="palevioletred">
              Error Happened!
            </Typography>
          </Grid>
        )}
      </form>
    </MainCard>
  );
};

export default CategoryCreate;
