let list = document.getElementById('myList')

let data = ['Robert', 'Bob', 'Earl', 'Smith']

data.forEach((item)=>{
    let li = document.createElement('list-group-item');
    li.innerText = item;
    list.appendChild(li);
})