

$( document ).ready(function() {
    var getValues = function(operation){
        var x = parseInt($('#input-x').val(), 10);
        var y = parseInt($('#input-y').val(), 10);
        var total = 0;
        if (x.toString() == x && y.toString()== y){
            new calculate(x,y,operation,total).operate();
        }else{
            $('.error').show();
        }
    };
    $('.add').click(function(){
        var operation = "plus";
        getValues(operation);
    });
    $('.subtract').click(function(){
        var operation = "minus";
        getValues(operation);
    });

});
var calculate = function(x, y, operation,total){
    this.x = x;
    this.y = y;
    this.total = total;
    //console.log(x+y);
    this.operation = operation;
    this.operate = function(){
        if (operation === "plus"){
            this.total = x + y;
            this.display();
        }else{
            if ( x > y){
                this.total = x - y;
            }else{
                this.total = y - x;
            }
            this.display();
        }
    }
    this.display = function(){
        $('.output-template').empty();
        var $template = $("#display");
        var source = $template.html();
        var template = Handlebars.compile(source);
        var html    = template(this);
        $template.after(html);
    }
};
