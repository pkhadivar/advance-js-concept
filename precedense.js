// precedence:  JS engin have a list of priority if we have variable(with value) and function with the same name js will not consider 
// function but if variable dosn't have any value js will consider function wiyh that name


var title = "book"

function title() {
    console.log("title: book")
}


console.log(title)