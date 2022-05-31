import React from 'react';
import {Box, Button} from '@mui/material';
import {useRouter} from "next/router";

const AccessDenied = () => {
    const router = useRouter();

    return (
        <div>
            Access denied{' '}
            <Box>
                <Button
                    variant='contained'
                    onClick={() => {
                        router.push('/logout');
                    }}
                >
                    Logout
                </Button>
            </Box>
        </div>
    );
};

export default AccessDenied;
