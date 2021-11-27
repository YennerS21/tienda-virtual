Vue.component('contenido-pagina', {
    template://html 
    `
        <div id="contenido-pagina" class="float-start " style="width:80%">
            <h1> {{ titulo }}</h1>
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
            carrito: []
        }

    },
    methods: {
        agregarProducto(e){
            let producto = e.target.parentElement;
            let precio = producto.children[2].innerText;
            
            precio = precio.split('');
            
            if (precio[0]!== Number ) {
                let limpiar = precio.shift();
            }
            
            precio = Number(precio.join(''));
            
            productoNuevo = new Object({
                id:producto.children[0].innerText,
                nombre:producto.children[1].innerText,
                precio,
            });
            this.carrito.push(productoNuevo);
            console.log(this.carrito);
        },
    },
    computed:{
        ...Vuex.mapState(['articulos'])
    },
    actions:{
        ...Vuex.mapActions(['agregarProducto'])
    }
})