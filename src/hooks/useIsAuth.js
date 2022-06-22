import {ApolloClient, InMemoryCache} from '@apollo/client';
import {withApollo as createWithApollo} from 'next-apollo';


const createClient = () =>
    new ApolloClient({
        uri: 'http://192.168.0.172:8000/graphql',
        headers: {
            authorization: typeof window !== "undefined" ? (localStorage.getItem('store') ? `Bearer ${JSON.parse(localStorage.getItem('store')).token}` : '') : '',
        },
        cache: new InMemoryCache({

        }),
    });

export const withApollo = createWithApollo(createClient);
