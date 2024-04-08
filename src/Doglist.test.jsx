import { MemoryRouter } from 'react-router-dom';
import Doglist from './DogList';
import { render, screen, waitFor } from '@testing-library/react';
import { it, expect } from "vitest";
import RouteList from './RouteList';

const dogData = {
    "dogs": [
        {
            "name": "Whiskey",
            "age": 5,
            "src": "whiskey",
            "facts": [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
            ]
        },
        {
            "name": "Duke",
            "age": 3,
            "src": "duke",
            "facts": [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs."
            ]
        },
        {
            "name": "Perry",
            "age": 4,
            "src": "perry",
            "facts": [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain."
            ]
        }
    ]
};

it('loads our doglist page', function () {
    const { getByText } = render(
        <MemoryRouter initialEntries={["/"]}>
            <RouteList dogs={dogData.dogs} />
        </MemoryRouter>
    );
    const h1Text = getByText("Check out our dogs!");
    expect(h1Text).toBeInTheDocument();

});


it('loads our doglist page', function () {
    const { getByText } = render(
        <MemoryRouter>
            <Doglist dogs={dogData.dogs} />
        </MemoryRouter>
    );
    const h1Text = getByText("Check out our dogs!");
    expect(h1Text).toBeInTheDocument();

});

it('loads facts about dogs', function () {
    const { getByText } = render(
        <MemoryRouter>
            <Doglist dogs={dogData.dogs} />
        </MemoryRouter>
    );
    const factOne = getByText("Fun fact #1: Whiskey loves eating popcorn.");
    const factTwo = getByText("Fun fact #2: Duke likes snow.");
    const factThree = getByText("Fun fact #3: Perry hates the rain.");

    expect(factOne, factTwo, factThree).toBeInTheDocument();

});
