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
  let grandParent = document.querySelectorAll("#grand-node");
  let nodesToCheck = [];
  let lastChild;
  while (grandParent) {
    if (Array.isArray (grandParent)) {
      for (let i = 0; i < grandParent.length; i++) {
        nodesToCheck.push(grandParent[i]);
      }
    lastChild = grandParent.innerHTML;
    grandParent = nodesToCheck.shift();
    }
  return lastChild;
  }
}