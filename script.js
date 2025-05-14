// script.js
const alarms = [];

function setAlarm() {
  const time = document.getElementById("alarmTime").value || document.getElementById("manualTime").value;
  const sound = document.getElementById("soundSelect").value;
  alarms.push({ time, sound });
  displayAlarms();
}

setInterval(() => {
  const now = new Date().toTimeString().slice(0,5);
  alarms.forEach(alarm => {
    if (alarm.time === now) {
      playSound(alarm.sound);
    }
  });
}, 1000);

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.volume = document.getElementById("volumeControl").value;
  audio.play();
}

function displayAlarms() {
  const list = document.getElementById("alarmList");
  list.innerHTML = "";
  alarms.forEach(alarm => {
    const li = document.createElement("li");
    li.textContent = `Alarm set for ${alarm.time}`;
    list.appendChild(li);
  });
}
