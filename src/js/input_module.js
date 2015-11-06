define(function(dom){

    function createInput(type){
        var el = dom.create("input");
        el.type = type;

        return el;
    }

    var controls = {
        button: function() {

        },
        checkbox: function() {
            var el = createInput("checkbox");

            if(typeof options.checked !== "undefined"){
                el.value = options.checked;
            }

            return el;
        },
        email: function() {

        },
        number: function() {

        },
        password: function() {

        },
        radio: function() {

        },
        submit: function() {

        },
        text: function() {
            var el = createInput("text");

            if(typeof options.value !== "undefined"){
                el.value = options.value;
            }

            return el;
        }
    };

    return {
        create: function (options) {
            var type = options.type ? options.type.toLowerCase() : undefined;

            if(!type || !controls[type]){
                throw new {
                    message: type + " is not supported"
                };
            }

            return controls[type](options);
        }
    };
});
