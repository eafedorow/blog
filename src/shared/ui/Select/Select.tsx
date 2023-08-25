import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
// @ts-ignore
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    placeholder?: string;
    options?: SelectOption[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        placeholder,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {

    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {placeholder && (
                <span className={cls.placeholder}>
                    {placeholder}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
