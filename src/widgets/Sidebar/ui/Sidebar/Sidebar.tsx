import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onToggle = () => {
        setIsCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: isCollapsed}, [className])}>
            <Button
                onClick={onToggle}
            >
                Toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}