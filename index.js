function getFirstSelector(selector) {
  var sel = document.querySelector(selector);
  return sel;
}

function nestedTarget() {
  var sel = document.getElementById('nested').querySelector('div.target');
  return sel;
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
  }
  
}

function deepestChild() {
  var sel = document.getElementById('grand-node').children[0];
  return sel;
  
}