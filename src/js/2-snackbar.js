import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = form.querySelector('[name="delay"]');
    const stateInput = form.querySelector('[name="state"]:checked');

    const delay = parseInt(delayInput.value, 10);
    const state = stateInput.value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(value => {
        iziToast.success({
          message: `✅ Fulfilled promise in ${value}ms`,
          position: 'topCenter',
          timeout: 5000,
          backgroundColor: 'green',
        });
      })
      .catch(value => {
        iziToast.error({
          message: `❌ Rejected promise in ${value} ms`,
          position: 'topCenter',
          timeout: 5000,
          backgroundColor: 'red',
        });
      });
  });
});
