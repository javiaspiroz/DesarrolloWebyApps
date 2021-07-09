$(document).ready(function () {

	$.getJSON('producto.json', function(producto) {

    var output ="";
    var index =1;//para hacer efecto en cada carrousel correspondiente
      
    $.each(producto.producto, function(key, val) {
      output += '<div class="container"><div class="row"> <div class="col-lg-5"> <div id="carouselCafe';
      output += index+'" class="carousel slide" data-ride="carousel"><div class="carousel-inner"> <div class="carousel-item active prods"> <img class="d-block w-100" src="';
      output += val.foto1 + '"></div><div class="carousel-item prods"><img class="d-block w-100" src="';
      output += val.foto2 + '"></div><div class="carousel-item prods"><img class="d-block w-100" src="';
      output += val.foto3 + '"> </div></div><a class="carousel-control-prev" href="#carouselCafe';
      output += index+'" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselCafe';
      output += index+'" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div></div><div class="col-lg-7"><div class="card-body"><h5 class="card-title">';
      output += val.producto + '</h5><p class="card-text">';
      output += val.descripcion + '</p></div></div></div></div>';
      index++;
    });

    output +='</ul>'; 
    $('#productsMain').append(output); 

	});
});