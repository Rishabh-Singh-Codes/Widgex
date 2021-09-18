var alarmSound = new Audio();
		alarmSound.src = 'https://assets.mixkit.co/sfx/preview/mixkit-battleship-alarm-1001.mp3';

		var alarmOptions = document.getElementById('alarmOptions');
		var timer;

		function setAlarm(button) {
			var timestamp = document.getElementById('time').valueAsNumber;
			if (isNaN(timestamp)) {
				alert('Invalid date!');
				return;
			}

			var alarm = new Date(timestamp);
			alarm = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());

			var timeDifference = alarm.getTime() - (new Date()).getTime();
			if (timeDifference < 0) {
				alert('Specified time is already passed !');
				return;
			}
			timer = setTimeout(startAlarm, timeDifference);
			button.textContent = 'Cancel Alarm';
			button.setAttribute('onclick', 'cancelAlarm(this)');
		};

		function startAlarm() {
			alarmSound.play();
			alarmOptions.style.display = '';
            
		};

		function cancelAlarm(button) {
			clearTimeout(timer);
			button.textContent = 'Set Alarm';
			button.setAttribute('onclick', 'setAlarm(this)');
		};

		function stopAlarm() {
			alarmSound.pause();
			alarmSound.currentTime = 0;
			alarmOptions.style.display = 'none';
			cancelAlarm(document.getElementById('alarmBtn'));
		};

		function snooze() {
			stopAlarm();
			timer = setTimeout(startAlarm, 300000);
		};
