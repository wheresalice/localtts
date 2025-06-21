const txtlog = document.getElementById('log');
const txtinput = document.getElementById('text');
const btnsubmit = document.getElementById('submit');

function play() {
  var text = encodeURI(txtinput.value)
  const audio = new Audio(`http://localhost:5000/?text=${text}`);
  audio.play();
  logentry(txtinput.value);
  txtinput.value = '';
}

function logentry(input) {
  const timestamp = new Date().toLocaleTimeString();
  txtlog.value += '\n' + timestamp + ' : ' + input;
}

btnsubmit.addEventListener('click', () => {
  play();
});

txtinput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    play();
  }
})

txtlog.value += '\n' + '---';
txtinput.focus();
