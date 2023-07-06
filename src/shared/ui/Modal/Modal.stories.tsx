import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi '
        + 'cum debitis doloribus expedita facilis harum labore natus neque perferendis provident quis sequi '
        + 'similique sint sunt suscipit temporibus, vero vitae!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi '
        + 'cum debitis doloribus expedita facilis harum labore natus neque perferendis provident quis sequi '
        + 'similique sint sunt suscipit temporibus, vero vitae!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
