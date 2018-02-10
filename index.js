function getFirstSelector (selector) {
  return document.querySelector (selector);
}

function nestedTarget () {
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy (n) {
  let tempList = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < tempList.length; i++) {
    tempList[i].innerHTML = parseInt (tempList[i].innerHTML) + n; 
  }
  return tempList;
}

function deepestChild () {
  let tempList = document.querySelectorAll("#grand-node");
  
}