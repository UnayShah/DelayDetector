document.addEventListener("DOMContentLoaded", function () {
    console.log('loaded');
    var startButton = document.createElement('button');
    var stopButton = document.createElement('button');
    var timerDiv = document.createElement('div');
    var buttonsDiv = document.createElement('div');
    var timerValueDiv = document.createElement('div');

    timerDiv.className = "div";
    timerDiv.id = "timerDiv";
    document.body.appendChild(timerDiv);

    var timerLabel = document.createElement("label");
    timerLabel.className = "timerLabel";
    timerLabel.id = "timerLabel";
    timerDiv.appendChild(timerLabel);
    timerLabel.innerHTML = 0;

    buttonsDiv.id = "buttonsDiv";
    buttonsDiv.className = "timerDiv";
    timerDiv.appendChild(buttonsDiv);


    startButton.id = "startButton";
    startButton.className = "timerButton";
    startButton.innerHTML = "Start";
    startButton.style.visibility = 'visible';
    buttonsDiv.appendChild(startButton);

    stopButton.id = "stopButton";
    stopButton.className = "timerButton";
    stopButton.innerHTML = "Stop";
    stopButton.style.visibility = 'hidden';
    // buttonsDiv.appendChild(stopButton);

    var timerValueDiv = document.createElement('div');
    timerDiv.appendChild(timerValueDiv);

    var time = new Date().getTime();
    startButton.addEventListener('click', function () {
        time = new Date().getTime();
        buttonsDiv.removeChild(startButton); buttonsDiv.appendChild(stopButton);
        startButton.style.visibility = 'hidden';
        stopButton.style.visibility = 'visible';
        var timer = setInterval(function () {
            timerLabel.innerHTML = (new Date().getTime()) - time;
        });
        stopButton.addEventListener('click', function () {
            clearInterval(timer);
            buttonsDiv.removeChild(stopButton); buttonsDiv.appendChild(startButton);
            stopButton.style.visibility = 'hidden';
            startButton.style.visibility = 'visible';
            const timerValue = document.createElement('div');
            timerValue.id = "timerValueLabel";
            timerValue.innerHTML = new Date().getTime() - time;
            timerValueDiv.appendChild(timerValue);
        });
    });

});