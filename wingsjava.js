 document.getElementById('get-attr').addEventListener("click", function(){
   var input = document.getElementById('picture');
   console.log(input.getAttribute('text'));
   console.log(input.getAttribute('alt'));
   console.log(input.getAttribute('height'));
   console.log(input.getAttribute('width'));
  });

document.getElementById('get-attr').addEventListener("click", function(){
    var input = document.getElementById('header');
    console.log(input.getAttribute('text-color'));
    console.log(input.getAttribute('font-size'));
  });

$('.width').text($(window).width());
console.log('width'):;
});