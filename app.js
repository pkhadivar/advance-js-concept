class Product {
  constructor() {
    this.title = "book";
  }

  infor() {
    console.log("Title1: " + this.title);
  }

  delayMethod() {
    setTimeout(
      function () {
        console.log(this);
        console.log("Title 2:" + this.title);
      }.bind(this),
      3000
    );
  }
}

const book = new Product();

book.info;
