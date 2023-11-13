const input = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
let resultbox = document.querySelector(".result");
let selectbox = document.querySelector(".select");

function getdata(url) {
  return fetch(url).then((res) => res.json());
}

form.addEventListener("submit", search);

function search(e) {
  e.preventDefault();
  // console.log(input.value);
  //   input.value = " ";
  getdata(
    `https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`
  ).then((data) => {
    console.log(data);

    resultbox.innerHTML += `
    <div class="result info">
    <p>City: <span>${data.location.name}</span></p>
    <p>Country: <span>${data.location.country}</span></p>
    <p>Wheater Forecast: <span>${data.current[selectbox.value]}<span></p>
    <p>Sky Condition: <span>${data.current.condition.text}</span></p>
</div>
    `;
  });
}
