import {useMutation, useQuery} from '@apollo/client';

import {
    Alert,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import {HighlightOffOutlined} from '@mui/icons-material';

import Loader from "../../../src/ui-components/Loader";
import MainCard from "../../../src/ui-components/cards/MainCard";

import {GET_ALL_CATEGORIES} from "../../../src/apollo/queries/category_queries";
import {DELETE_CATEGORY} from "../../../src/apollo/mutations/category_mutation";


const CategoryList = () => {
    const {data, error, loading} = useQuery(GET_ALL_CATEGORIES);
    const [deleteCategory] = useMutation(DELETE_CATEGORY);

    if (error)
        return (
            <Alert variant='outlined' severity='error'>
                {error.message}
            </Alert>
        );
    if (loading) return <Loader/>;
    return (
        <MainCard title='Categories List'>
            <Typography variant='body2' component="div">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650, bgcolor: '#00000021'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Number</TableCell>
                                <TableCell align='right'>Name</TableCell>
                                <TableCell align='right'>Description</TableCell>
                                <TableCell align='right'>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody data-cy='category-list'>
                            {data.getAllCategories?.map((category, index) =>
                                !category ? null : (
                                    <TableRow
                                        key={category.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        data-cy='category-list-row'
                                    >
                                        <TableCell component='th' scope='row'>
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align='right'>{category.name}</TableCell>
                                        <TableCell align='right'>{category.description}</TableCell>
                                        <TableCell align='right'>
                                            <HighlightOffOutlined
                                                data-cy='delete-category'
                                                color='error'
                                                sx={{cursor: 'pointer'}}
                                                onClick={() => {
                                                    deleteCategory({
                                                        variables: {
                                                            deleteCategoryId: category.id
                                                        },
                                                        update: cache => {
                                                            cache.evict({id: 'Category:' + category.id});
                                                        }
                                                    });
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Typography>
        </MainCard>
    );
};

export default CategoryList;
