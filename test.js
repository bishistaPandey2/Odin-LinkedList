
import {LinkedList} from "./index.js"

const list = new LinkedList()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("eagle")
list.append("babboon")

const head =list.headNode()
const tail = list.tail()
let nThNode = list.at(4)

console.log(`The size of the linked list is ${list.size()}`)
console.log(`This is ${nThNode}th node = ${nThNode}`)
console.log("This is linked list = " + list)
console.log("This is head = " + head)
console.log("This is tail = " + tail)
