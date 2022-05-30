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
import MainCard from '../../../src/ui-components/cards/MainCard';
import {useMutation, useQuery} from '@apollo/client';
import {GET_ALL_USERS} from "../../../src/apollo/queries/user_queries";
import {DELETE_USER} from "../../../src/apollo/mutations/user_mutation";
import Loader from "../../../src/ui-components/Loader";

// ==============================|| SAMPLE PAGE ||============================== //

const UserList = () => {
  const {data, error, loading} = useQuery(GET_ALL_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  if (error)
    return (
      <Alert variant='outlined' severity='error'>
        {error.message}
      </Alert>
    );
  if (loading) return <Loader/>;
  return (
    <MainCard title='User List'>
      <Typography variant='body2' component="div">
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650, bgcolor: '#00000021'}}>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell align='right'>First Name</TableCell>
                <TableCell align='right'>Last Name</TableCell>
                <TableCell align='right'>Email</TableCell>
                <TableCell align='right'>Phone Number</TableCell>
                <TableCell align='right'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.getAllUsers?.map((user, index) =>
                !user ? null : (
                  <TableRow
                    key={user.id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  >
                    <TableCell component='th' scope='row'>
                      {index + 1}
                    </TableCell>
                    <TableCell align='right'>{user.firstName}</TableCell>
                    <TableCell align='right'>{user.lastName}</TableCell>
                    <TableCell align='right'>{user.email}</TableCell>
                    <TableCell align='right'>{user.phone}</TableCell>
                    <TableCell align='right'>
                      <HighlightOffOutlined
                        color='error'
                        sx={{cursor: 'pointer'}}
                        onClick={() => {
                          deleteUser({
                            variables: {
                              deleteUserId: user.id
                            },
                            update: cache => {
                              cache.evict({id: 'User:' + user.id});
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

export default UserList;
