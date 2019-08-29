var submit = document.getElementById('enviar');
var valor = document.getElementById('numero');
var jason = document.querySelector('.jason');
var inform = document.querySelector('.inform');

submit.addEventListener('click',function(element){
	jason.style.display = 'block';
	element.preventDefault();

	axios.get('https://swapi.co/api/people/'+valor.value)
    .then(function(response){
		console.log(response);
		var nome = document.createElement('p');
        nome.innerHTML = 'teste1';
        inform.appendChild(nome);
        var genero = document.createElement('p');
        genero.innerHTML = 'teste2';
        inform.appendChild(genero);
        var altura = document.createElement('p');
        altura.innerHTML = 'teste3';
        inform.appendChild(altura);
        var filmes = document.createElement('p');
        filmes.innerHTML = 'teste41';
        inform.appendChild(filmes);
        jason.style.display = 'none';

    })
    .catch(function(error){
        console.warn(error);
        jason.style.display = 'none';
	});
	valor.value = '';
});



