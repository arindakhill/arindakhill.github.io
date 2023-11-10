function LinkedList() {
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  LinkedList.prototype.add = function(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  };
  
  LinkedList.prototype.remove = function(value) {
    var current = this.head;
    var prev = null;
  
    while (current) {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.head = current.next;
        }
        break;
      }
      prev = current;
      current = current.next;
    }
  };
  
  LinkedList.prototype.print = function() {
    var current = this.head;
    var result = 'LinkedList{';
    while (current) {
      result += current.value;
      if (current.next) {
        result += ',';
      }
      current = current.next;
    }
    result += '}';
    console.log(result);
  };
  
  let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); // Should output: LinkedList{1,2,3}
linkedlist.remove(2);
linkedlist.print(); // Should output: LinkedList{1,3}
