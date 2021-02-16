$(function() {
    $(".change-status").on("click", function(event) {
        const id = $(this).data("id");
        const newBurger = $(this).data("newBurger");

        const newBurgerState = {
            devoured: newBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("Changed burger status to ", newBurger);
                location.reload();
            }
        )
    })

    $(".newBurgerForm").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#newBurgerName").val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");
                location.reload();
            }
        )
    })
});