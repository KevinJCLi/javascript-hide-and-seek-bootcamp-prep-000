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
  let deepestChild;
  for (let i = 0; i < grandParent.length-1; i++) {
    deepestChild = grandParent[i].querySelector("div");
  }
  return deepestChild;
}