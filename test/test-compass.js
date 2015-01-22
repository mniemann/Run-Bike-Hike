/* jshint strict: true, devel: true, browser: true */
/* global casper */

// casperjs test test-compass.js

casper.test.begin("Compass", 2, function suite(test) {
  "use strict";
  casper.start("../index.html", function() {
    test.assertTitle("Run, Bike, Hike...", "webpage title");
  }, true);

  casper.then(function() {
    this.mouse.click("#a-flipbox");
    var flipbox = document.getElementById('compass-flipbox');
    console.log("flipbàx", flipbox);

    test.assertEqual(flipbox.flipped, true, "has been flipped");
  });

  casper.run(function() {
    test.done();
  });
});
/*document.querySelector("#a-flipbox").addEventListener ("click", function () {
  "use strict";
  console.log("toggle flipbox");
  document.getElementById("compass-flipbox").toggle();
});*/


