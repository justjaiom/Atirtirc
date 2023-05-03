$('.dropdown').click(function(e){
  e.stopPropagation();
  $('.nav-dropdown').toggle();
});

$('html').click(function(){
  $('.nav-dropdown').hide();
})

$('#nav-toggle').on('click', function() {
  this.classList.toggle('active');
});

$("#nav-toggle").click(function() {
      $("nav ul").toggle();
    });



// hide navbar on scrol 

var lastScrollTop;
var navbar = $('#navigation');
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > lastScrollTop) {
    navbar.css('top', '-80px');
  } else {
    navbar.css('top', '0');
  }
  lastScrollTop = scrollTop;
});
