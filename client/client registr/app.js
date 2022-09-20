const signInBtn = document.querySelector(`.signInBtn`);
const create = document.querySelector(`.create`);

signInBtn.addEventListener(`click`, () => {
    window.location.href = 'file:///C:/Users/HP/Desktop/task-manager/client/client%20auth/index.html';
});


const checkName = (fullName) => {
    if (fullName.length === 0) throw new Error(`Вы не ввели имя`);
    return true
}
1
// const checkEmail = (email) => {
//     if (email.length === 0) throw new Error(`Вы не ввели электронную почту`);
//     if (!/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,6}$/g.test(email)) throw new Error(`Некорректно введен адрес электронной почты`)
//     return true
// }

const checkPassword = (password, dbpassword) => {
    if (password.length <= 7 && dbpassword.length <= 7) throw new Error(`Пароль содержит недостаточное количество символов`);
    if (password !== dbpassword) throw new Error(`Введенные пароли не совпадают`);
    return true
}

create.addEventListener(`click`, async () => {
            try {
                const fullName = document.querySelector(`.fullName`);
                const email = document.querySelector(`.email`);
                const password = document.querySelector(`.password`);
                const dbpassword = document.querySelector(`.dbpassword`);
                // if (checkName(fullName) &&
                //     checkEmail(email) &&
                //     checkPassword(password, dbpassword)) {
                    let object = {
                        fullName: fullName,
                        email: email,
                        password: password
                    }
                    const response = await fetch(`http://localhost:3000/users/сreate`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(object)
                    });
                    const jsonresponse = await response.json()
                    alert(`Вы успешно зарегестрированы в системе!`);
                    return jsonresponse
                // }
                } catch (err) {
                    alert(err.message)
                }
            });