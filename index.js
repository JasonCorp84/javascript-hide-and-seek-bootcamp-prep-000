function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var increases = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < increases.length; i++){
    increases[i].innerHTML = parseInt(increases[i].innerHTML) + n;
  }
}

function deepestChild() {
  var allChild = document.getElementById('grand-node').querySelectorAll('div');
  var innerChild = '';
  for (let i = 0; i < allChild.length; i++){
    innerChild = allChild[i];
 }
 return innerChild;
}
