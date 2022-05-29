// material-ui
import {useMutation} from '@apollo/client';
import {LoadingButton} from '@mui/lab';
import {Box} from '@mui/material';
import {Form, Formik} from 'formik';
// project imports
import MainCard from 'pages/ui-component/cards/MainCard';
import {InputField} from 'pages/ui-component/input/InputField';
import {CREATE_CATEGORY} from '../../../../apollo/mutations/category_mutation';

// ==============================|| SAMPLE PAGE ||============================== //

const CategoryCreatePage = () => {
    const [createCategory] = useMutation(CREATE_CATEGORY);
    return (
        <MainCard title='Create Category'>
            <Formik
                initialValues={{
                    name: '',
                    image: '',
                    description: ''
                }}
                onSubmit={async values => {
                    const {errors} = await createCategory({
                        variables: {input: values},
                        update: cache => {
                            cache.evict({fieldName: 'Category'});
                        }
                    });
                    values.description = '';
                    values.image = '';
                    values.name = '';
                    if (!errors) {
                        console.log('success');
                    } else {
                        console.log(errors);
                    }
                }}
            >
                {({isSubmitting, handleChange, values}) => (
                    <Box sx={{margin: 'auto'}} style={{width: 'max-content'}}>
                        <Form>
                            <InputField
                                label='Name'
                                name='name'
                                placeholder='Name'
                                value={values.name}
                                onChange={handleChange}
                                dataCy='category-name-input'
                            />
                            <InputField
                                label='Description'
                                name='description'
                                placeholder='Description'
                                value={values.description}
                                onChange={handleChange}
                                dataCy='category-description-input'
                            />
                            <InputField
                                label='Image'
                                name='image'
                                placeholder='Image'
                                value={values.image}
                                onChange={handleChange}
                                dataCy='category-image-input'
                            />
                            <Box textAlign={'center'} mt={2}>
                                <LoadingButton
                                    type='submit'
                                    variant='contained'
                                    loading={isSubmitting}
                                    data-cy='create-category-button'
                                >
                                    Create Category
                                </LoadingButton>
                            </Box>
                        </Form>
                    </Box>
                )}
            </Formik>
        </MainCard>
    );
};

export default CategoryCreatePage;
