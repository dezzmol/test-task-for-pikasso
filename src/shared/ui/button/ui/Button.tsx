import React, {ButtonHTMLAttributes, FC} from 'react';
import classes from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type={"button"}
            className={classes}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;