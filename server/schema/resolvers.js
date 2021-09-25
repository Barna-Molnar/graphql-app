const { UserList, MovieList, CarList } = require('../FakeData')
const _ = require("lodash")

const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (parent, args) => {

            const id = args.id
            const user = _.find(UserList, { id: Number(id) })

            return user
        },
        userByName: (parent, args) => {
            const name = args.name.toLowerCase()
            const user = _.find(UserList, (user) => user.name.toLocaleLowerCase() === name)

            return user
        }



        ,
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name
            const movie = _.find(MovieList, { name: name })
            return movie
        }
    },// Query closer

    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication > 2000 && movie.isInTheaters)
        },
        favoriteCars: () => {
            return _.filter(CarList, (car) => car.hp >= 200 && car.available === true)
        }
    }, // User Closer~~

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = UserList[UserList.length - 1].id
            user.id = lastId + 1
            UserList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input
            let updatedUser
            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername
                    updatedUser = user
                }
            })
            return updatedUser
        },
        deleteUser: (parent, args) => {
            const id = args.id
            _.remove(UserList, (user) => user.id === Number(id))
            return null
        }
    }




};

module.exports = { resolvers }