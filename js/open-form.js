$('.header, .contacts').on('click', '.btn-header', function(e){
  e.preventDefault();
  $('.fixed-form').show(600);
});

$('.header, .contacts').on('click', '.close-form, .click-off-form', function(){
  $('.fixed-form').hide(600);
});
