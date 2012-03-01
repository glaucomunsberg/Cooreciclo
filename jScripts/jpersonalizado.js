// JavaScript Document
	//Responsavale pelo Fade dos botoes
	$(document).ready(function() {
    	$('.efeito_fade').append('<span class="hover"></span>').each(function () {
  	    	var $span = $('> span.hover', this).css('opacity', 0);
			$(this).hover(function () {
       	 	 $span.stop().fadeTo(500, 1);
      	 	 }, function () {
        		  $span.stop().fadeTo(500, 0);
			});
		});
	});
	//Script da abertura e fechamento de divs
	$(document).ready(function()
	{
 		$("#div_home").hide("slow");
		$("#div_quemSomos").hide("slow");
		$("#div_servicos").hide("slow");
		$("#div_colaboradores").hide("slow");
		$("#div_materiais").hide("slow");
		$("#div_contato").hide("slow");
		$('#div_foot').hide("slow");
	$('#imagem_logo').click(function(event)
 	{
 		event.preventDefault();
 		$("#div_home").hide("slow");
		$("#div_quemSomos").hide("slow");
		$("#div_servicos").hide("slow");
		$("#div_colaboradores").hide("slow");
		$("#div_materiais").hide("slow");
		$("#div_contato").hide("slow");
		$('#div_foot').hide("slow");
 	});
	
 	$('#botaoHome').click(function(event)
 	{
 		event.preventDefault();
 		$("#div_home").show("slow");
		$("#div_quemSomos").hide("slow");
		$("#div_servicos").hide("slow");
		$("#div_colaboradores").hide("slow");
		$("#div_materiais").hide("slow");
		$("#div_contato").hide("slow");
		$('#div_foot').show("slow");
 	});
	
 	$('#botaoQuemSomos').click(function(event)
 	{
 		event.preventDefault();
 		$("#div_home").hide("slow");
		$("#div_quemSomos").show("slow");
		$("#div_servicos").hide("slow");
		$("#div_colaboradores").hide("slow");
		$("#div_materiais").hide("slow");
		$("#div_contato").hide("slow");
		$('#div_foot').show("slow");
 	});
	
	$('#botaoServicos').click(function(event)
 	{
 		event.preventDefault();
 		$("#div_home").hide("slow");
		$("#div_quemSomos").hide("slow");
		$("#div_servicos").show("slow");
		$("#div_colaboradores").hide("slow");
		$("#div_materiais").hide("slow");
		$("#div_contato").hide("slow");
		$('#div_foot').show("slow");
 	});
	
	$('#botaoMateriais').click(function(event)
 	{
 		event.preventDefault();
 		$("#div_home").hide("slow");
		$("#div_quemSomos").hide("slow");
		$("#div_servicos").hide("slow");
		$("#div_colaboradores").hide("slow");
		$("#div_materiais").show("slow");
		$("#div_contato").hide("slow");
		$('#div_foot').show("slow");
 	});
	
	$('#botaoColaboradores').click(function(event)
 	{
 		event.preventDefault();
 		$("#div_home").hide("slow");
		$("#div_quemSomos").hide("slow");
		$("#div_servicos").hide("slow");
		$("#div_colaboradores").show("slow");
		$("#div_materiais").hide("slow");
		$("#div_contato").hide("slow");
		$('#div_foot').show("slow");
 	});
	
	$('#botaoContato').click(function(event)
 	{
 		event.preventDefault();
 		$("#div_home").hide("slow");
		$("#div_quemSomos").hide("slow");
		$("#div_servicos").hide("slow");
		$("#div_colaboradores").hide("slow");
		$("#div_materiais").hide("slow");
		$("#div_contato").show("slow");
		$('#div_foot').show("slow");
 	});
	
	});
	
	//Script responsável pelo carregamento do sistema
		//$(window).load(function(){
		$(window).ready(function(){
		 $("#div_load_conteudo").hide();		
	})
	
	//Script contra a seleção do conteúdo
		function disableselect(e){
			return false
		}
		function reEnable(){
			return true
		}
		document.onselectstart=new Function ("return false")
		if (window.sidebar){
		document.onmousedown=disableselect
		document.onclick=reEnable
		}