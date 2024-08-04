// Selecciona el elemento de audio y el contenedor de letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me desperté hoy", time: 12 },
  { text: "Me hizo tener muchas ganas de verte", time: 13 },
  { text: "Nadie más", time: 17 },
  { text: "Hace que mi pecho arda tanto como tú", time: 19 },
  { text: "Aunque puede ser un poco difícil para nosotros encontrarnos", time: 22 },
  { text: "Si no vienes, en algún momento", time: 28 },
  { text: "quiero poder hablar contigo, um", time: 30},
  { text: "Hola amor quiero un verso", time: 32},
  { text: "para que lo compongas", time: 35},

  { text: "quiero nuestro propio sonido", time: 36 },
  { text: "Rima y tono", time: 39 },
  { text: "Canta fuerte", time: 40  },
  { text: "todo lo que es bueno", time: 41  },

  { text: "Amor", time: 44  },
  { text: "te llevaré a donde quiera que vaya", time: 45 },
  { text: "Porque te hice este coro", time: 47},
  { text: "Con la intención", time:  50},
  { text: "de cantarte en esta canción", time: 52 },

  { text: "Quiero pasar del Mundial al Maracaná", time: 64 },
  { text: "al Maracaná", time: 66},
  { text: "Siente tu sabor a menta", time: 69 },
  { text: "Cuando llamo a tu puerta y te beso", time: 72 },
  { text: "y te beso", time: 74  },
  { text: "Tocando una guitarra en un día de verano", time: 76 },
  { text: "Toca una samba muy apasionada", time: 80 },
  { text: "Entonces puedo salir contigo", time: 82 },
  { text: "Hola amor ", time: 86 },
  { text: "quiero un verso para que lo compongas", time: 87 },
  { text: "quiero nuestro propio sonido", time: 90 },
  { text: "sonido", time: 91 },
  { text: "Rima y tono", time: 92},
  { text: "Canta fuerte ", time: 94 },
  { text: "todo lo que es bueno", time: 95 },
  { text: "Amor", time: 97 },
  { text: "te llevaré a donde quiera que vaya", time: 98 },
  { text: "Porque te hice este coro", time: 100 },
  { text: "Con la intención ", time: 103 },
  { text: "de cantarte en esta canción", time: 104 },
  { text: "Amor", time: 108 },
  { text: "quiero un verso para que tú lo compongas", time: 109 },
  { text: "quiero nuestro propio ", time: 111 },
  { text: "sonido", time: 112 },
  { text: "Rima y tono", time: 114 },
  { text: "Canta fuerte ", time: 115 },
  { text: "todo lo que es bueno", time: 117 },
  { text: "Bebé", time: 118 },
  { text: "te llevaré a donde quiera que vaya", time: 119 },
  { text: "Porque te hice este coro", time: 122 },
  { text: "Con la intención ", time: 124 },
  { text: "de cantarte en esta canción", time: 125 },
  { text: "¿Creamos nuestro ritmo juntos?", time: 134 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 2
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100); // Actualiza las letras cada 100 milisegundos

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Duración y función de temporización de la desaparición
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
