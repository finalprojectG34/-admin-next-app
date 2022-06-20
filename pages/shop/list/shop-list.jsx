import {useLazyQuery, useMutation} from '@apollo/client'
import {useEffect, useState} from 'react'
import { useTheme } from '@mui/material/styles'

import {CachedOutlined, HighlightOffOutlined} from '@mui/icons-material'
import {
    Alert,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Tabs,
    Tab,
    Box
} from '@mui/material'

import MainCard from '../../../src/ui-components/cards/MainCard'
import Loader from '../../../src/ui-components/Loader'

import {DELETE_COMPANY} from '../../../src/apollo/mutations/shop_mutations'
import {
    FILTER_COMPANY,
    GET_ONE_COMPANY,
} from '../../../src/apollo/queries/company_queries'
import CompanyUpdate from '../../../src/ui-components/update-cards/CompanyUpdate'
import {useRouter} from 'next/router'

const CompanyList = () => {
    const theme = useTheme()
    const [currentUserId, setCurrentUserId] = useState('')
    const[getSingleCompany, {data: getOneCompany}] = useLazyQuery(GET_ONE_COMPANY, {
        fetchPolicy: 'no-cache'
    })

    useEffect(() => {
        currentUserId !== '' && getSingleCompany({variables: {getOneCompanyId: currentUserId}})
    }, [currentUserId])

    const [getFilterCompany, {
        data: searchData,
        error,
        loading,
        refetch
    }] = useLazyQuery(FILTER_COMPANY, {fetchPolicy: "no-cache"})



    const [deleteCompany] = useMutation(DELETE_COMPANY, {fetchPolicy: 'no-cache'})

    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [value, setValue] = useState(0)
    const STATUS = ['Pending', 'Verified', 'Rejected', 'Blocked']
    useEffect(() => {
        getFilterCompany({
            variables: {
                input: {
                    status: "Pending"
                }
            }
        }).then(() => console.log('filter added'))
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue)

        getFilterCompany({
            variables: {
                input: {
                    status: STATUS[newValue]
                }
            }
        }).then(() => {})

    }


    const router = useRouter()

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const setCompanyUpdate = (id) => {
        setOpen(true)
        setCurrentUserId(id)
    }



    if (error)
        return (
            <Alert variant='outlined' severity='error'>
                {error.message}
            </Alert>
        )
    if (loading) return <Loader/>
    return (
        <MainCard
            title='Shop List'
            sx={{margin: 'auto'}}
            style={{maxWidth: 'max-content'}}
        >
            {open && getOneCompany?.getOneCompany && (
                <CompanyUpdate
                    handleClose={setOpen}
                    open={open}
                    data={getOneCompany?.getOneCompany}
                    refetch={refetch}
                />
            )}
            <Box mb={2}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                >

                    {STATUS.map((status, index) => (
                        <Tab key={index} label={status}/>
                    ))}
                </Tabs>
            </Box>
            {
                <Typography variant='body2' component='div'>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, bgcolor: theme.palette.primary.light}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Number</TableCell>
                                    <TableCell align='center'>Name</TableCell>
                                    <TableCell align='center'>Description</TableCell>
                                    <TableCell align='center'>Address</TableCell>
                                    <TableCell align='center'>Tin Number</TableCell>
                                    <TableCell align='center'>Status</TableCell>
                                    <TableCell align='center'>Role</TableCell>

                                    <TableCell align='center'>Delete</TableCell>
                                    <TableCell align='right'>Edit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody data-cy='category-list'>

                                {searchData && (rowsPerPage > 0
                                        ? searchData?.getAllCompanies?.slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        : searchData?.getAllCompanies
                                ).map((company, index) =>
                                    !company ? null : (
                                        <TableRow
                                            key={company.id}
                                            sx={{
                                                '&:last-child td, &:last-child th': {border: 0},
                                            }}
                                        >
                                            <TableCell component='th' scope='row'>
                                                {index + 1}
                                            </TableCell>
                                            <TableCell
                                                align='left'
                                                sx={{
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() =>
                                                    router.push(`${router.pathname}/${company.id}`)
                                                }
                                            >
                                                {company.name}
                                            </TableCell>
                                            <TableCell align='left'>{company.description}</TableCell>
                                            <TableCell align='center'>
                                                {`${company.address.city}, ${company.address.subCity}, ${company.address.addressName}`}
                                            </TableCell>
                                            <TableCell align='left'>{company.tinNumber}</TableCell>
                                            <TableCell align='left'>{company.status}</TableCell>
                                            <TableCell align='left'>{company.role}</TableCell>

                                            <TableCell align='right'>
                                                <HighlightOffOutlined
                                                    data-cy='shop-delete-element'
                                                    color='error'
                                                    sx={{cursor: 'pointer'}}
                                                    onClick={() => {
                                                        deleteCompany({
                                                            variables: {
                                                                deleteCompanyId: company.id,
                                                            }
                                                        }).then(() => {
                                                            refetch()
                                                        })
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell align='right'>
                                                <CachedOutlined
                                                    onClick={() => setCompanyUpdate(company.id)}
                                                    color='success'
                                                    sx={{cursor: 'pointer'}}
                                                    fontSize='small'
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                                        colSpan={3}
                                        count={searchData?.getAllCompanies?.length || 0}
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
            }

        </MainCard>
    )
}

export default CompanyList
