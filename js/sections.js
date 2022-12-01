function gotoSection(sectionName) {
    // alert(sectionName);
    var nextSection = document.querySelector(sectionName);
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
  //dev
  //   gotoSection(".earth");