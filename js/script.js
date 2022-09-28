window.addEventListener('DOMContentLoaded', () => {

    // const formInput = document.querySelector('.form__input');
    // const name = document.querySelector('.form__name');
    // console.dir(name);
    // const val = name.value;

    // function validName() { 
    //     const warning = document.createElement('div');
    //     warning.innerHTML = ('<p>Не меньше двух симоволов</p>');

    //     formInput.append(warning);
    // }


    // if (val.length < 1) {
    //     validName()
    // }


    // $('#form-validate').submit(function(event) {
    //     event.preventDefault();
    //     const formInput = $('.form__input');

    //         $('.name-warning').removeClass('hide').addClass('show')

    //     console.log(formInput)
    // });      

    const inputArea = document.querySelector('.input-area'),
        areaSpan = document.querySelector('.area-span'),
        btnPlus = document.querySelector('.btn-plus'),
        btnMinus = document.querySelector('.btn-minus');

    let valueInput = 100;


    btnPlus.addEventListener('click', (e) => {
        e.preventDefault();
        valueInput = valueInput + 1;
        areaSpan.textContent = valueInput;

    })

    btnMinus.addEventListener('click', (e) => {
        e.preventDefault();
        valueInput = valueInput - 1;
        areaSpan.textContent = valueInput;

    })












})