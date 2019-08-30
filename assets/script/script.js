var submit = document.getElementById('enviar');
var valor = document.getElementById('numero');
var jason = document.querySelector('.jason');
var inform = document.querySelector('.inform');
var count = 1;
submit.addEventListener('click',function(element){
    inform.innerHTML = "";
	jason.style.display = 'block';
	element.preventDefault();

	axios.get('https://swapi.co/api/people/'+valor.value)
    .then(function(response){

		console.log(response.data);
        var itens = response.data;

		var nome = document.createElement('p');
        nome.innerHTML = 'name = '+itens.name;
        inform.appendChild(nome);

        var genero = document.createElement('p');
        genero.innerHTML = 'gender = '+itens.gender;
        inform.appendChild(genero);

        var altura = document.createElement('p');
        altura.innerHTML = 'height = '+itens.height;
        inform.appendChild(altura);

        
        itens.films.forEach(function(film){
            axios.get(film)
            .then(function(response2){
                console.log(response2);
                var filmes = document.createElement('p');
                filmes.innerHTML = 'movie '+count+' = '+response2.data.title;
                count++;
                inform.appendChild(filmes);

            }).catch(function(error2){
                console.warn(error2);
            });    
        });
        count = 1;
        jason.style.display = 'none';

    })
    .catch(function(error){
        console.warn(error);
        jason.style.display = 'none';
	});
	valor.value = '';
});



