var title = "book"

function info() {
    function printTitle() {
        console.log(title)
    }


    var price = 99
    console.log(price)

    printTitle()
}


info()

printTitle()     // We will face to an error because this function is not in the scope