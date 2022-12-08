
  // CONFIGURE SPLIDE


  var mySplide = new Splide(".my-slider", {
    autoplay: true,
    interval: 3500,
    type: "loop",
  });
  
  mySplide.mount();



  function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }