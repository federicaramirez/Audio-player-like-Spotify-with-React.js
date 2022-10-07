import React, {useState, useEffect, useRef} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [cancion, setCancion] = useState(0)
	const [lista, setLista] = useState([])
	const reproducir = useRef (null)

	function getCancion(){
		fetch("https://assets.breatheco.de/apis/sound/songs")
		.then((response) => {
			console.log(response.status);
			return response.json()
	}) 
	// .then((data) => setLista(data.lista)) //promesa 2
	.then((data) => setLista(data)) //siempre hacer un console.log para ver 
	.catch((err) => console.log(err)) 
}


useEffect(()=>{
	getCancion()
},[])
console.log(lista);



	return ( 
		<div className="container">
			<div className="d-grid gap-2 col-6 mx-auto">
			{lista.map((item) => <button class="btn btn-primary" type="button" key={item.id}>{item.name}</button> ) }
			<audio controls><source src="horse.mp3" type="audio/mpeg"/></audio>
			</div>
<div className="botones">Botones</div>
		</div>
	);
};


export default Home;
