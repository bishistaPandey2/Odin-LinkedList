
import {LinkedList} from "./index.js"

const list = new LinkedList()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("eagle")

const head =list.headNode()
let nThNode = list.at(4)

console.log(nThNode)
console.log(list)
console.log(head)
