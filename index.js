function getFirstSelector (selector) {
  return document.querySelector (selector);
}

function nestedTarget () {
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy (n) {
  var tempList = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < tempList.length; i++) {
    tempList[i] = parseInt (tempList[i].innerHTML) + n; 
  }
  return tempList;
}