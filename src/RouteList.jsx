import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


/** component for all our routes
 *
 *Props: dogData => {name, age, src, facts}
 *
 * State: none
 *
 * App -> RouteList
 *
 */

export default function RouteList({ dogData }) {

    return (
        <Routes>
            <Route path="/" element={<DogList dogs={dogData} />} />
            <Route path="/dogs/:name" element={<DogDetails dogs={dogData} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );

}