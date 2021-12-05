 
   // collect the text form the input form
   const todo_input = document.getElementById("todo-input");
   // select list to appen child list items
   const todoList = document.querySelector('.list-item');


// select button 
const addBtn = document.querySelector('#add-btn');

//!-------------------event listner------------------ 
// document.addEventListener("DOMcontentLoaded",getTodosBackFromLocal);
addBtn.addEventListener("click", AddList);
todoList.addEventListener('click', deleteCheck);
//! ------------------fucntion-----------------------
   function AddList(event) {
       //! prenvent the default action of form 
       event.preventDefault();


       // create a div 
       const newDiv = document.createElement("div");
       newDiv.classList.add("todo-items");

       // to create an new list item
    const newLi = document.createElement("li");
    newLi.innerText = todo_input.value;
       newLi.classList.add("todo-list-li");
       // append li in div 
       newDiv.appendChild(newLi);
       // create buttons
       
       const checkBtn = document.createElement('button');
       checkBtn.classList.add('checkBtn');
       checkBtn.innerHTML = '<i class="fas fa-check"></i>';
       newDiv.appendChild(checkBtn);

       const trashBtn = document.createElement('button');
       trashBtn.classList.add("trashBtn");
       trashBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
       newDiv.appendChild(trashBtn);
 
       // save to local storage 
       saveToLocalStorage(todo_input.value);

    //    // save to session storage
    //    saveToSessionStorage(todo_input);
       //APPEND NEW DIV TO THE LIST 

       todoList.appendChild(newDiv);

       todo_input.value = " ";
       
}

function deleteCheck(e) {
  // grab the item 
    
    const item = e.target;

    // DELETE 
    if (item.classList[0] === 'trashBtn') {
        
        const todelete = item.parentElement;
        deleteFromLocalStorage(todelete);
        todelete.remove();
    }
    //CHECK
    if (item.classList[0] === 'checkBtn') {
        const temp = item.parentElement;
        temp.classList.toggle("checkedItem");
    }
}

//! FUNCTION TO SAVE OUR DATA TO LOCAL STORAGE ---

function saveToLocalStorage(todoVal) {
    let todoArr;

    // check if local storage is have something in it 
    if (localStorage.getItem("todoArr") === null) {
        todoArr = [];
    }
    else {
        todoArr = JSON.parse(localStorage.getItem('todoArr'))
    }

    todoArr.push(todoVal);
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
}
 
// //! funtion to save our data in session storage 
// function saveToSessionStorage(todoVal) {
//     let todoArr;

//     // check if local storage is have something in it 
//     if (sessionStorage.getItem("todoArr") === null) {
//         todoArr = [];
//     }
//     else {
//         todoArr = JSON.parse(sessionStorage.getItem('todoArr'))
//     }

//     todoArr.push(todoVal);
//     sessionStorage.setItem("todoArr", JSON.stringify(todoArr));
// }
 

//! -------- to delete from local storge 
function deleteFromLocalStorage(item) {
    let todoArr;

    // check if local storage is have something in it 
    if (localStorage.getItem("todoArr") === null) {
        todoArr = [];
    }
    else {
        todoArr = JSON.parse(localStorage.getItem('todoArr'))
    }
   
    const getItem = item.children;
   
     // getItem[0] gives li in that div 
    const getTextToDelete = getItem[0].innerText;
    // console.log(getTextToDelete);

    //search that txt in todo object in local storage and delete it 
    todoArr.splice(todoArr.indexOf(getTextToDelete), 1);
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
}

//! if we reload the browser our todo list becomes empty but data is saved in local storage so we have to reload that data from local storage and put back in list when brower get reloded


window.addEventListener('load', (event) => {
    let todoArr;

    // check if local storage is have something in it 
    if (localStorage.getItem("todoArr") === null) {
        todoArr = [];
    }
    else {
        todoArr = JSON.parse(localStorage.getItem('todoArr'))
    }
    todoArr.forEach(item => {
        // console.log(item);

        // we get our list value from local storage in item 

         // create a div 
       const newDiv = document.createElement("div");
       newDiv.classList.add("todo-items");

       // to create an new list item
        const newLi = document.createElement("li");
        //! add item to new li 
    // newLi.innerText = todo_input.value;
        newLi.innerText = item;
       newLi.classList.add("todo-list-li");
       // append li in div 
       newDiv.appendChild(newLi);
       // create buttons
       
       const checkBtn = document.createElement('button');
       checkBtn.classList.add('checkBtn');
       checkBtn.innerHTML = '<i class="fas fa-check"></i>';
       newDiv.appendChild(checkBtn);

       const trashBtn = document.createElement('button');
       trashBtn.classList.add("trashBtn");
       trashBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
       newDiv.appendChild(trashBtn);
 
      

     
       //APPEND NEW DIV TO THE LIST 

       todoList.appendChild(newDiv);

    });
  });
  
