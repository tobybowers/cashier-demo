define(function(){

        function create(tagname, id) {
            var el = document.createElement(tagname);

            el.id = id || "";

            return el;
        }

        return {
            create: create
        };
});