// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation('topbar', {scrolltop: false});

// full Page plugin innit

$('#fullpage').fullpage({
      anchors: ['Hi', 'PieChart', 'WhyMe', 'Footer'],
      slidesColor: ['#FFF', 'rgb(230, 178, 159)','#FFF', '#fcfcfc'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['', '', '', ''],
      menu: '#menu'
});

// toggle active class

$("li").click(function() {
      $("li").removeClass("active");
      $(this).toggleClass("active");
      // return false; // Prevents further propagation of event
});


//FOOTER




// // GOOGLE MAP
//
//     function initialize() {
//         var mapOptions = {
//           center: new google.maps.LatLng(-34.397, 150.644),
//           zoom: 8
//         };
//         var map = new google.maps.Map(document.getElementById("map-canvas"),
//             mapOptions);
//       }
//       google.maps.event.addDomListener(window, 'load', initialize);
//
//




/*
// TREEHOUSE BADGES

$(document).ready(function () {

  // Replace the value for var 'e' with your Treehouse Username
  var e = "rezner",

  // Treehouse Json
  t = "http://teamtreehouse.com/" + e + ".json",

  // Badges JQuery Identifier
  n = $("#badges"),

  // Badges Array
  r = [],

  // Badges Count
  i = 0;

  // Json Parse Treehouse User Badges Info
  $.getJSON(t, function (e) {

    // User Json Parse Select Badges Info
  	var t = e.badges;

    // Construct Each badge's HTML
  	$.each(t, function (e, t) {
  	 r += '<li><a href="' + t.url + '" target="_blank"><img src="' + t.icon_url + '" alt="' + t.name + '" title="' + t.name + '"/></a></li>';
  		i++;
  	});

    // Append Badge to #badges
  	n.append(r);

    // Header Badges count generator
  	$("#treehouse-count").append('Here\'s my ' + i + ' Treehouse badges!');
  });
});
*/
