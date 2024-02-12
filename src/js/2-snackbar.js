import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
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
        iziToast.show({
          message: `✅ Fulfilled promise in ${value}ms`,
          position: 'topCenter',
          timeout: 5000,
          backgroundColor: 'green',
          theme: 'light',
        });
      })
      .catch(value => {
        iziToast.show({
          message: `❌ Rejected promise in ${value} ms`,
          position: 'topCenter',
          timeout: 5000,
          backgroundColor: 'red',
          theme: 'light',
        });
      });
  });

  flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  });
});
