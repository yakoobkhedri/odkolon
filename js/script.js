// special select tag

let select = document.getElementById('select');
let ulSelect = document.getElementById('ulSelect');
let selectTitle = document.getElementById('title');
let arrow = document.getElementById('arrow');
let liSelect = document.querySelectorAll('#ulSelect li');

select.addEventListener('click', function () {
    ulSelect.classList.toggle('active');
    arrow.classList.toggle('active');
})

liSelect.forEach((item) => {
    item.addEventListener('click', function () {
        ulSelect.classList.toggle('active');
        selectTitle.innerHTML = item.innerHTML;
        arrow.classList.toggle('active');
    })
})

//select product image

let bigImg = document.getElementById('productBigImage');
let bottlePrice = Array.from(document.getElementsByClassName('bottlePrice'));
let images = Array.from(document.querySelectorAll('.products img'));


images.forEach((image) => {
    image.addEventListener('click', function () {
        bigImg.src = image.src;
        images.forEach((images) => {
            images.classList.remove('active');
            image.classList.add('active');
            bottlePrice.forEach((bottleP) => {
                bottleP.innerHTML = image.dataset.value;
            })
        })
    })
})

// range input

let range = document.getElementById('range');
let rangeValue = range.value;
let UseNumber = document.getElementById('UseNumber');
let rangeImg=document.getElementById('imgRange');

range.oninput = function () {
    UseNumber.innerHTML = range.value;
    rangeImg.style.width=(range.value*10)+'px';
}

// add activeClass to special radio

let specialRadio = Array.from(document.getElementsByClassName('specialRadio'));
let specialRadio2 = Array.from(document.getElementsByClassName('specialRadio2'));
let ghelzatPrice = document.getElementById('ghelzatPrice');
let ghelzatImg = document.getElementById('ghelzatImg');
let packagePrice = document.getElementById('packagePrice');
let rand=function (min,max) {
    return Math.floor(Math.random()*(max-min))+min
}

specialRadio.forEach((radio) => {
    radio.addEventListener('click', function () {
        specialRadio.forEach((radios) => {
            radios.classList.remove('active');
            radios.parentElement.classList.remove('active');
            radio.classList.add('active');
            radio.parentElement.classList.add('active');
            ghelzatPrice.innerHTML = radio.dataset.value;
            ghelzatImg.style.filter=`hue-rotate(${rand(20,270)}deg)`;
        })
    })
})
specialRadio2.forEach((radio2) => {
    radio2.addEventListener('click', function () {
        specialRadio2.forEach((radios2) => {
            radios2.classList.remove('active');
            radios2.parentElement.classList.remove('active');
            radio2.classList.add('active');
            radio2.parentElement.classList.add('active');
            packagePrice.innerHTML = radio2.dataset.value;
        })
    })
})

// Modal

let modal = document.getElementById('popup');
let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', function () {
    modal.style.display = 'block';
})
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
})

