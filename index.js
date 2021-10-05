// $("h1").click(function(){
//   $("h1").css("color","blue");
// });


// $(document).keypress(function(event){
//   $("h1").text(event.key);
// })


// $("button").click(function(){
//   $("h1").fadeOut();
// })

// $("button").click(function(){
//   $("h1").fadeIn();
// })
//
// $("button").click(function(){
//   $("h1").fadeToggle();
// })


// $("button").click(function(){
//   $("h1").slideUp();
// })

// $("button").click(function(){
//   $("h1").slideDown();
// })

// $("button").click(function(){
//   $("h1").slideToggle();
// })

// $("button").click(function(){
//   $("h1").animate({opacity: 0.5}); //animate has only numeric value so we cannot change color
// })

$("button").click(function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5}); //animate has only numeric value so we cannot change color
})



// $("button").click(function(){
//   $("h1").toggle();
// })
//
// $("button").click(function(){
//   $("h1").show();
// })
//
// $("button").click(function(){
//   $("h1").hide();
// })

// $("img").attr("src");
// $("a").attr("href","https://www.google.com");

$("h1").addClass("big-title");
// $("h1").removeClass("big-title");
// $("h1").hasClass("big-title");
