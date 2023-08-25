import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from 'entities/Country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
    { value: Country.BELARUS, content: Country.BELARUS },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            placeholder={t('Страна')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
