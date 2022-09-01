class TaskManager {

  
    constructor(currentId = 0) {
      this.task = [];
      this.currentId = currentId;
    }
    
    addTask(name, description, assignedTo, dueDate) {
      const task = {
        id: this.currentId++,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: 'TODO'
      };
    
       this.tasks.push(task);
    }
  };


  const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    return `<div class="card-body">
              <h5 class="card-title">Task 1</h5>
              <p>${name}</p>
              <p>${description}</p>
              <p>Assigned To: ${assignedTo}</p>
              <p><button type="button" class="btn btn-warning">${status}<span class="badge"></span></button></p>
        <p> Due by: ${dueDate}</p> `
  };
