import React from "react";

const SecondsCounter = (props) => {
    const { numOne, numTwo, numThree, numFour } = props
    return (
        <>
            <h1>Hola ¿qué tal?</h1>

            <h1>numOne = {numOne % 10}</h1>
            <h1>numTwo = {numTwo % 10}</h1>
            <h1>numThree = {numThree % 10}</h1>
            <h1>numFour = {numFour}</h1>
        </>
    )
}

export default SecondsCounter