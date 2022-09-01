
const task_Manager = new TaskManager(0);
  
const taskForm = document.querySelector('#addTask');


taskForm.addEventListener('submit', (event) => {
  
event.preventDefault();
  
const newTaskName = document.querySelector('#newTaskName');
const newTaskDescription = document.querySelector('#newTaskDescription');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDueDate = document.querySelector('#newTaskDueDate');


  const name = newTaskName.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  

  task_Manager.addTask(name, description, assignedTo, dueDate);

  
  newTaskName.value = '';
  newTaskDescription.value = '';
  newTaskAssignedTo.value = '';
  newTaskDueDate.value = '';
})

const taskHtml = createTaskHtml('clean room', 'organize clothes', 'kim', 'september 9, 2022', 'in progress');
console.log(taskHtml);
