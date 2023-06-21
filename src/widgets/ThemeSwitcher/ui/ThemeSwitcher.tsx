import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import MoonIcon from 'shared/assets/icons/moon.svg';
import SunIcon from 'shared/assets/icons/sun.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            { theme === Theme.DEFAULT ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}
