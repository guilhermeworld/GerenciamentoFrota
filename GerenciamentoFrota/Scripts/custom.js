function verificar() {
	if (document.getElementById("Tipo").value == "Caminhão") {
		document.getElementById("Passageiros").setAttribute('value', 2);
	}

	else if (document.getElementById("Tipo").value == "Ônibus") {
		document.getElementById("Passageiros").setAttribute('value', 42);
	}
	else {
		document.getElementById("Passageiros").setAttribute('value', '');
	}

}
