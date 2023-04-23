// closures:  close the variable in the function

function createUser () {
    const user = "Pouria"

    return function () {
        console.log(user)
    }
}

const create = createUser()

create()