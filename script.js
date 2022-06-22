const fills = document.querySelectorAll('.fill')
const empties = document.querySelectorAll('.empty')
let dragItem = null



/*fills.forEach(fill => {
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragend', dragEnd)
})

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
*/

/*function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}




function dragOver(e) {
    e.preventDefault()
   
  }
function dragEnter() {
    console.log('drag entered')
    this.className += ' hovered'
}

function dragLeave() {
    console.log('drag left')
    this.className = 'empty'
}

function dragDrop() {
    console.log('drag dropped')
    this.className = 'empty'
    this.append(fill)
}*/


fills.forEach(fill => {
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragend', dragEnd)
})

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    dragItem = this
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
    dragItem = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(dragItem)
}