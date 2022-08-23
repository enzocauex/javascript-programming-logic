
let items = []

for(let item = 0; item < 10; item ++) {
   let itemName = prompt("DIgite o item " + (item + 1))

   items[item] = itemName
}

console.log(items)