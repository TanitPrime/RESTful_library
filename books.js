class book{
    constructor(name,author,genre,id){
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.id = id;
    }
    getInfo(){
        return `${this.name} was made by ${this.author} and it's a ${this.genre} book.`;
    }
}
//mock db
let books = [];

let b1 = new book('anime titties and the secret to perpetual boners','Mike Oxlong','Philosophy',1);
books.push(b1);
let b2 = new book('the simple yet surprising genius of Oni Chichi Rebirth','Ben Dover','Art',2);
books.push(b2);
let b3 = new book('Nuts, Butts, and everything you need to know','Anita Cock','SelfHelp',3);
books.push(b3);
let b4 = new book('A guide to spiritual journey using nothing but buttplugs','Haywood Jablowme','Fun',4);
books.push(b4);
let b5 = new book('Jews and the secret of the shekels','Mike Hawk','History',5);
books.push(b5);
let b6 = new book('All recipes that include any and all usage of creams','Craven Morehead','Cooking',6);
books.push(b6);
let b7 = new book('Fortune telling and erections, for her','Jenny Tulls','Philosophy',7);
books.push(b7);

//finding books
function getBook (value) {

    var result  = books.filter((o)=>{return o.id == value;} );
    return result;
}

module.exports = {books,getBook}