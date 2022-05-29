// material-ui
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

// project imports
import MainCard from 'pages/ui-component/cards/MainCard';
import {useMutation, useQuery} from '@apollo/client';
import {GET_ALL_CATEGORIES} from '../../../../apollo/queries/category_queries';
import {DELETE_CATEGORY} from '../../../../apollo/mutations/category_mutation';
import Loader from '../../../../ui-component/Loader';

// ==============================|| SAMPLE PAGE ||============================== //

const CategoryListPage = () => {
    const {data, error, loading} = useQuery(GET_ALL_CATEGORIES);
    const [deleteCategory] = useMutation(DELETE_CATEGORY);

    if (error)
        return (
            <Alert variant='outlined' severity='error'>
                {error}
            </Alert>
        );
    if (loading) return <Loader/>;
    return (
        <MainCard title='Categories List'>
            <Typography variant='body2'>
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

export default CategoryListPage;
