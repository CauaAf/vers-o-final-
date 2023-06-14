function mostrarOcultar() {
    var conteudo = document.getElementById('conteudoOculto');
    if (conteudo.classList.contains('mostrando')) {
      conteudo.classList.remove('mostrando');
    } else {
      conteudo.classList.add('mostrando');
    }
  }