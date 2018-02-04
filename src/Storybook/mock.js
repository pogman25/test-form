import React from 'react';
const rus = require('./images/russia.svg');
const usa = require('./images/united-states.svg');
const itl = require('./images/italy.svg');
const germ = require('./images/germany.svg');
const fra = require('./images/france.svg');

export const occupations = [
    { value: 1, label: 'Дизайнер' },
    { value: 2, label: 'Инженер' },
    { value: 3, label: 'Frontend-developer' },
    { value: 4, label: 'Backend-developer' },
    { value: 5, label: 'Менеджер' },
    { value: 6, label: 'Повар' },
    { value: 7, label: 'Строитель' },
]
export const countries = [
    {
        value: 1,
        label: <img src={rus} style={{maxWidth: 30}}/>,
        prefix: '+7'
    },
    {
        value: 2,
        label: <img src={usa} style={{maxWidth: 30}}/>,
        prefix: '+1'
    },
    {
        value: 3,
        label: <img src={itl} style={{maxWidth: 30}}/>,
        prefix: '+2'
    },
    {
        value: 4,
        label: <img src={germ} style={{maxWidth: 30}}/>,
        prefix: '+3'
    },
    {
        value: 5,
        label: <img src={fra} style={{maxWidth: 30}}/>
    },
]