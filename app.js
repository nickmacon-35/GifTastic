// Example queryURL for Giphy API
$("#find-animal").on("click", function(event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();

    // Here we grab the text from the input box
    var animal = $("#animal-input").val();

// $("button").on("click", function() {
    // var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=Tj0oPNZniOJy89T0vNhvVfFjmBFz1F3S&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data

        // =============== put step 2 in between these dashes ==================
        var results = response.data;
        // ========================

        for (var i = 0; i < results.length; i++) {

        // Step 3: uncomment the for loop above and the closing curly bracket below.
        var animalDiv = $("<div>");
        var p = $("<p>");
        $("<p>").text("Rating: " + results[i].rating);
        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#gifs-appear-here").prepend(animalDiv);

        // ============= put step 3 in between these dashes ======================
        
        // ==================================
        }

        // $(".gif").on("click", function() {
        //     // STEP ONE: study the html above.
        //     // Look at all the data attributes.
        //     // Run the file in the browser. Look at the images.
      
        //     // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.
      
        //     // STEP TWO: make a variable named state and then store the image's data-state into it.
        //     // Use the .attr() method for this.
      
        //     // ============== FILL IN CODE HERE FOR STEP TWO =========================
      
        //     var state = $(this).attr("data-state");
      
        //     // =============================================
      
        //     // STEP THREE: Check if the variable state is equal to 'still',
        //     // then update the src attribute of this image to it's data-animate value,
        //     // and update the data-state attribute to 'animate'.
      
        //     // If state is equal to 'animate', then update the src attribute of this
        //     // image to it's data-still value and update the data-state attribute to 'still'
        //     // ============== FILL IN CODE HERE FOR STEP THREE =========================
            
        //     if (state == "still") {
        //       $(this).attr("src", $(this).attr("data-animate"));
        //       $(this).attr("data-state", "animate");
        //     }
        //     else if (state == "animate") {
        //       $(this).attr("src", $(this).attr("data-still"));
        //       $(this).attr("data-state", "still");
        //     }
      
            // ==============================================
      
            // STEP FOUR: open the file in the browser and click on the images.
            // Then click again to pause.
        //   });
      });
    });