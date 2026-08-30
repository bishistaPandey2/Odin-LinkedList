class LinkedList{
	constructor(){
		this.head = null
	}
	headChecker(value){
		if(value === null) return undefined
	}
	append(value){
		const newNode = new Node(value)

		if(this.head === null){
			this.head = newNode
			return
		}

		let current = this.head
		while (current.nextNode !== null){
			current = current.nextNode
		}

		current.nextNode = newNode
		return this
	}

	prepend(value){
		const newNode = new Node(value)

		if(this.head === null){
			this.head = newNode
			return
		}

		newNode.nextNode = this.head;	
		this.head = newNode

		return this
	}

	size(){
		let counter = 1
		let currentNode = this.head
		if(currentNode === null){
			return undefined
		}

		while(currentNode.nextNode !== null){
			counter++
			currentNode = currentNode.nextNode
		}

		return counter
	}

	headNode(){
		if(this.head === null) return undefined
		return this.head.value
	}

	tail(){
		let current = this.head
		while(current.nextNode !== null){
			current = current.nextNode
		}

		return current
	}

	at(index){
		if(this.head === null) return undefined
		let current = this.head
		let i = 0;
		let counter = 0;
		while(current.nextNode !== null && i<index){
			current = current.nextNode
			counter++;
			i++
		}
		if(counter < index){
			return undefined
		}

		return current.value
	}

	pop(){
		if(this.head === null) return undefined
		let current = this.head 
		current = current.nextNode
		this.head = current
	}
}
class Node{
	constructor(value){
		this.value = value 
		this.nextNode = null
	}
}

const list = new LinkedList()
list.append("Apple")
list.append("Banana")
list.append("Pine")
list.append("Guava")
list.prepend("Grapes")
const head =list.headNode()
let n1ode = list.at(5)
console.log(n1ode)
console.log(list)
console.log(head)
