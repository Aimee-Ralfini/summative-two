
  var picker = new Litepicker({ 
    element: document.getElementById('litepicker'),
    plugins: ['mobilefriendly'],
    
    format: "DD-MMM-YYYY",

        minDate: Date.now(),

        singleMode: false,

        tooltipText: {
          one: "night",

          other: "nights",
        },
      });

      picker.on("selected", (date1, date2) => {
        var theRangeInMillseconds = date2.dateInstance - date1.dateInstance;

        var numberOfMillsecondsInDay = 86400000;

        var nightsCounter = theRangeInMillseconds / numberOfMillsecondsInDay;

        console.log("Length of Booking = ", nightsCounter, " nights");


  });

  // picker.show();


  //Radial selection of room types
  var allArray = document.querySelectorAll(".accom-card > li");
  var peopleArray = document.querySelectorAll(".numbers > ul input");

  peopleArray.forEach(function (item) {
    item.addEventListener("change", function (event) {
      var userChoice = event.target.value;
      // console.log(value);
      
      if (userChoice == "one") {
        showAllRooms();
   
      } else {
        updateDisplay(userChoice);
      }
    });
  });

  function showAllRooms() {
    allArray.forEach(function (item) {
      item.style.display = "block";
    });
  }

  function updateDisplay(userChoice) {
    allArray.forEach(function (item) {
      var myDataType = item.getAttribute("data-type");

      if (userChoice !== myDataType) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });
  }

// discarded this counter and decided to use radial selection
//number of people
      // var counter = 1;
      // var upCounterElement = document.querySelector(".up-counter");
      // var downCounterElement = document.querySelector(".down-counter");
      // var viewCounterElement = document.querySelector(".view-counter");

      // viewCounterElement.innerText = counter;
      // upCounterElement.addEventListener("click", function () {
      //   counter = counter + 1;
      //   viewCounterElement.innerText = counter;
      // });

      // downCounterElement.addEventListener("click", function () {
      //   counter = counter - 1;
      //   if (counter < 1) {
      //     counter = 1;
      //   }

      //   viewCounterElement.innerText = counter;
      // });


      