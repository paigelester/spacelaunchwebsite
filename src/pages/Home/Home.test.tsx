import React, { Suspense } from 'react';
import { CacheProvider } from 'rest-hooks';
import { render, waitFor } from '@testing-library/react';
import { makeServer } from 'mirage/server';
import Home from './index';

let server: any;
beforeEach(() => {
    server = makeServer("test");
    Date.now = jest.fn(() => 1618171860892);
});
afterEach(() => { server.shutdown() });

it("renders as expected", async () => {
    // given
    server.createList("launch", 2, "upcoming");
    server.create("launch");

    // when
    const { container, getByTestId } = render(
        <CacheProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        </CacheProvider>
    );

    await waitFor(() => getByTestId('launches'));

    // then
    expect(container).toMatchSnapshot();
});

it("suspends then resolves", async () => {
    // given
    const loadingText: string = "Loading...";
    server.createList("launch", 2, "upcoming");
    server.create("launch");

    // when
    const { queryByText, getByTestId } = render(
        <CacheProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        </CacheProvider>
    );

    // then
    expect(queryByText(loadingText)).toBeDefined();
    expect(await waitFor(() => getByTestId('launches')));
});
