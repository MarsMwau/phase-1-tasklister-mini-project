// Wait for the DOM to load before running the code
document.addEventListener("DOMContentLoaded", () => {

  // Get references to the form and task list
  const form = document.querySelector("form");
  const tasksList = document.querySelector("#tasks");

  // Listen for the form's submit event
  form.addEventListener("submit", (event) => {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Get the user's input from the task description input field
    const taskInput = document.querySelector("#new-task-description");
    const taskDescription = taskInput.value;

    // Create a new task item and add it to the task list
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    // Create a delete button for the task and add it to the task item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

    newTask.appendChild(deleteButton);
    tasksList.appendChild(newTask);

    // Reset the form's input field
    form.reset();
  });
});
