
import { Grid, Card, CardContent, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../src/apollo/queries/user_queries'
import Loader from '../../src/ui-components/Loader'
import { GET_ALL_CATEGORIES } from '../../src/apollo/queries/category_queries'
import { GET_ALL_COMPANY } from '../../src/apollo/queries/company_queries'
import {withApollo} from '../../src/hooks/useIsAuth'


const Dashboard = () => {
  const { data, loading } = useQuery(GET_ALL_USERS)
  const { data: categoryData, loading: categoryLoading } =
    useQuery(GET_ALL_CATEGORIES)

  const { data: companyData, loading: companyLoading } =
    useQuery(GET_ALL_COMPANY)

  if (loading || categoryLoading || companyLoading) {
    return <Loader />
  }
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Card sx={{ bgcolor: 'rgb(30, 136, 229)' }}>
              <CardContent>
                <Typography
                  color={'#fff'}
                  variant={'h4'}
                  fontSize={25}
                  marginBottom={2}
                >
                  {data?.getAllUsers.length}
                </Typography>

                <Typography color={'#ccc'}>Total users</Typography>
              </CardContent>
            </Card>
            {/* <EarningCard isLoading={isLoading} /> */}
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Card sx={{ bgcolor: '#545495' }}>
              <CardContent>
                <Typography
                  color={'#fff'}
                  variant={'h4'}
                  fontSize={25}
                  marginBottom={2}
                >
                  {categoryData?.getAllCategories.length}
                </Typography>

                <Typography color={'#ccc'}>Total category</Typography>
              </CardContent>
            </Card>
            {/*<TotalOrderLineChartCard isLoading={isLoading} />*/}
          </Grid>

          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Card sx={{ bgcolor: '#3e808d' }}>
              <CardContent>
                <Typography
                  color={'#fff'}
                  variant={'h4'}
                  fontSize={25}
                  marginBottom={2}
                >
                  {companyData?.getAllCompanies.length}
                </Typography>

                <Typography color={'#ccc'}>Total company</Typography>
              </CardContent>
            </Card>
            {/*<TotalOrderLineChartCard isLoading={isLoading} />*/}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withApollo({ssr: false}) (Dashboard)
