$(document).ready(function(){
  // Se agrega la clase appear al contenedor de la primera imagen
  $(".image-container").addClass("appear");
  
  // Detener la animación de los cubos después de 4 segundos
  setTimeout(function() {
    $(".cubes").css("animation", "none");
    $(".sk-cube").css("animation","none")
    $(".sk-cube").css("visibility","hidden")
  }, 4000);
});