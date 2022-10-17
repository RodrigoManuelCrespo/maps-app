# Mapas en IONIC ANGULAR

Este proyecto te permitira obtener la informacion necesaria para la implementacion de mapas con sus funciones basicas.

## Google Maps vs Leaflet 🚀

**Google Maps:** _La API de Google Maps es definitivamente el titán de la cartografía interactiva en línea. Por lo general, son la primera plataforma que aprenden los nuevos mapeadores interactivos, debido a la facilidad para comenzar, la naturaleza omnipresente de Google Maps y la gran popularidad de Google en general._

**Leaflet:** _Leaflet es una plataforma de la que las personas generalmente escuchan una vez que han realizado un mapeo: es un complemento de mapeo de código abierto y disponible gratuitamente para JavaScript que tiene muchos complementos y complementos a disposición de los usuarios. Requiere un poco más de conocimiento del desarrollador para comenzar, pero es el favorito de los desarrolladores de código abierto._

## Teniendo en cuenta tu proyecto 📋

En su mayor parte, en la mayoría de los proyectos de mapas pequeños, como colocar marcadores en los mapas, tener ventanas emergentes, etc., hay poca diferencia funcional entre la API de Google Maps y Leaflet. Ambos pueden manejar todos los conceptos básicos de mapeo bastante bien.
Aquí hay algunos puntos que deberían ayudarlo a tomar una decisión más fácil, si ha considerado las preguntas que planteé anteriormente sobre su proyecto de mapeo.

1. Servicios de mapas
   Google ofrece muchos servicios útiles, como geolocalización, cuadros de autocompletar, tráfico, tránsito y más. La mayoría de estos servicios son fáciles de obtener desde cualquier otro lugar (hay muchas API de geolocalización, como ArcGIS), pero los datos de alcance de tráfico y tránsito de Google no tienen paralelo. Pocos otros servicios tienen mucho tráfico y tránsito en China o en todo el Medio Oriente, pero Google sí.

   Leaflet no ofrece servicios por sí solo, sino que depende de servicios de terceros para hacerlo (como Nominatim u otros servicios). Esto es más difícil de implementar para un desarrollador novato, y se debe investigar la calidad de los servicios de terceros.

2. Documentación
   Es bastante fácil trabajar con Google, pero su documentación se ha ampliado a lo largo de los años para incluir muchas plataformas y, a veces, puede ser un poco complicado encontrar una respuesta a la pregunta específica que tiene en términos de mapeo. Dicho esto, hay una cantidad ridículamente enorme de recursos en línea disponibles en blogs, StackOverflow y más. No me gusta usar mucho la documentación de la API, pero hay respuestas a todo lo que necesita disponible en algún lugar si busca lo suficiente.

   Leaflet tiene una documentación muy clara y estándar de estilo complemento de Javascript, y también tiene una gran cantidad de recursos en línea repartidos por la web. Como desarrollador desde hace mucho tiempo, prefiero la documentación y la facilidad de uso de Leaflet en esta área en comparación con Google.

3. Código
   Tanto la API de Google Maps como Leaflet son estelares en términos de calidad de código. Como se indicó anteriormente, la mayoría de los mapas básicos verán muy poca diferencia entre los dos. Ambos mapas pueden crear marcadores personalizados, agregar geoJSON, tener interacción de capas, ventanas emergentes y mucho más. Es solo en implementaciones muy grandes o muy específicas que las diferencias comienzan a aparecer más claramente.
   -Leaflet es más adaptable y accesible para los desarrolladores, debido a que es de código abierto
   -Los mapas de Google pueden manejar una gran cantidad de marcadores (más de 10 000) de manera más eficiente; sin embargo, esto puede depender de muchas variaciones en cómo se crean los marcadores y qué tan interactivos deben ser.
   -Ambos mapas son rápidos y responsive, hay pocas diferencias de velocidad apreciables
   -La naturaleza de código abierto de Leaflet significa que un mundo de desarrolladores lo revisa todos los días y no está restringido por ninguno de los términos de servicio de Google.

## Leaflet

### Instalación 🔧

_Paso 1: Agregamos leaflet al proyecto_

```
https://www.npmjs.com/package/leaflet

npm install leaflet
```

_Paso 2: Importamos leaflet style en global.scss_

```
@import "~leaflet/dist/leaflet.css"
```

_Paso 3: Iniciamos el mapa en el componente_

```
Importamos -> import * as Leaflet from 'leaflet';

Declaramos -> map: Leaflet.Map;

Funcion para iniciar el mapa ->

leafletMap() {
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);
}

```

_Paso 4: Agregamos la etiqueta del mapa con su ID en el template_

```
<ion-content>
  <div id="mapId" style="width: 100%; height: 100%">
  </div>
</ion-content>
```

## Google Maps

### Instalación 🔧

Para la implementación de Google Maps necesitamos crearnos una cuenta en Google Cloud y configurar el proyecto. https://developers.google.com/maps/documentation/javascript/cloud-setup.

**A tener en cuenta: la configuración de facturación es obligatoria, pero solo se te cobrará si un proyecto excede su cuota de servicios sin cargo.**

Una vez obetenida la api key podemos seguir 3 caminos para agregar el mapa.

1. Documentación de Google Maps https://developers.google.com/maps/documentation/javascript/overview
2. Componente de Google Maps para angular https://github.com/angular/components/tree/main/src/google-maps#readme
3. Google maps nativo para ionic con capacitor https://capacitorjs.com/docs/apis/google-maps

En este proyecto se utliza la segunda opcion dada la facilidad que nos brinda para su instalacion y su uso. A diferencia de las demas opciones, podemos utlizar en el template la etiqueta <google-maps> junto con otras que se ofrecen. Ademas podemos setear configuraciones como propiedades en la misma etiqueta.

_Paso 1: Agregamos leaflet al proyecto_

```
https://www.npmjs.com/package/@angular/google-maps

npm i @angular/google-maps
```

_Paso 2: Agregamos la api key en el index.html_

```
https://www.npmjs.com/package/leaflet

npm install leaflet
```

_Paso 3: Importamos Google maps en el modulo requerido_

```
import { GoogleMapsModule } from '@angular/google-maps';

  imports: [
    -> GoogleMapsModule,
  ],
```

_Paso 4: Agregamos Google maps en el template_

```
<google-map></google-map>
```
