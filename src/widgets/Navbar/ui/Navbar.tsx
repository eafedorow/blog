import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <ThemeSwitcher />
        <div className={cls.links}>
            <AppLink
                className={cls.link}
                to="/"
                theme={AppLinkTheme.SECONDARY}
            >
                Главная
            </AppLink>
            <AppLink
                className={cls.link}
                to="/about"
                theme={AppLinkTheme.SECONDARY}
            >
                О сайте
            </AppLink>
        </div>
    </div>
);

export default Navbar;
