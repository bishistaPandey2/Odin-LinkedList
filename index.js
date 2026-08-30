class LinkedList(){
	constructor(){
		this.head = null
	}
	append(value){
		const newNode = new Node(value)

		if(this.head === null){
			this.head = newNode
			return
		}

		let current = this.head
		while (current.nextNode !== null){
			current = current.next
		}

		current.next = newNode
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
}
class Node(){
	constructor(value){
		this.value = null
		this.nextNode = null
	}
}
