document.addEventListener('DOMContentLoaded', () => {

    let minutes = 1440;
    let total = minutes / 1440;

    // Unix timestamp (in seconds) to count down to
    let countdownTime = (new Date().getTime() / 1000) + (86400 * total);

    // Set up FlipDown
    let flipdown = new FlipDown(countdownTime)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });
});