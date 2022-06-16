# Wellcommerce
## _Tienda online creada con react_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Wellcommerce es una tienda online creada con la popular librería Javascript, React✨
- Demo: https://wellcommerce.vercel.app/

Agregar productos al carrito:
![navegacion_ecommerce_1](https://user-images.githubusercontent.com/13459321/173737381-b3897fc0-503c-4d2e-813c-668b72ad0eb9.gif)

Ir al carrito y finalizar compra:
![navegacion_ecommerce_2](https://user-images.githubusercontent.com/13459321/173737470-639f04ac-a827-4028-bbb3-5f05cce2cb26.gif)


## Features

- Selecciona productos con su cantidad y puedes agregalos a un carrito de compras.
- Incluye filtros por categorías de productos.
- El carrito cuenta con una tabla donde se puede ver el resumen del mismo y el monto total.
- Antes de finalizar la compra el sistema le solicitará al usuario ingresar tus datos personales: Nombre, Telefono, Correo y dirección.
- Los campos del formulario se validan antes de finalizar la compra.
- Selecctor de métodos de pago: "Efectivo", "Tarjeta de débito", "Tarjeta de crédito".
- El usuario tiene la opción de elegir entre retirar el pedido del local o pedir que se lo envía a su dirección.
- Es responsive, se adapta a pantallas grandes como a smartphones.
- Utiliza una API basada en firebase: con las colecciones "categorias", "productos" y "ordenes".


> Productos

Los productos cuentan con los siguientes features: 
- Nombre y descripción.
- Imagen.
- Talle.
- Categoría.
- Descuento.
- Precio y precio con descuento aplicado.
- Cantidad de Stock.
- Indicador cuando el sotck del mismo es menor a 5.

## Tech

Wellcomerce usa las siguientes librerías opensource:

- [ReactJS] - HTML enhanced for web apps!
- [Bootstrap CSS] - Propociona el sistema para que la app sea responsive y los estilos de textos, botones, cards y formularios.
- [Material-ui/material icons] - Se usan los íconos de esta librería.
- [Firebase] - La tienda se conecta a un API basada en firebase.

Wllcommerce es open source y tiene n repositorio público en GitHub: https://github.com/gonzapala/wellcommerce-palavecino

## Instalación

Wellcommerce requiere [Node.js](https://nodejs.org/) v10+

Para clonar el proyecto utilizar:
```sh
git clone git@github.com:gonzapala/wellcommerce-palavecino.git
```
Instalar el proyecto y sus dependencias
```sh
npm i
```

Correr el proyecto con el comando
```sh
npm start
```

Para crear un build para producción:
```sh
npm run build
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
