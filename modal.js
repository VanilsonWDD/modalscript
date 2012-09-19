$(document).ready(function(){
	var divbackgroundmodal = '<div id = background-modal></div>';
	var larguradocumento = $(document).width();
	var alturadocumento = $(document).height();
	var body = $('body');
	$('#btn-novo').on('click', function(e){
		e.preventDefault();
		var atributoid = $(this).attr('href');
		body.prepend(divbackgroundmodal);
		body.css({'overflow-x': 'hidden'});

		$('#background-modal').css({'width': larguradocumento, 'height': alturadocumento });
		$('#background-modal').animate({'opacity': '0.5'});	
		$(atributoid).show();
	
	});
	$('#background-modal').live('click', function(){
		$('#background-modal, .janela-modal').fadeOut();	
	});
	$('.fechar').on('click', function(){
		$('#background-modal, .janela-modal').fadeOut();		
	});
});