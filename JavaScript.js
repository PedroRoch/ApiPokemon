document.addEventListener('DOMContentLoaded', function () {
  // Função para obter informações do Pokémon
  function getPokemonInfo(pokemonId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Atualiza as informações na página
        document.getElementById('pokemon-name').innerText = data.name;
        document.getElementById('pokemon-id').innerText = data.id;
        document.getElementById('pokemon-sprite').src = data.sprites.front_default;
      })
      .catch(error => console.error('Erro ao obter informações do Pokémon:', error));
  }

  // Chama a função com o ID do Pokémon desejado (por exemplo, 1 para o Bulbasaur)
  getPokemonInfo(25);
});
