import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
    placeholder?: string;
}

export const Select = (props: SelectProps) => {
    const {
        className,
        placeholder,
    } = props;

    const mods: Mods = {

    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {placeholder && (
                <span className={cls.placeholder}>
                    {placeholder}
                </span>
            )}
            <select className={cls.select}>
                <option
                    className={cls.option}
                    value="1"
                >
                    1
                </option>
                <option
                    className={cls.option}
                    value="2"
                >
                    2
                </option>
            </select>
        </div>
    );
};
