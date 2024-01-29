const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const status = document.querySelector('#status');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give valid weight';
  } else {
    const res = (weight / ((height * height) / 10000)).toFixed(2);

    if (res < 18.6) {
      results.innerHTML = `<span>${res}</span>`;
      status.innerHTML = 'Under Weight';
    } else if (res > 18.6 && res < 24.6) {
      results.innerHTML = `<span>${res}</span>`;
      status.innerHTML = 'Normal Range';
    } else if (res > 24.6) {
      results.innerHTML = `<span>${res}</span>`;
      status.innerHTML = 'Over Weight';
    } 
  }
});
