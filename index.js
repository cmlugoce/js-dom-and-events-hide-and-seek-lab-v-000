function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget () {
    return document.querySelector('#nested .target')
}

function deepestChild () {
    let node = document.getElementById('grand-node')
    let nextNode = node.children[0]
  
    while (nextNode) {
      node = nextNode
      nextNode = node.children[0]
    }
  
    return node
  }

  function increaseRankBy (n) {
    const rankedlist = document.querySelectorAll('ul.ranked-list');
  for (let i of rankedlist) {
    i.innerHTML = parseInt(i.innerHTML) + parseInt(n);
  }
}