import { useMutation, useQuery } from '@apollo/client'

import { useState } from 'react'

import {
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableFooter,
  TablePagination,
} from '@mui/material'
import { HighlightOffOutlined } from '@mui/icons-material'

import Loader from '../../../src/ui-components/Loader'
import MainCard from '../../../src/ui-components/cards/MainCard'

import { GET_ALL_CATEGORIES } from '../../../src/apollo/queries/category_queries'
import { DELETE_CATEGORY } from '../../../src/apollo/mutations/category_mutation'
import {useTheme} from "@mui/material/styles";

const CategoryList = () => {
  const theme = useTheme()
  const { data, error, loading, refetch } = useQuery(GET_ALL_CATEGORIES, {fetchPolicy: 'no-cache'})
  const [deleteCategory] = useMutation(DELETE_CATEGORY, {fetchPolicy: 'no-cache'})
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  if (error)
    return (
      <Alert variant='outlined' severity='error'>
        {error.message}
      </Alert>
    )
  if (loading) return <Loader />
  return (
    <MainCard
      title='Categories List'
      sx={{ margin: 'auto' }}
      style={{ maxWidth: 'max-content' }}
    >
      <Typography variant='body2' component='div'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, bgcolor: theme.palette.primary.light }}>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell align='right'>Name</TableCell>
                <TableCell align='right'>Description</TableCell>
                <TableCell align='right'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody data-cy='category-list'>
              {(rowsPerPage > 0
                ? data?.getAllCategories.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data?.getAllCategories
              ).map((category, index) =>
                !category ? null : (
                  <TableRow
                    key={category.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          deleteCategory({
                            variables: {
                              deleteCategoryId: category.id,
                            },
                          }).then(() => refetch())
                        }}
                      />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={data?.getAllCategories.length || 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Typography>
    </MainCard>
  )
}

export default CategoryList
