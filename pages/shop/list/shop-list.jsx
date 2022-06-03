import { useMutation, useQuery } from '@apollo/client'

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
} from '@mui/material'
import { HighlightOffOutlined } from '@mui/icons-material'

import MainCard from '../../../src/ui-components/cards/MainCard'
import Loader from '../../../src/ui-components/Loader'

import { GET_ALL_COMPANY } from '../../../src/apollo/queries/company_queries'
import { DELETE_COMPANY } from '../../../src/apollo/mutations/shop_mutations'

const CompanyList = () => {
  const { data, error, loading } = useQuery(GET_ALL_COMPANY)
  const [deleteCompany] = useMutation(DELETE_COMPANY)

  console.log(data)

  if (error)
    return (
      <Alert variant='outlined' severity='error'>
        {error.message}
      </Alert>
    )
  if (loading) return <Loader />
  return (
    <MainCard
      title='Company List'
      sx={{ margin: 'auto' }}
      style={{ maxWidth: 'max-content' }}
    >
      <Typography variant='body2' component='div'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, bgcolor: '#00000021' }}>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Description</TableCell>
                <TableCell align='center'>Address</TableCell>
                <TableCell align='center'>Tin Number</TableCell>
                <TableCell align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody data-cy='category-list'>
              {data?.getAllCompanies?.map((company, index) =>
                !company ? null : (
                  <TableRow
                    key={company.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    data-cy='shop-list-element'
                  >
                    <TableCell component='th' scope='row'>
                      {index + 1}
                    </TableCell>
                    <TableCell align='left'>{company.name}</TableCell>
                    <TableCell align='left'>{company.description}</TableCell>
                    <TableCell align='left'>{company.tinNumber}</TableCell>
                    <TableCell align='center'>
                      {`${company.address.city}, ${company.address.subCity}, ${company.address.addressName}`}
                    </TableCell>
                    <TableCell align='right'>
                      <HighlightOffOutlined
                        data-cy='shop-delete-element'
                        color='error'
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          deleteCompany({
                            variables: {
                              deleteCompanyId: company.id,
                            },
                            update: (cache) => {
                              cache.evict({ id: 'Company:' + company.id })
                            },
                          }).then(() => {})
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
  )
}

export default CompanyList
