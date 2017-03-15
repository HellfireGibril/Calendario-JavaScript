function Calendario(clase_ppal, clase_mes, clase_dia_semana, clase_dias, borde, idioma, formato){
	var fecha_hoy      = new Date();               		//Obtiene la fecha de hoy
	var mes_actual     = fecha_hoy.getMonth() + 1; 		//Obtiene el mes actual(1-12)
	var anio_actual    = fecha_hoy.getFullYear();  		//Obtiene elaño actual
	var obtener_dia    = fecha_hoy.getDay() + formato; 	//Obtiene el dia de semana de hoy segun formato
	var buscar_dia_hoy = fecha_hoy.getDate();      		//Obtiene el dia de hoy

	if (idioma == "SP"){
		var nombre_meses     = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
	    var abreviacion_dias = (formato==0)? ['Lu','Ma','Mi','Ju','Vi','Sa','Do']:['Do','Lu','Ma','Mi','Ju','Vi','Sa'];	
	}

	if (idioma == "EN"){
		var nombre_meses     = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	    var abreviacion_dias = (formato==0)? ['Mo','Tu','We','Th','Fr','Sa','Su']:['Su','Mo','Tu','We','Th','Fr','Sa'];	
	}

	var dimension_meses = [31,0,31,30,31,30,31,31,30,31,30,31];
        //dimensiona el mes de febrero segun los años bisiestos
    	dimension_meses[1] = (((anio_actual%100 != 0) && (anio_actual%4 == 0)) || (anio_actual%400 == 0)) ? 29:28;

    //DIBUJAR CALENDARIO
    //Crea cabecera con el mes y el año
	var calendario_html = '<div class="' + clase_ppal + '"><table class="' + clase_ppal + '" cols="7" cellpadding="' + borde + '" cellspacing="' + borde + '"border="'+ borde +'"><tr align="center">';
	    calendario_html += '<td colspan="7" align="center" class="' + clase_mes + '">' + nombre_meses[mes_actual-1] + ' - ' + anio_actual + '</td></tr><tr align="center">';
	//Crea cabecera con los nombres de los dias de la semana abreviados 
	for(var s = 0; s < 7; s++)
		calendario_html += '<td class="' + clase_dia_semana + '">' + abreviacion_dias[s] + '</td>';
	calendario_html += '</tr><tr align="center">';
	//Crea todos los dias del mes segun el dia de la semana
	for(var i = 0; i <= 34; i++){
		var x = ((i - obtener_dia >= 0) && (i - obtener_dia < dimension_meses[mes_actual - 1])) ? i - obtener_dia + 1: '&nbsp;';
		//Marca el dia de hoy en el calendario
		if (x == buscar_dia_hoy)
			x = '<span id="hoy">' + x + '</span>';//Marca el dia de hoy en el calendario
		if ((i+1-formato)%7 == 0)
			x = '<span id="domingo">' + x + '</span>';
		calendario_html += '<td class="' + clase_dias + '">' + x + '</td>';
		
		if(((i+1)%7 == 0) && (i < 34))
			calendario_html += '</tr><tr align="center">';
	}
	return calendario_html += '</tr></table></div>';
}