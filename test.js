
import {LinkedList} from "./index.js"

const list = new LinkedList()

list.append("Apple")
list.append("Banana")
list.append("Pine")
list.append("Guava")

list.prepend("Grapes")

const head =list.headNode()
let nThNode = list.at(4)

console.log(nThNode)
console.log(list)
console.log(head)
