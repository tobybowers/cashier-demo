define(function(){
    function Drink() {
        this._cost = 0;
    }

    Drink.prototype.cost = function() {
        return this._cost;
    };

    function DrinkDecorator(drink) {
        Drink.call(this);
        this.drink = drink;
    }

    DrinkDecorator.prototype = Object.create(Drink.prototype);
    DrinkDecorator.prototype.cost = function(){
        return this._cost + this.drink.cost();
    };

// Coffee sizes
    function SmallCoffee(drink) {
        DrinkDecorator.call(this, drink);
        this._cost = -35;
    }

    SmallCoffee.prototype = Object.create(DrinkDecorator.prototype);

    function MediumCoffee(drink) {}//default size
    MediumCoffee.prototype = Object.create(DrinkDecorator.prototype);

    function LargeCoffee(drink) {
        DrinkDecorator.call(this, drink);
        this._cost = + 35;
    }
    LargeCoffee.prototype = Object.create(DrinkDecorator.prototype);

// General hot drink additions

    function Chocolate(drink) {
        DrinkDecorator.call(this, drink);
        this._cost = +15;
    }

    function Cinnamon(drink) {
        DrinkDecorator.call(this, drink);
        this._cost = +5;
    }

    function Creamer(drink) {
        DrinkDecorator.call(this, drink);
        this._cost = +15;
    }

    function Foam(drink) {
        DrinkDecorator.call(this, drink);
        this._cost = +10;
    }

    function Milk(drink) {
        DrinkDecorator.call(this, drink);
        this._cost = +5;
    }

    function Sugar(drink) {
        DrinkDecorator.call(this, drink);
        this._cost = +5;
    }
    Chocolate.prototype = Object.create(DrinkDecorator.prototype);
    Cinnamon.prototype = Object.create(DrinkDecorator.prototype);
    Creamer.prototype = Object.create(DrinkDecorator.prototype);
    Foam.prototype = Object.create(DrinkDecorator.prototype);
    Milk.prototype = Object.create(DrinkDecorator.prototype);
    Sugar.prototype = Object.create(DrinkDecorator.prototype);

// standard coffee
    function Coffee() {
        Drink.call(this);
        this._cost = 100;
    }
    Coffee.prototype = Object.create(Drink.prototype);

// Expresso
    function Expresso() {
        Drink.call(this);
        this._cost = 110;
    }
    Expresso.prototype = Object.create(Drink.prototype);

// Mocha
    function Mocha() {
        Drink.call(this);
        this._cost = 130;
    }
    Mocha.prototype = Object.create(Drink.prototype);

// Cappuccino
    function Cappuccino() {
        Drink.call(this);
        this._cost = 120;
    }
    Cappuccino.prototype = Object.create(Drink.prototype);

    /* Teas */
    function EarlGrey() {
        Drink.call(this);
        this._cost = 135;
    }

    function LocalTea() {
        Drink.call(this);
        this._cost = 110;
    }

    function Assam(){
        Drink.call(this);
        this._cost = 125;
    }

    function Darjeeling() {
        Drink.call(this);
        this._cost = 120;
    }
// Drinks Controller
    var drinkControl = {
        Coffee: function() {
            var item = new Coffee();
            return item;
        },
        Expresso: function() {
            var item = new Expresso();
            return item;
        },
        Mocha: function() {
            var item = new Mocha();
            return item;
        },
        Cappuccino: function() {
            var item = new Cappuccino();
            return item;
        },
        EarlGrey: function() {
            var item = new EarlGrey();
            return item;
        },
        LocalTea: function() {
            var item = new LocalTea();
            return item;
        },
        Assam: function() {
            var item = new Assam();
            return item;
        },
        Darjeeling: function() {
            var item = new Coffee();
            return item;
        }
    }

    return {
        create: function(type){
            var newtype = type ? type : undefined;

            if(!newtype || !drinkControl[newtype]){
                throw new {
                    message: type + " is not supported"
                };
            }

            return drinkControl[type]();
        }
    }
});


// Soft Drinks



/* to create coffee with milk and sugar
var coffee =  new Coffee();
coffee = new Small(coffee);
coffee = new Sugar(coffee);*/
