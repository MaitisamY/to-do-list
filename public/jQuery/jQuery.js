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
    

    
    
