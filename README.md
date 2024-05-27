# Analizador de texto

## Índice

* [1. Descripción del proyecto](#1-Descripción-del-proyecto)
* [2. Características](#2-Características)
* [3. Tecnologías Utilizadas](#3-Tecnologías-Utilizadas)
* [4. Uso](#4-Uso)
* [5. Decisiones de Diseño](#5-Decisiones-de-Diseño)

***

## 1. Descripción del proyecto

* El analizador de texto, es un aplicación web que permite a la usuaria analizar el contenido de texto proporcionado por ella misma. Esta herramienta ofrece varias métricas como el recuento de palabras, el recuento de caracteres, el recuento de caracteres sin espacios y signos de puntuación, contar la cantidad de números en el texto, la suma de estos números y el promedio de longitud de las palabras. También incluye un botón para limpiar el contenido del área de texto.

![vista del proyecto](images/app-proyecto.png)

## 2. Características

El listado de funcionalidades es el siguiente:

1. La aplicación permite a la usuaria ingresar un texto escribiéndolo en un cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualizar el resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Recuento de palabras**: la aplicación cuenta el número de
    palabras en el texto de entrada y muestra este recuento a la usuaria
    - **Recuento de caracteres**: la aplicación cuenta el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y muestra este recuento a la usuaria.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación cuenta el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y muestra este recuento
    a la usuaria.
    - **Recuento de números**: la aplicación cuenta cúantos números hay en
    el texto de entrada y muestra este recuento a la usuaria.
    - **Suma total de números**: la aplicación suma todos los números que
    hay en el texto de entrada y muestra el resultado a la usuaria.
    - **Longitud media de las palabras**: la aplicación calcula la
    longitud media de las palabras en el texto de entrada y lo muestra a la usuaria.

3. La aplicación permite limpiar el contenido de la caja de texto haciendo clic en el botón <Limpiar métricas>

![metrics](images/metrics.gif)

## 3. Tecnologías Utilizadas

El proyecto del Analizador de Texto se desarrolló utilizando las siguientes tecnologías:

- HTML
- CSS
- JavaScript

## 4. Uso

1. Abrir la aplicación en el navegador de preferencia.
2. Ingresar el texto que deseas analizar en el área de texto.
3. Observar cómo se actualizan las métricas en tiempo real mientras se escribe.
4. Utilizar el botón "Limpiar métricas" para borrar el texto y restablecer todas las métricas a cero (0).

## 5. Decisiones de Diseño

La aplicación cuenta con un diseño simple, intuitivo y de fácil uso. Se ha utilizado una paleta de colores suaves y agradable a la vista de la usuaria, lo cual no distrae la atención del contenido principal de la aplicación. Las métricas se han organizado de manera intuitiva para que los usuarios puedan acceder fácilmente a la información que están buscando.

