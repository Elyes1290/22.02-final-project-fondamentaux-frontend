/*
$("#simpleList1, #simpleList2, #simpleList3, #simpleList4").sortable({
    connectWith: ".connectedSortable"
  });
*/
/*
  new Sortable(simpleList1, {
    group: 'shared',
    animation: 150,
    // ghostClass: 'sortable-ghost'
  });

  new Sortable(simpleList2, {
    group: 'shared',
    animation: 150,
    // ghostClass: 'sortable-ghost'
  });
*/

let favoriteList = document.getElementById('favoriteList');
let otherList = document.getElementById('otherList');
let threeList = document.getElementById('threeList');


let favorite_list = new Sortable(favoriteList, {
   animation: 150,
   group: 'shared',
   ghostClass: 'sortable-ghost',
});

let other_list = new Sortable(otherList, {
   animation: 150,
   group: 'shared',
   ghostClass: 'sortable-ghost'
});

let three_list = new Sortable(threeList, {
    animation: 150,
    group: 'shared',
    ghostClass: 'sortable-ghost'
 });