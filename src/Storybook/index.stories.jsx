import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormInput from '../components';
import {occupations, countries} from './mock';

storiesOf('Form', module)
    .addDecorator(story => <div
        style={{
            width: '100%',
            height: '100%',
            minHeight: 500,
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor: '#333'
        }}
    >
        {story()}
    </div>)
    .add('Test Form', () => (
        <FormInput
            occupations={occupations}
            countries={countries}
            postData={action('Post Data')}
        />
    ))
