document.getElementById('btn-add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field')
    const nameValue = nameField.value;
    // console.log(nameValue);

    localStorage.setItem('name', nameValue);
})

document.getElementById('btn-add-age').addEventListener('click', function () {
    const ageField = document.getElementById('age-field')
    const agevalue = ageField.value;
    // console.log(agevalue);

    localStorage.setItem('age', agevalue);
})

document.getElementById('btn-remove-name').addEventListener('click', function () {
    localStorage.removeItem('name')
})

document.getElementById('btn-remove-age').addEventListener('click', function () {
    localStorage.removeItem('age')
})

document.getElementById('clear-ls').addEventListener('click', function () {
    localStorage.clear()
})