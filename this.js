// This = always point to the object
// context(process like function) = manage by engin (browser , node, ....)
// environment = context's data

this.title = "book"

function info() {
    console.log("title: " + this.title)
}


const product = {
    productInfo: info,
    title: title
}

product.productInfo()

