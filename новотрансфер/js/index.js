let num = 0;
const btn = document.querySelectorAll('.accordion-item_trigger');
const elem = Array.from(btn);
const why = document.querySelector('.why');
const mission = document.querySelector('.mission');
const contacts = document.querySelector('.contacts');
const footer = document.querySelector('.footer');

elem.forEach(item => {
    item.addEventListener('click', () => {
        num = num + 1;

        const parent = item.parentNode;
        parent.classList.toggle('accordion-item--active');

        if (num % 2 == 0) {
            item.classList.toggle('close');
            why.classList.toggle('margin');
            mission.classList.toggle('after');
            contacts.classList.toggle('click');
            footer.classList.toggle('bottom');
        }
        else {
            item.classList.add('close');
            why.classList.add('margin');
            mission.classList.add('after');
            contacts.classList.add('click');
            footer.classList.add('bottom');
        };
    })
});









