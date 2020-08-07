$(function() {
    
    $("#navigation").blur(function(event){
        
        var screenwidth=  window.innerWidth;
        
        if( screenwidth < 768) {
                $("#menu-collapsable-nav").collapse('hide');
            }
    });
});