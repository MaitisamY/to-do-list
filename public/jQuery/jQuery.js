<<<<<<< HEAD
  
        $(".checkbox").on("change", function (event) {
            if (this.checked) {
                $(this).parent().css("text-decoration", "line-through");
                localStorage.setItem(".checkbox", "my-divId");
            } else {
                $(this).parent().css("text-decoration", "none");
            }
            event.preventDefault();
        });

        
    
    

    
    
=======
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
        $(".checkbox").on("change", function (event) {
            if (this.checked) {
                $(this).parent().css("text-decoration", "line-through");
                localStorage.setItem(".checkbox", "my-divId");
            } else {
                $(this).parent().css("text-decoration", "none");
            }
            event.preventDefault();
        });
    
    }
    

    
    
>>>>>>> e501e61e4e4cdd7b114494e98aa26f05f31ac808
