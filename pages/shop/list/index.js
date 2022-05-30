// material-ui
import {HighlightOffOutlined} from '@mui/icons-material';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
// project imports
import MainCard from '../../../src/ui-components/cards/MainCard';

const CompanyListPage = () => {
  // const { data, error, loading } = useQuery(GET_ALL_COMPANY);
  // const [deleteCompany] = useMutation(DELETE_COMPANY);

  // if (error)
  //   return (
  //     <Alert variant='outlined' severity='error'>
  //       {error}
  //     </Alert>
  //   );
  // if (loading) return <Loader />;
  return (
    <MainCard title='Company List'>
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
              {company.map((company, index) =>
                !company ? null : (
                  <TableRow
                    key={company.id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  >
                    <TableCell component='th' scope='row'>
                      {index + 1}
                    </TableCell>
                    <TableCell align='right'>{company.name}</TableCell>
                    <TableCell align='right'>{company.description}</TableCell>
                    <TableCell align='right'>
                      <HighlightOffOutlined
                        data-cy='delete-category'
                        color='error'
                        sx={{cursor: 'pointer'}}
                        // onClick={() => {
                        //   deleteCompany({
                        //     variables: {
                        //       deleteCategoryId: category.id
                        //     },
                        //     update: cache => {
                        //       cache.evict({ id: 'Category:' + category.id });
                        //     }
                        //   });
                        // }}
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

export default CompanyListPage;
