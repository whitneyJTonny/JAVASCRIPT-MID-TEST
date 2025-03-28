
// Select elements from the DOM
const taskInput = document.getElementById('list-input');
const addTaskBtn = document.getElementById('add-list-btn');
const taskList = document.getElementById('list-list');

// Add list function
function addlist() {
    const taskText = taskInput.value.trim(); 

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>  <!-- Fixed: taskText instead of listText -->
            <button class="delete-btn">Delete</button>
        `;

        // Append the new task to the list
        taskList.appendChild(li);  

        // Clear the input field
        taskInput.value = '';  

        // Add the event listener for the delete button
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        // Add event listener for completing the task
        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    }
}

// Event listener for the 'Add Task' button
addTaskBtn.addEventListener('click', addlist); 

// // Allow pressing Enter to add a task or the add button 
// taskInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         addlist();  
//     }
// });
