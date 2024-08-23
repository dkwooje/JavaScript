function Book(title,price){
    this.title = title;
    this.price = price;

}
Book.prototype.buy = function() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하셨습니다.`);
}

const book1 = new Book("abcde",1000);
book1.buy();

function Textbook(title,price,major){
    Book.call(this,title,price); //super(title,price); 부모의 생성자.
    this.major = major;
}
Textbook.prototype.buyTextbook = function() {
    console.log(`${this.major} 전공 서적인, ${this.title}을 ${this.price}에 구해하셨습니다.`);
}

 Object .setPrototypeOf(Textbook.prototype, Book.prototype);
 const book2 = new Textbook("알고리즘",5000,"컴퓨터공학");
 book2.buyTextbook();
 book2.buy();

