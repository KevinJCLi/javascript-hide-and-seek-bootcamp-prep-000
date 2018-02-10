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
  let grandParentNode = document.querySelectorAll("#grand-node");
  let grandParent = Array.from(grandParentnode);
  let nodesToCheck = [];
  let lastChild;
  while (grandParent) {
    if (Array.isArray (grandParent)) {
      for (let i = 0; i < grandParent.length; i++) {
        nodesToCheck.push(grandParent[i]);
      }
    grandParent = nodesToCheck.shift();
    }
  return lastChild;
  }
}