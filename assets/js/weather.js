var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var mood = document.querySelector('.mood');

fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=Sidoarjo,id&appid=3d2bf4920f84fd2059751bbe45a62b3a'
)
  .then((response) => response.json())
  .then((data) => {
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    if (tempValue <= 296) {
      var moodValue = '&#129398;';
    } else if (tempValue <= 297) {
      var moodValue = '&#128517;';
    } else if (tempValue <= 299) {
      var moodValue = '&#128522;';
    } else if (tempValue <= 300) {
      var moodValue = '&#128516;';
    } else if (tempValue <= 301) {
      var moodValue = '&#128514;';
    } else if (tempValue <= 302) {
      var moodValue = '&#128512;';
    } else if (tempValue <= 303) {
      var moodValue = '&#128513;';
    } else if (tempValue <= 304) {
      var moodValue = '&#128513;';
    } else if (tempValue <= 305) {
      var moodValue = '&#128521;';
    } else if (tempValue <= 306) {
      var moodValue = '&#128524;';
    } else if (tempValue <= 307) {
      var moodValue = '&#128528;';
    } else if (tempValue <= 308) {
      var moodValue = '&#128543;';
    } else if (tempValue <= 309) {
      var moodValue = '&#128544;';
    } else if (tempValue <= 310) {
      var moodValue = '&#128545;';
    } else {
      var moodValue = '&#128520;';
    }

    desc.innerHTML = descValue;
    temp.innerHTML = Math.trunc(tempValue - 273) + '\u00B0C';
    mood.innerHTML = moodValue;
  });
