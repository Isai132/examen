var name = '';
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
      type: 'GET',
      success: (response) => {
        document.getElementById("img1").src = response.sprites.front_default;
        document.getElementById("h1").innerHTML = response.name;
        $('#btn1').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/charmander',
      type: 'GET',
      success: (response) => {
        document.getElementById("img2").src = response.sprites.front_default;
        document.getElementById("h2").innerHTML = response.name;
        $('#btn2').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/squirtle',
      type: 'GET',
      success: (response) => {
        document.getElementById("img3").src = response.sprites.front_default;
        document.getElementById("h3").innerHTML = response.name;
        $('#btn3').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
      type: 'GET',
      success: (response) => {
        document.getElementById("img4").src = response.sprites.front_default;
        document.getElementById("h4").innerHTML = response.name;
        $('#btn4').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/vaporeon',
      type: 'GET',
      success: (response) => {
        document.getElementById("img5").src = response.sprites.front_default;
        document.getElementById("h5").innerHTML = response.name;
        $('#btn5').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/grimer',
      type: 'GET',
      success: (response) => {
        document.getElementById("img6").src = response.sprites.front_default;
        document.getElementById("h6").innerHTML = response.name;
        $('#btn6').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/jolteon',
      type: 'GET',
      success: (response) => {
        document.getElementById("img7").src = response.sprites.front_default;
        document.getElementById("h7").innerHTML = response.name;
        $('#btn7').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
      type: 'GET',
      success: (response) => {
        document.getElementById("img8").src = response.sprites.front_default;
        document.getElementById("h8").innerHTML = response.name;
        $('#btn8').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});

$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/mew',
      type: 'GET',
      success: (response) => {
        document.getElementById("img9").src = response.sprites.front_default;
        document.getElementById("h9").innerHTML = response.name;
        $('#btn9').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/mewtwo',
      type: 'GET',
      success: (response) => {
        document.getElementById("img10").src = response.sprites.front_default;
        document.getElementById("h10").innerHTML = response.name;
        $('#btn10').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/snorlax',
      type: 'GET',
      success: (response) => {
        document.getElementById("img11").src = response.sprites.front_default;
        document.getElementById("h11").innerHTML = response.name;
        $('#btn11').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/tauros',
      type: 'GET',
      success: (response) => {
        document.getElementById("img12").src = response.sprites.front_default;
        document.getElementById("h12").innerHTML = response.name;
        $('#btn12').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/lapras',
      type: 'GET',
      success: (response) => {
        document.getElementById("img13").src = response.sprites.front_default;
        document.getElementById("h13").innerHTML = response.name;
        $('#btn13').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/kabuto',
      type: 'GET',
      success: (response) => {
        document.getElementById("img14").src = response.sprites.front_default;
        document.getElementById("h14").innerHTML = response.name;
        $('#btn14').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/articuno',
      type: 'GET',
      success: (response) => {
        document.getElementById("img15").src = response.sprites.front_default;
        document.getElementById("h15").innerHTML = response.name;
        $('#btn15').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
$(document).ready(() => {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/magmar',
      type: 'GET',
      success: (response) => {
        document.getElementById("img16").src = response.sprites.front_default;
        document.getElementById("h16").innerHTML = response.name;
        $('#btn16').click(() => {
          document.getElementById('contenido').innerHTML = `
          <div class="mt-5 text-center">
          <img id="img" src="${response.sprites.front_default}" width="250" height ="350" class="img-thumbnail">
          </div>
          <div class="row mt-5">
          <div class="mb-3 col">
          <label class="form-label">Nombre:</label>
          <input type="text" value="${response.name}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Altura:</label>
          <input type="text" value="${response.height}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Peso:</label>
          <input type="text" value="${response.weight}" class="form-control" disabled>
          </div>
          <div class="mb-3 col">
          <label class="form-label">Tipo:</label>
          <input type="text" value="${response.types[0].type.name}" class="form-control" disabled>
          </div>
          <button class="btn" onclick="window.location.href='index.php'" type="button">Regresar</button>
          </div>`
        });
      },
      error: (xhr, status, error) => {
        console.log('ERROR');
      }
  });
});
