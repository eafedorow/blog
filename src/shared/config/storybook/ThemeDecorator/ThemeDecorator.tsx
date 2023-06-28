import { Story } from '@storybook/react';
import { Theme } from 'shared/config/theme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
