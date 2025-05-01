function timeOutText(text, timeout) {
    setTimeout(function () {
        console.log(text);
    }, timeout);
}

timeOutText('Гарного дня!))', 2000);
timeOutText('Гарного дня 2.0!))', 5000);