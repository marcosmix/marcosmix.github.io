new Vue({
	el:'#dynamic-option',

	data()
	{
		return{
				/*itemActivo:"nada",*/
				
				listado:[
							{categoria:"Asesoría",
							 descripcion:"(Abogacía, Arquitectura, Contabilidad, Diseño Gráfico, Ingeniería,  Imprenta, informática, etc.)",
							 subcategoria:["Abogacía","Contabilidad","Inmobiliaria","Gestoria","Asesores de Seguros","Arguitectura","Otros"]},
							
							 {categoria:"Asesoría",
							 descripcion:"(Abogacía, Arquitectura, Contabilidad, Diseño Gráfico, Ingeniería,  Imprenta, informática, etc.)",
							 subcategoria:["Abogacía","Contabilidad","Inmobiliaria","Gestoria","Asesores de Seguros","Arguitectura","Otros"]},
							
							 {categoria:"Asesoría",
							 descripcion:"(Abogacía, Arquitectura, Contabilidad, Diseño Gráfico, Ingeniería,  Imprenta, informática, etc.)",
							 subcategoria:["Abogacía","Contabilidad","Inmobiliaria","Gestoria","Asesores de Seguros","Arguitectura","Otros"]}


							]
		}
	},

	/*method:
	{
			SetCategoria(nombre){
			this.itemActivo=nombre;
			alert(nombre)
			}
	}*/


	})