import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

document.addEventListener('DOMContentLoaded', function () {
  let userSelectedDate;

  flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];

      if (userSelectedDate < new Date()) {
        iziToast.show('Please choose a date in the future');
        disableStartButton();
      } else {
        enableStartButton();
      }
    },
  });

  function disableStartButton() {
    const startButton = document.querySelector('[data-start]');
    if (startButton) {
      startButton.disabled = true;
    }
  }

  function enableStartButton() {
    const startButton = document.querySelector('[data-start]');
    if (startButton) {
      startButton.disabled = false;
    }
  }

  document.querySelector('[data-start]').addEventListener('click', function () {
    startCountdown();
  });

  function startCountdown() {
    const startDate = new Date();
    const endDate = userSelectedDate;

    const updateInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = endDate - currentTime;

      if (timeDifference <= 0) {
        clearInterval(updateInterval);
        updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        disableStartButton();
      } else {
        const timeRemaining = convertMs(timeDifference);
        updateTimerDisplay(timeRemaining);
      }
    }, 1000);
  }

  function updateTimerDisplay({ days, hours, minutes, seconds }) {
    const timerDisplay = document.getElementById('timer');
    if (timerDisplay) {
      timerDisplay.textContent = `${addLeadingZero(days)}:${addLeadingZero(
        hours
      )}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
    }
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  iziToast.show({
    title: 'Alert',
    message: 'Please choose a date in the future',
    position: 'topRight',
    timeout: 5000,
    theme: 'red',
  });
});
