import { MemoryRouter } from 'react-router-dom';
import Doglist from './DogList';
import { render, screen, waitFor } from '@testing-library/react';
import { it, expect } from "vitest";
import DogCard from './DogCard';

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

it('loads our dogcard page', function () {
    const { getByText } = render(
        <MemoryRouter>
            <DogCard dogData={dogData.dogs[0]} />
        </MemoryRouter>
    );
    const h1Text = getByText("Age: 5");
    expect(h1Text).toBeInTheDocument();

});