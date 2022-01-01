/**
 * Create new task
 */
function createTask() 
{
   const task = document.querySelector('#task');
   const priority = document.querySelector('#priority');
   if (task.value === "") 
   {
       task.classList.add('error');
       return;
   }
   task.classList.remove('error');
   // create li tags
   const li = document.createElement('li');
   // add color priority
   li.style.borderLeft = "3px solid " + priority.value;

   // create span task name tags
   const spanTaskName = document.createElement('span');
   spanTaskName.textContent = task.value;

   // create span delete task name tags
   const spanDelete = document.createElement('span');
   spanDelete.classList.add('fa');
   spanDelete.classList.add('fa-trash');
  
   // add span to li
   li.appendChild(spanTaskName);
   li.appendChild(spanDelete);

   // add li to taskBody
   taskBody.appendChild(li);

   task.value = "";
}

/**
 *  Delete Task name
 * @event value after click
 */
function deleteTask(event)
{
    if(event.target.className === "fa fa-trash")
    {
        let isDelete = window.confirm('Are you sure you want to delete');
        if(isDelete) 
        {
            event.target.parentElement.remove();
        }
    }
}

/**
 * Search Task
 */
function searchTask()
{
    let text = search.value.toLowerCase();
    let tasks = document.querySelectorAll('li');
    for (let task of tasks)
    {
        let taskTitle = task.firstElementChild.textContent.toLowerCase();
        if (taskTitle.indexOf(text) === -1)
        {
            task.style.display = "none";
        }else {
            task.style.display = "flex";
        }
    }
}
// Main
const btnAdd = document.querySelector('button');
const taskBody = document.querySelector('ul');
const search = document.querySelector('#search');

// Call function
btnAdd.addEventListener('click', createTask);
taskBody.addEventListener('click', deleteTask);
search.addEventListener('keyup', searchTask);

// Press enter key to create a new task
document.addEventListener('keydown', event => {
    if(event.key === "Enter")
    {
        createTask();
    }
});