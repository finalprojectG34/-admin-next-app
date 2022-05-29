import React from 'react';
import {useHistory} from 'react-router-dom';

import {Box, Button} from '@mui/material';

const AccessDenied = () => {
    const history = useHistory();

    return (
        <div>
            Access denied{' '}
            <Box>
                <Button
                    variant='contained'
                    onClick={() => {
                        history.push('/logout');
                    }}
                >
                    Logout
                </Button>
            </Box>
        </div>
    );
};

export default AccessDenied;
