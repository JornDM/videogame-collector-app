import React from "react";
    const GamesSearch = () => {

        const searchFieldChangeHandler = (value: string) => {
            console.log(value);
        }

        return (
            <React.Fragment>
                <p>Use the search bar below to find your game!</p>
                <input type="text" onChange={(event) => searchFieldChangeHandler(event.target.value)}></input>
            </React.Fragment>
        )
    }

export default GamesSearch;