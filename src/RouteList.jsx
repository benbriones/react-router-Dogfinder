import { Route, Routes } from "react-router-dom";
import DogList from "./DogList"
import DogDetails from "./DogDetails"

/** component for all our routes
 *
 *
 * App -> RouteList
 *
 */

export default function RouteList() {

    return(
        <Routes>
            <Route path="/" element={<DogList />} />
            <Route path="/dogs/:name" element={<DogDetails />} />
        </Routes>
    )

}