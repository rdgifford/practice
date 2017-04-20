var Node = (value) => {
  this.value = value;
  this.next = null;
}

var LinkedList = () => {
  this.head = null;
  this.tail = null;

  this.addNode = (value) => {
    var newNode = new Node(value);
    // if linkedList is empty
    if(this.head === null && this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    // if linkedList is not empty
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}
