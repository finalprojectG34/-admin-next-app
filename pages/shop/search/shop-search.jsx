import {useMutation, useQuery} from "@apollo/client";

import {Alert} from '@mui/material';

import MainCard from '../../../src/ui-components/cards/MainCard';
import Loader from "../../../src/ui-components/Loader";

import {GET_ALL_COMPANY} from "../../../src/apollo/queries/company_queries";
import {DELETE_COMPANY} from "../../../src/apollo/mutations/shop_mutations";

const CompanySearch = () => {
  const {data, error, loading} = useQuery(GET_ALL_COMPANY);
  const [deleteCompany] = useMutation(DELETE_COMPANY);

  if (error)
    return (
      <Alert variant='outlined' severity='error'>
        {error.message}
      </Alert>
    );
  if (loading) return <Loader/>;
  return (
    <MainCard title='Company Search' sx={{margin: 'auto'}} style={{maxWidth: 'max-content'}}>
      here
    </MainCard>
  );
};

export default CompanySearch;
