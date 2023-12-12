import React from 'react';
import { render, screen } from '@testing-library/react';
import useCounter from '../hooks/useCounter';

it('值+1', () => {
    const [counter, { add }] = useCounter(7);
    expect(counter).toEqual(7);
    add();
    expect(counter).toEqual(8);
});
