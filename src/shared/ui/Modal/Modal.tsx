import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    isLazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        isLazy,
        onClose,
    } = props;

    const [isMounted, setIsMounted] = useState(false);

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    if (isLazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
