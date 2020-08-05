import React, {
    useEffect,
    InputHTMLAttributes,
} from 'react';
import { useSnackbar } from 'notistack';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errors?: object | any
    icon?: React.ComponentType<IconBaseProps>
    inputRef?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
}

const Input: React.FC<InputProps> = ({
    icon: Icon,
    inputRef,
    errors,
    ...rest
}) => {
    const name: string | any = rest.name;
    const error = errors && errors[name];
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (error && error.message) enqueueSnackbar(error.message, { variant: "error" });
    }, [error, enqueueSnackbar]);

    return (
        <Container className={error ? 'error' : ''}>
            {Icon && <Icon size={20} />}
            <input {...rest} ref={inputRef} />
        </Container>
    );
}

export default Input;