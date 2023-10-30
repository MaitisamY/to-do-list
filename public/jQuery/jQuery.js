  
        // lining through checked elements
        $(".checkbox").on("change", function (event) {
            if (this.checked) {
                $(this).parent().css("text-decoration", "line-through");
                // localStorage.setItem(".checkbox", "my-divId");
            } else {
                $(this).parent().css("text-decoration", "none");
            }
            event.preventDefault();
        });

        // handling button click events
        function actions(id) {
            document.getElementById("label" + id).setAttribute("hidden", true)
            document.getElementById("edit" + id).setAttribute("hidden", true)
            document.getElementById("cancel" + id).removeAttribute("hidden")
            document.getElementById("update" + id).removeAttribute("hidden")
            document.getElementById("modify" + id).removeAttribute("hidden")
        }

        // handling button click reverse events
        function reverseAction(id) {
            document.getElementById("modify" + id).setAttribute("hidden", true)
            document.getElementById("update" + id).setAttribute("hidden", true)
            document.getElementById("cancel" + id).setAttribute("hidden", true)
            document.getElementById("label" + id).removeAttribute("hidden")
            document.getElementById("edit" + id).removeAttribute("hidden")
        }

        // use timeOut() to fire our code after a set time...
        setTimeout(() => 
        { 
            $('.message').fadeOut();
        }, 8000
        )
        
    
    

    
    
