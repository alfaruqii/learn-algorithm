const Stack = function() {
  this.count = 0
  this.storage = {}
  this.size = 0
  //add some storage
  this.push = function(e) {
    this.count++
    this.size++
    this.storage[this.count] = e
  }
  this.pop = function() {
    this.count--
    this.size--
    const result = this.storage[this.count]
    this.count === 0 ? undefined : delete this.storage[this.count]
    return result
  }
  this.peek = function() {
    return this.storage[this.count]
  }
}

const books = new Stack()
books.push({
  name: "atomic habbits",
  rate: 5
})
books.push({
  name: "can't hurt me",
  rate: 5
})
books.push({
  name: "law of power",
  rate: 9.7
})
books.push({
  name: "law of human nature",
  rate: 9.5
})
console.log(books.peek())
books.pop()
console.log(books.peek())
console.log(books.storage)
