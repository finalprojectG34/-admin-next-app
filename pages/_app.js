import '../styles/globals.css'
import {ApolloProvider} from "@apollo/client";
import {Provider, useSelector} from 'react-redux';

import {client} from "../apollo/client";
import {store} from "../store";
import themes from "../themes";
import {ThemeProvider} from "@mui/material";
import config from "../config";

function MyApp({Component, pageProps}) {
    // const customization = useSelector((state) => state.customization);

    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <ThemeProvider theme={themes({
                    isOpen: [], // for active default menu
                    fontFamily: config.fontFamily,
                    borderRadius: config.borderRadius,
                    opened: false
                })}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </ApolloProvider>
    )
}

export default MyApp
