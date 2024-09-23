document.querySelector('form').addEventListener('submit', function(event) {
    console.log("vi kører");
    event.preventDefault();

    const formData = new FormData(event.target);
    const author = formData.get('author');
    const title = formData.get('title');
    const year = formData.get('year');

    console.log(author);
    console.log(title);
    console.log(year);

    if (!author || !title || !year) {
        alert("Please fill all fields!");
        return;
    }


    const row = document.createElement('tr');


    [author, title, year].forEach(text => {
        const cell = document.createElement('td');
        cell.textContent = text;
        row.appendChild(cell);
    });

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&#128465;';
    deleteButton.onclick = () => row.remove();
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);


    document.getElementById('cdList').appendChild(row);

    event.target.reset();
});