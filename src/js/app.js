requirejs.config({
    "baseUrl": "js",
    "paths": {
        "jquery": 'jquery.1.10.2.min',
        "libs": 'libs',
        "drinks": "drinks",
        "breads": "food/bread"
    }
});


require(["dom_module","tile_module", "libs/main","jquery"], function(dom, addTile, main, $){
    //var el = dom.create("div");

    //var location = document.getElementById("content");
    /*location.appendChild(el);
    location.appendChild(dom.create("div", "test"));*/


    var drinks = {
        /*Coffee: "Coffee",
        Mocha: "Mocha",
        Expresso: "Expresso",
        Cappuccino: "Cappuccino"*/
        Coffee: {text: "Coffee", sizes: ["small", "medium", "large" ], additions: ["chocolate", "cinnamon", "creamer", "foam","milk", "sugar"]},
        Mocha: {text: "Mocha", sizes: ["small", "medium", "large" ], additions: ["chocolate", "cinnamon", "creamer", "foam","milk", "sugar"]},
        Expresso: {text: "Expresso", sizes: ["small", "medium", "large" ], additions: ["chocolate", "cinnamon", "creamer", "foam","milk", "sugar"]},
        Cappuccino: {text: "Cappuccino", sizes: ["small", "medium", "large" ], additions: ["chocolate", "cinnamon", "creamer", "foam","milk", "sugar"]}
    };

    var breads = {
        MarlinPan: {text:"Marlin Pannini"},
        ChickenBag: {text:"Chicken Baggette"},
        ClubSand: {text:"Club Snadwich"}
    };
    var cakes = {
        IceCream: {text:"Ice Cream"},
        ChocCake: {text:"Chocolate Cake"},
        CheeseCake: {text:"Cheesecake"},
        Eclair: {text:"Eclair"}
    };
    var meals = {
        BeefBurger: {text:"Beef Burger"},
        ChickenBurger: {text:"Chicken Burger"},
        FishChips: {text:"Fish & Chips"},
        CesarSal: {text:"Cesar Salad"}
    };

    function tiles(items, group){
        var el = dom.create("article"); //create article
        var hr = dom.create("hr"); //create hr
        hr.className = "clear";

        var location = document.getElementById("products"); // get content location

        location.appendChild(el); // add article container to page
        location.appendChild(hr); // add seperator to page

        $.each(items, function(key, value){
            var item = { id: key, type: group, desc: value.text, location: el };
            addTile.create(item);
        });
    }


    tiles(drinks, "drink");
    tiles(breads, "bread");
    tiles(meals, "meal");
    tiles(cakes, "cake");

    var main = main;
    main.init(drinks);

});