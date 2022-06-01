import {TextField} from '@mui/material';

export const InputField = ({
                               label,
                               name,
                               placeholder,
                               type,
                               value,
                               onChange,
                               dataCy
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
            data-cy={dataCy}
        />
    );
};
