import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink
                    className={cls.link}
                    to={'/'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Главная
                </AppLink>
                <AppLink
                    className={cls.link}
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
