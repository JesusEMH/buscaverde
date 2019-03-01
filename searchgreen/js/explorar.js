
$(document).ready(function (){
	console.log("jquery y la web cargados...");
	$("#oculto1").hide();
	$('#divsend1').hide();
	$("#oculto2").hide();
	$("#divsend2").hide();
	$("#oculto3").hide();
	$("#divsend3").hide();
	$("#periferico").hide();
	$("#BtnNombre").click(function (){
		$("#oculto1").show('fast');
		$("#select").hide();
		$("#divsend1").show('fast');
		$("#oculto2").hide();
		$("#divsend2").hide();
		$("#oculto3").hide();
		$("#divsend3").hide();
		$("#periferico").hide();
	});
	$("#BtnColonia").click(function (){
		$("#oculto2").show('fast');
		$("#select").hide();
		$("#divsend2").show('fast');
		$("#oculto1").hide();
		$("#divsend1").hide();
		$("#oculto3").hide();
		$("#divsend3").hide();
		$("#periferico").hide();
	});
	$("#BtnCodigoP").click(function (){
		$("#oculto3").show('fast');
		$("#select").hide();
		$("#divsend3").show('fast');
		$("#oculto1").hide();
		$("#divsend1").hide();
		$("#oculto2").hide();
		$("#divsend2").hide();
		$("#periferico").hide();
	});
	$("#BtnSend1").click(function (){
		$("#periferico").show('fast');
	})
});

