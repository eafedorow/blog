import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with first only param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass hovered scrollable class1 class2';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with false mod', () => {
        const expected = 'someClass hovered class1 class2';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with undefined mod', () => {
        const expected = 'someClass scrollable class1 class2';
        expect(classNames(
            'someClass',
            { hovered: undefined, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
