Vue.component('contenido-pagina', {
    template://html 
    `
        <div id="contenido-pagina" class="float-start " style="width:80%">
            <h1> {{ titulo }}</h1>
            <h2> </h2>
            <div id="articulos">
                    <div v-for="articulo of articulos" class="d-inline-block m-2 card" style="width: 8rem;">
                            <div class="card-body" >
                                <h1 v-show="id">{{articulo.id}}</h1>
                                <h5 class="card-title fs-6">{{articulo.nombre}}</h5>
                                <p class="card-text">$ {{articulo.precio}}</p>
                                <a class="btn btn-dark" @click="agregarProducto">+</a>
                            </div>
                    </div>
                    
            </div>
        </div>
    `,
    data(){
        return{
            titulo: "Productos",
            id:false,
        }

    },
    methods: {
        agregarProducto(e){
            let elemento = e.target.parentElement;
            
            let precio = elemento.children[2].innerText;
            precio = precio.split('');
            if (precio[0]!== Number ) {
                let limpiar = precio.shift();
                precio = Number(precio.join(''));
            }

            const producto = new Object({
                id:Number(elemento.children[0].innerText),
                nombre:elemento.children[1].innerText,
                precio,
                cantidad:0,
            });
            //Verificamos si el array esta vacio y agregamos el 1er elemento
            if (this.carrito.length === 0 ) {
                this.carrito.push(producto);
                return;
            }
            //Validamos si el arreglo tiene mas de una posision
            if (this.carrito.length>0 ) {
                for(item of this.carrito){
                    //comparamos cada item de carrito
                    //si ya existe el item aumentamos la cantidad
                    if (item.id===producto.id) {
                        return
                    }
                }
            }
            this.carrito.push(producto);
        },
    },
    computed:{
        ...Vuex.mapState(['articulos','sms','carrito']),
    },
})