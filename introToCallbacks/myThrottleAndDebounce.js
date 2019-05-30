Function.prototype.myThrottle = function (interval) {
    let tooSoon = false;
    return () => {
        if (tooSoon === false) { 
            tooSoon = true;
            setTimeout(() => { tooSoon = false}, interval);
            // invoke 'this' with original arguments ?  
            //  use keyword: arguments?
            this(arguments);
        }
    }
}

// class Neuron {
//     fire() {
//         console.log("Firing!");
//     }
// };

// const neuron = new Neuron;

// neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);

// Function#myDebounce accepts an interval as an argument and returns a "debounced" function
// when the debounced function is invoked, it sets a timeout that will invoke the original function after interval milliseconds have elapsed
// if the debounced function is invoked early, it resets the timeout

Function.prototype.myDebounce = function(interval){
    let timer;
    return () => {
        const callback = () => {
            // interval has passed, we can now invoke the debounced function
            // timer = null;
            this(...arguments);
        }
        clearTimeout(timer);
        timer = setTimeout(callback, interval);
    }
}
// setTimeout(() => { this(...arguments) }, interval);
// [1,2,3].forEach.myDebounce(1000) => function();

class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}

const searchBar = new SearchBar;

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
}

// Assign searchBar.search to the returned debounced version
searchBar.search = searchBar.search.myDebounce(500);

queryForHelloWorld();
// console.log(searchBar.search);

