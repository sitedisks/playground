const update = document.querySelector('#updateBtn');
const deleteButton = document.querySelector('#deleteBtn');
const messageDiv = document.querySelector('#message');

update.addEventListener('click', _ => {
    // Send PUT Request here
    console.log('update clicked');

    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vadar',
            quote: 'I find your lack of faith disturbing.'
        })
    }).then(res => {
        if (res.ok)
            return res.json();
    })
        .then(response => {
            console.log(response);
            window.location.reload(true);
        });

});

deleteButton.addEventListener('click', _ => {

    console.log('Delete button clicked');

    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vadar'
        })
    }).then(res => {
        if (res.ok) return res.json()
    })
        .then(response => {

            if (response === 'No quote to delete') {
                messageDiv.textContent = 'No Darth Vadar quote to delete'
            } else {
                window.location.reload(true)
            }
        });
});