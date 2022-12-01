function gotoSection(sectionName) {
    // alert(sectionName);
    var nextSection = document.querySelector(sectionName);
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
  //dev
  //   gotoSection(".earth");

  //add waves to transitions at some stage: https://materializecss.com/waves.html#!
  