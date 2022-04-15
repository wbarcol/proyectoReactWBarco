
const productos = [
    {
        id:1,
        nombre: 'MANUBRIO',
        precio: 'U$D 8',
        imagen: 'https://github.com/wbarcol/proyectoReactWBarco/blob/da53db318a575cf927b85c6348cdbf630d231ac0/src/assets/img/manubrio.jpg?raw=true',
        cantidad: 5,
        detalles: 'Manubrio de aluminio c/s barra para MTB',
        categoria: 'accesorios'
    },

    {
        id:2,
        nombre: 'ASIENTO',
        precio: 'U$D 9',
        imagen: 'https://github.com/wbarcol/proyectoReactWBarco/blob/main/src/assets/img/asiento.jpg?raw=true',
        cantidad: 12,
        detalles: 'Asiento antiprostático color negro',
        categoria: 'accesorios'
    },

    {
        id:3,
        nombre: 'CAUCHO TACO',
        precio: 'U$D 7',
        imagen: 'https://github.com/wbarcol/proyectoReactWBarco/blob/adab3954362d3349e43dab804430ec197efc6fb1/src/assets/img/caucho.jpg?raw=true',
        cantidad: 8,
        detalles: 'Caucho de taco rin 16" marca Flip',
        categoria: 'repuestos'
    },

    {
        id:4,
        nombre: 'PEDAL GRANDE',
        precio: 'U$D 4',
        imagen: 'https://raw.githubusercontent.com/wbarcol/proyectoReactWBarco/main/src/assets/img/pedal.jpg',
        cantidad: 18,
        detalles: 'Pedal grande 9/16" de plástico',
        categoria: 'accesorios'
    },

    {
        id:5,
        nombre: 'KIT DE FRENO',
        precio: 'U$D 10',
        imagen: 'https://github.com/wbarcol/proyectoReactWBarco/blob/main/src/assets/img/frenos.jpg?raw=true',
        cantidad: 8,
        detalles: 'Kit de frenos V Brake, marca Bluestone. 12 piezas + accesorios',
        categoria: 'repuestos'
    },

    {
        id: 6,
        nombre: 'CADENA PARA BICICLETA',
        precio: 'U$D 4',
        imagen: 'https://github.com/wbarcol/proyectoReactWBarco/blob/main/src/assets/img/cadena.jpg?raw=true',
        cantidad: 12,
        detalles: 'Cadena para bicicleta, 116 eslabones - (1/2x3/32)" marca TEC',
        categoria: 'repuestos'
    }
    
]


export default productos;



export const traerProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (producto) => producto.categoria === categoryId
        );
        setTimeout(() => {
            if (categoryId){
                resolve(productosFiltrados);
            } else {
                resolve(productos)
            }
            // categoryId ? resolve(productosFiltrados) : resolve(productos);
        }, 300);
    });
};

export const traerProducto = (id) => {
    return new Promise((resolve, reject) => {
        const productoElegido = productos.find(
            (producto) => producto.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoElegido);
        }, 100);
    });
};