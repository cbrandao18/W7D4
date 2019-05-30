class Clock {
    constructor() {
        // 1. Create a Date object.
        const currTime = new Date();

        // 2. Store the hours, minutes, and seconds.
        this.hours = currTime.getHours();
        this.minutes = currTime.getMinutes();
        this.seconds = currTime.getSeconds();

        // 3. Call printTime.
        this.printTime();

        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        this.seconds += 1;
        if (this.seconds === 60){
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60){
                this.hours = ((this.hours + 1) % 24);
                this.minutes = 0;
            }
        }
        this.printTime();
    }
}

const clock = new Clock();