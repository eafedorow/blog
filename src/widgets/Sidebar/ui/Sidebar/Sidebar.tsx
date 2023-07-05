import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/calendar-info.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
        >
            <div className={cls.linksList}>
                <AppLink
                    className={cls.link}
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={cls.linkIcon} />
                    {t('Главная')}
                </AppLink>
                <AppLink
                    className={cls.link}
                    to="/about"
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.linkIcon} />
                    {t('О сайте')}
                </AppLink>
            </div>

            <Button
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                rectangle
                size={ButtonSize.XL}
            >
                {isCollapsed ? '>' : '<'}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={isCollapsed}
                />
            </div>
        </div>
    );
};
