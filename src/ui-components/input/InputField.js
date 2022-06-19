import {TextField} from '@mui/material';

export const InputField = ({
                               label,
                               name,
                               placeholder,
                               type,
                               value,
                               onChange,
                               dataCy,
    error,
    helper
                           }) => {
    return (
        <TextField
            id={name}
            type={type ? type : 'text'}
            value={value}
            label={label}
            variant='outlined'
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            fullWidth
            margin='normal'
            error={error}
            helperText={helper}
            required={true}
            data-cy={dataCy}
        />
    );
};
