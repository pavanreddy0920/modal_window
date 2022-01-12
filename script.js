'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closePopup = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', closePopup);

overlay.addEventListener('click', closePopup);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closePopup();
  }
});
