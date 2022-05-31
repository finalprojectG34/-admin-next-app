import {ApolloProvider} from "@apollo/client";
import {ThemeProvider} from "@mui/material";

import {client} from "../src/apollo/client";
// import {store} from "../src/store";
import themes from "../styles/themes";
import config from "../config";

import '../styles/globals.css';

function MyApp({Component, pageProps}) {
    return (
        <ApolloProvider client={client}>
            {/*<Provider store={store}>*/}
            <ThemeProvider theme={themes({
                isOpen: [], // for active default menu
                fontFamily: config.fontFamily,
                borderRadius: config.borderRadius,
                opened: false
            })}>
                <Component {...pageProps} />
            </ThemeProvider>
            {/*</Provider>*/}
        </ApolloProvider>
    )
}

export default MyApp
