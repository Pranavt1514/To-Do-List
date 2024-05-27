let list= document.querySelector(".list");
const butt= document.querySelector('.add');


butt.addEventListener('click', ()=>{
    console.log("Clicked");
    let tasktext= document.getElementsByClassName("input");
    let tasktextinner= tasktext[0].value;
    let task= createListItem(tasktextinner);
    task.className= 'task';
    list.append(task);
}
)

function createListItem(text) {
    let listItem = document.createElement('li');
    listItem.innerText = text;
    let deleteButton = document.createElement('button');
    deleteButton.className= 'add';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });
    
    listItem.appendChild(deleteButton);
    
    return listItem;
}