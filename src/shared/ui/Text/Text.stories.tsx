import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Text, TextTheme} from './Text';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "shared/config/theme/ThemeContext";

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const titleAndText = Template.bind({});
titleAndText.args = {
    title: 'Example title',
    text: 'Example text for description'
};

export const errorTitleAndText = Template.bind({});
errorTitleAndText.args = {
    title: 'Example title',
    text: 'Example text for description',
    theme: TextTheme.ERROR
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Only title'
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Example text for description'
};

export const titleAndTextDark = Template.bind({});
titleAndTextDark.args = {
    title: 'Example title',
    text: 'Example text for description'
};
titleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Only title'
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Example text for description'
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
