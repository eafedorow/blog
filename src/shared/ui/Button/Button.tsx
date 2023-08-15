import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    rectangle?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        rectangle,
        size,
        disabled = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.rectangle]: rectangle,
        [cls.disabled]: disabled
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
