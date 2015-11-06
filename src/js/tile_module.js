define(["dom_module"], function(dom){
   function createTile(options){
       var id = options.id ? options.id.toLowerCase().capitalize(): undefined;

       if(!id){
           throw new {
               message: "ID " + id + " is not valid"
           };
       }

       var el = dom.create("section", id );
       var span = dom.create("span");
       //var text = document.createTextNode(options.desc);
       el.className = "option "+ options.type;
       span.appendChild(document.createTextNode(options.desc));
       el.appendChild(span);
       options.location.appendChild(el);

       return false;
   }


    return {
        create: function(options) {
            createTile(options);
            return false;
        }
    }
});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
