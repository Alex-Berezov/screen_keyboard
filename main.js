"use strict";

    let keyboard = document.querySelector('#keyboard'),
        text = document.querySelector('#inpText'),
        shift = document.querySelector('#shift'),
        backspace = document.querySelector('#backspace'),
        letters = document.querySelectorAll('.letter'),
        space = document.querySelector('#space')

    keyboard.addEventListener('click', function(e) {
        let btn = e.target.value,
            btnId = e.target.id,
            btnClass = e.target.className;
        
        if (btnClass == 'letter ru upper' || btnClass == 'letter eng upper is_active' || btnClass == 'letter eng is_active upper') {
            text.innerHTML += btn.toUpperCase();
        }
        if (btnId == 'backspace') {
            text.innerHTML = String(text.innerHTML).slice(0, -1);
        }
        if (btnClass == 'letter ru' || btnClass == 'letter eng is_active') {
            text.innerHTML += btn;
        }
    });

    /*====> Shift <==== */
    shift.addEventListener('click', function() {
        for (let letter of letters) {
            letter.classList.toggle('upper');
        }
        shift.classList.toggle('blue');
    });
    /*====> End Shift <==== */

    /*====> Space <==== */
    space.addEventListener('click', function() {
        text.innerHTML += ' '
    });
    /*====> End Space <==== */

    /*====> Symbols <==== */
    let symbols = document.querySelector('#symbols'),
        sym = document.querySelector('#sym');

    sym.addEventListener('click', function() {
        symbols.classList.toggle('is_active');
    });
    /*====> End Symbols <==== */

    /*====> Lang <==== */
    let lang = document.querySelector('.lang');

    lang.addEventListener('click', function() {
        let lettersEn = document.querySelectorAll('.eng'),
            lettersRu = document.querySelectorAll('.ru');

        if (lang.innerHTML == 'Ru') {
            lang.innerHTML = 'En';
        } else {
            lang.innerHTML = 'Ru';
        }

        for (let elemEn of lettersEn) {
            elemEn.classList.toggle('is_active');
        }
        
        for (let elemRu of lettersRu) {
            elemRu.classList.toggle('is_hidden');
        }
    });
    /*====> End Lang <==== */