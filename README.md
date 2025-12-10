# 🎧 Proyecto — Página de Música

Aplicación web conectada a una API musical que permite buscar artistas, consultar sus álbumes y obtener información detallada de cada uno.  
Además, permite guardar álbumes en una biblioteca personal como favoritos.

---

## 🧰 Tecnologías

- HTML  
- CSS  
- React
- Redux
- JSX
- AXIOS
- Styled components
- API externa de música (theaudiodb)

---

## 🚀 Cómo empezar / Usar localmente

1. Clona este repositorio  
   ```bash
   git clone https://github.com/LRGaliciaBenitez/proyecto_pagMusic.git
2. Instala las dependencias:
   npm install
3. Inicia el servidor de desarrollo:
   npm run dev
4. Abre la aplicación en tu navegador:
   👉 http://localhost:5173/ (Vite)
   ó
   👉 http://localhost:3000/ (Create React App)

## 📁 Estructura del proyecto

📦public
 ┣ 📜index.html
 ┣ 📜manifest.json
 ┗ 📜robots.txt
📦src
 ┣ 📂assets
 ┃ ┣ 📜abbey-road-the-beatles-1969.jpg
 ┃ ┣ 📜album2.jpeg
 ┃ ┣ 📜album3.jpg
 ┃ ┣ 📜album4.jpg
 ┃ ┗ 📜imagen_album.jpeg
 ┣ 📂components
 ┃ ┣ 📂HEADER
 ┃ ┃ ┗ 📜header.js
 ┃ ┣ 📂Library
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SearchResults
 ┃ ┃ ┣ 📂SongResults
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂song_components
 ┃ ┃ ┣ 📜container_songs.js
 ┃ ┃ ┗ 📜song.js
 ┃ ┗ 📂ViewAlbum
 ┃ ┃ ┗ 📜index.js
 ┣ 📂redux
 ┃ ┣ 📜librarySlice.js
 ┃ ┣ 📜searchSlice.js
 ┃ ┣ 📜store.js
 ┃ ┗ 📜viewalbumSlice.js
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.js
 ┃ ┗ 📜theme.js
 ┣ 📜App.js
 ┗ 📜index.js

---

## 💡 Qué hace el proyecto

 -🔍 Buscar artistas usando la API de TheAudioDB.

 -💿 Mostrar todos los álbumes existentes del artista seleccionado.

 -⭐ Guardar álbumes como favoritos mediante Redux (biblioteca local).

 -📘 Ver detalles del álbum, incluyendo:

    * portada

    * fecha

    * número de canciones

    * descripción (si existe en la API)

    * metadatos adicionales

 -⚡ Consumo de API con Axios.

 -🎨 Estilos modernos con Styled Components.

 -📱 Diseño responsivo.

---

## 🧪 Posibles mejoras / Próximos pasos

 -Reproductor de previews o audios.

 -Página dedicada al artista con biografía completa.

 -Filtro por año, género o popularidad.

 -Integrar autenticación para sincronizar favoritos en la nube.

 -Animaciones mejoradas (Framer Motion).

 -Paginación o lazy loading en álbumes.

---

📄 Licencia & Créditos

Este proyecto es de uso libre.

Desarrollado por Luis Galicia.
Si deseas aportar mejoras, puedes hacer fork o enviar un pull-request.
