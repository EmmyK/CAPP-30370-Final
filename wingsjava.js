  $(document).on('click','img', function() {
  var $this = $(this);
  console.log('Alt: ', $this.attr("alt"));
	console.log('width:',$this.width();
	console.log('height:', $this.height();
	});
						
  $(document).on('click', 'h1,h2,h3,h4', function() {
  var $this = $(this);
	console.log("Alt Text:", $this.text());
	console.log('color:',$this.css('color'));
	console.log('font-size:',$this.css('color'));
  });
  
$('.width').text($(window).width());
console.log('width'):;
});

 $(window).resize(function(){
    $('.width').text($(window).width());
	});