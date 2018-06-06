import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('simple', () => (
    <div>
      <Button theme='primary' size='s'>
        first
      </Button>
      <Button theme='secondary' size='l'>
        second
      </Button>
    </div>
  ));
