import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Example Text',
};

export const PrimaryL = Template.bind({});
PrimaryL.args = {
    children: 'Example Text',
    size: ButtonSize.L,
};

export const PrimaryXL = Template.bind({});
PrimaryXL.args = {
    children: 'Example Text',
    size: ButtonSize.XL,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Example Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Example Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Example Text',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Example Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'Example Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'Example Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Example Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Example Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Example Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
};

export const RectangleM = Template.bind({});
RectangleM.args = {
    children: 'X',
    theme: ButtonTheme.BACKGROUND,
    rectangle: true,
};

export const RectangleL = Template.bind({});
RectangleL.args = {
    children: 'X',
    theme: ButtonTheme.BACKGROUND,
    rectangle: true,
    size: ButtonSize.L,
};

export const RectangleXL = Template.bind({});
RectangleXL.args = {
    children: 'X',
    theme: ButtonTheme.BACKGROUND,
    rectangle: true,
    size: ButtonSize.XL,
};
