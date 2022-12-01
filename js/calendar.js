
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
