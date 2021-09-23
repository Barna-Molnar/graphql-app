const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
            {
                id: 5,
                name: "Kelly",
                username: "kelly2019",
                age: 5,
                nationality: "CHILE",
            },
        ],
    },
    {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
    },
    {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
        ],
    },
    {
        id: 4,
        name: "Rafe",
        username: "rafe123",
        age: 60,
        nationality: "GERMANY",
    },
    {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "PedroTech The Movie",
        yearOfPublication: 2035,
        isInTheaters: false,
    },
];

const CarList = [
    {
        id: 1,
        typ: "Van",
        brand: "Vw",
        hp: 200,
        available: true,
    },
    {
        id: 2,
        typ: "Sport",
        brand: "Jaguar",
        hp: 400,
        available: true,
    },
    {
        id: 3,
        typ: "Cabrio",
        brand: "Bmw",
        hp: 250,
        available: false,
    },
    {
        id: 4,
        typ: "Limusine",
        brand: "Mercedes",
        hp: 190,
        available: true,
    }


]

module.exports = { UserList, MovieList, CarList };