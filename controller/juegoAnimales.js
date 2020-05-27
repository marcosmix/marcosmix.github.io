var b1=document.getElementById('button1');
var b2=document.getElementById('button2');
var b3=document.getElementById('button3');
var b4=document.getElementById('button4');


function Toque(b)
{	
	let url_image;
	let sonido;
	switch (b.dataset.animal) {
		case "gatito":
			url_image='url(../images/gato.jpg)';
			sonido=document.getElementById("sound_gato");

			break;
		case "perrito":
			url_image='url(../images/perro.jpg)';
			sonido=document.getElementById("sound_perro");
			break;
		case "caballito":
			url_image='url(../images/caballo.jpg)';
			sonido=document.getElementById("sound_caballo");
			break;
		case "vaquita":
			url_image='url(../images/vaca.jpg)';
			sonido=document.getElementById("sound_vaca");
			break;
		default:
			// statements_def
			break;
	}
	
	
	console.log("comence a ejecutar");
	b.style.backgroundImage =url_image;
	sonido.play();
	setTimeout(function(){
		b.style.backgroundImage = 'none';
	 	sonido.pause();
		},1500);
	console.log("deje de ejecutar");
	
}

