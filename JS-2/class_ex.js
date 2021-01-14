class book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    getSummary() {
        return `${this.title} was written by
        ${this.author} in ${this.year}.`
    }
}
const book1 = new book('book one', 'John doe', '2013')
const book2 = new book('book two', 'Jane doe', '2016')

console.log(book1.getSummary())
console.log(book2.getSummary())