/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */

export const getCourseKeys = obj => {
    return Object.keys(obj);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Use the characters data below for the remainder of the challenges.

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

export const getHouseNames = houses => {
    return Object.keys(houses);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named getHouseWords that uses Object.values to return a new array containing the words (mottos) of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

export const getHouseWords = houses => {
    return Object.entries(houses).map(([key, value]) => value.words);
    
    // CODE BELOW THIS LINE PASSES THE TEST
    // BUT DOES NOT USE OBJECT.VALUES()

    // let solution = [];

    // for(let house in houses) {
    //     solution.push(houses[house].words);
    // }

    // return solution;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named getHousesWithSize that uses Object.entries to return a new array containing objects that each have the name of a house and the number of characters in the data set.
------------------------------------------------------------------------------------------------ */

export const getHouseSizes = houses => {
    return Object.entries(houses).map(([key, value]) => 
    {
        return {
            house: key,
            members: value.characters.length,
        };
    }
    );
    
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named getHouseHead that uses a dynamic object 
property (obj[property]) to get the head of the specified house.

This function should take in the house data and a house name and return the name of the house head.

------------------------------------------------------------------------------------------------ */

export const getHouseHead = (houses, houseToFind) => {

    let entries = Object.entries(houses).find(([key]) => houseToFind === key);

    return entries[1].head;
    
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named totalCharacters that takes in the house data and returns a count of all characters in all houses.
------------------------------------------------------------------------------------------------ */

export const totalCharacters = houses => {
    let totalCharacters = 0;

    Object.entries(houses).map(([key, value]) => totalCharacters += value.characters.length);

    return totalCharacters;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named getHouseWordsMapped that does the same things as getHouseWords, but uses .map after Object.values to return the array of all house words
------------------------------------------------------------------------------------------------ */

export const getHouseWordsMapped = houses => {
    return Object.entries(houses).map(([key, value]) => value.words);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalCharactersReduced that that does the same things as totalCharacters, but uses .reduce after Object.values to return the total character count
------------------------------------------------------------------------------------------------ */

export const totalCharactersReduced = houses => {
    // Solution code here...
};
