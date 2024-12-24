const addTask = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
//add to do

function inject(x) {
    let newToDo = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${x}</span>
                <i class="fa-solid fa-dumpster delete"></i>
            </li>
    `;

    list.innerHTML += newToDo;
};

addTask.addEventListener('submit', (event) => {
    event.preventDefault();
    let toDo = addTask.add.value;
    //console.log(toDo)
    if (toDo.length >= 1) {
        inject(toDo);
    };
    
});

// delete to do

list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove()
    };
});

function filter(word) {
   let list = Array.from(list.children);
   list.filter(() => {

   });
};

// search

search.addEventListener('keyup', (event) => {
    //console.log(search.value)
    let searchWord = search.value;
    filter(searchWord);
});