import { Route, Routes } from "react-router-dom";
import DogList from "./DogList";
// import DogDetails from "./DogDetails";

/** component for all our routes
 *
 *
 * App -> RouteList
 *
 */

export default function RouteList({ dogData }) {

    return (
        <Routes>
            <Route path="/" element={<DogList dogs={dogData} />} />
            {/* <Route path="/dogs/:name" element={<DogDetails />} /> */}
        </Routes>
    );

}