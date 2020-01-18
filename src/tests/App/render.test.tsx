import React from 'react';
import { render } from '@testing-library/react';
import App from '../../client/App/App';
import List from '../../client/pages/List';
import Edit from '../../client/pages/Edit';
import { Route, MemoryRouter, Redirect, Router, useLocation, useRouteMatch } from 'react-router-dom';
import { match } from 'react-router';
import { createMemoryHistory, createLocation } from 'history';

interface TextTest {
    caption: string;
    text: RegExp;
}

describe('Page: List', () => {
    const page = <List />
    const tests: TextTest[] = [
        { caption: 'rendering main title', text: /Список задач/i },
        { caption: 'rendering add button', text: /Добавить/i },
        { caption: 'rendering footer', text: /© 2019 АО "Мегаполис"/i },
    ]
    tests.forEach(({ caption, text }) => {
        testContainText(caption, text, page);
    });
})

function testContainText(caption: string, text: RegExp, component: JSX.Element) {
    test(caption, () => {
        const { getByText } = render(component);
        const element = getByText(text);
        expect(element).toBeInTheDocument();
    })
}