var movies = [];

// Function for displaying movie data
function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();
  
  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {
  
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("movie-btn");
    // Adding a data-attribute
    a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(movies[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
  }
  
  // This function handles events where a movie button is clicked
  $("#add-movie").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();
  
  // Adding movie from the textbox to our array
  movies.push(movie);
  
  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
    });
  
  
  // Adding a click event listener to all elements with a class of "movie-btn"
  $(document).on("click", ".movie-btn", displayMovieInfo);
  
  // // Calling the renderButtons function to display the intial buttons
  renderButtons();



// Function for dumping the JSON content for each button into the div
function displayMovieInfo() {

  var movie = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=Tj0oPNZniOJy89T0vNhvVfFjmBFz1F3S&limit=10";
// Function for displaying movie data
// Creating an AJAX call for the specific movie button being clicked
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {

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
    p.text("Rating: " + results[i].rating);
    console.log(results[i].rating);
    var animalImage = $("<img>");
    animalImage.attr("src", results[i].images.fixed_height.url);
    animalDiv.append(p);
    animalDiv.append(animalImage);
    $("#movies-view").prepend(animalDiv);
    };
  });
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
    //   });
// });
