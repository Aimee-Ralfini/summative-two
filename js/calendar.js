
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



//number of people
      var counter = 1;
      var upCounterElement = document.querySelector(".up-counter");
      var downCounterElement = document.querySelector(".down-counter");
      var viewCounterElement = document.querySelector(".view-counter");

      viewCounterElement.innerText = counter;
      upCounterElement.addEventListener("click", function () {
        counter = counter + 1;
        viewCounterElement.innerText = counter;
      });

      downCounterElement.addEventListener("click", function () {
        counter = counter - 1;
        if (counter < 1) {
          counter = 1;
        }

        viewCounterElement.innerText = counter;
      });
