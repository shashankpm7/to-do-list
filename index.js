// Get the necessary elements
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

// Add event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the value from the input field
    const task = input.value;

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${task}</span>
        <button class="delete-button">Delete</button>
    `;

    // Add event listener to the delete button
    const deleteButton = li.querySelector('button');
    deleteButton.addEventListener('click', function() {
        li.remove(); // Remove the list item
    });

    // Append the new list item to the ul
    ul.appendChild(li);

    // Clear the input field
    input.value = '';
});