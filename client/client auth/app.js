const cont = document.querySelector(`.continue`);
const create = document.querySelector(`.create`);



cont.addEventListener(`click`, async () => {
    try {
        const email = document.querySelector(`.email`).value.trim();
        const password = document.querySelector(`.password`).value.trim();

        let object = {
            email: email,
            password: password
        }
        const response = await fetch(`http://localhost:3000/api/users/auth`, {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const jsonresponse = await response.json();
        window.location.href = 'file:///C:/Users/HP/Desktop/task-manager/client/profile/index.html';
    } catch (err) {
        alert(err.message)
    }
});

create.addEventListener(`click`, () => {
    window.location.href = 'file:///C:/Users/HP/Desktop/task-manager/client/client%20registr/index.html';
});