# Calendario-JavaScript 

### Esta pequeña funcion esta diseñada solo para mostrar un calendario basico en su pagina web. 

## Modo de uso: (Ver calendario.html)

```html
<html>
 <head>
  <link href="css/calendario.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="js/calendario.js"></script>
 </head>
 <body>
  <div id="contenedor">
   <script type="text/javascript">
  	document.write(Calendario("main", "mes", "dia_semana", "dias", 0, "EN",0));
   </script>
  </div>
 </body>
</html>
```
El div "contenedor" puedes colocarlo donde quieras.

## Uso de la funcion Calendario():

```javascript 
  document.write(Calendario("main", "mes", "dia_semana", "dias", borde, idioma, formato)); 
```

## Donde:  
* `"main", "mes", "dia_semana", "dias"`Son los nombres de las clases descritas en **css/calendario.css**. Puedes cambiar tus estilos segun tu diseño.
  * `"main"` : Clase que abarca a toda la tabla del calendario.
  * `"mes"` : Clase de la cabecera Mes - Año.
  * `"dia_semana"` : Clase de la fila de los nombres de los dias.
  * `"dias"` : Clase de los demas dias del mes.

* `borde` es el tamaño en **px.** de toda la tabla del calendario, 0=Sin bordes.

* `idioma` es el idioma del calendario: 
  * **"EN"** Ingles. 
  * **"ES"** Español.

* `formato` es el estilo de calendario: 
  * **0** si la semana empieza el lunes.
  * **1** si la semana empieza el domingo.

