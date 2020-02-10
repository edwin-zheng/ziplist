function zipList(listOne, listTwo) {
  let listOneTracker = 0;
  let listTwoTracker = 0;
  const combinedArray = [];
  while (listOneTracker < listOne.length || listTwoTracker < listTwo.length) {
    if (listOneTracker < listOne.length) {
      combinedArray.push(listOne[listOneTracker]);
    }
    if (listTwoTracker < listTwo.length) {
      combinedArray.push(listTwo[listTwoTracker]);
    }
    listOneTracker++;
    listTwoTracker++;
  }
  return combinedArray;
}

const testListOne = [1, 2, 3];
const testListTwo = ['a', 'b', 'c'];

console.log(zipList(testListOne, testListTwo));

function zipListTheSimpleWay(listOne, listTwo) {
  return _.flatten(_.zip(listOne, listTwo));
}

console.log(zipListTheSimpleWay(testListOne, testListTwo));
