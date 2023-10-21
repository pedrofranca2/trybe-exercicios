import ModuleDetails from "./ModuleDetails";
import { calculateAge } from "../utils/age"

function HelloWorld() {
    const age = calculateAge("21/09/1990");
    return (
        <>
            <ModuleDetails />
            <p>{ age }</p>
        </>
    )
}

export default HelloWorld;