Vue.component('barra-navegacion', {
    template://html 
    `
        <div id="menu-section">
            <header class="" >
                <nav class="nav nav-pills">
                    <span class="p-1">MINITiendaVirtual</span>
                    <span class="form-button nav-link m-3" v-for="item of menu" @click="mostrarModal">
                        {{ item.text }}
                    </span>
                </nav>
            </header>
        </div>
    `,
    data(){
        return{
            titulo:'Tienda virtual',
            menu: [
                {text: "Iniciar sesión"},
                {text: "Registrarse"},
                {text: "Ver carrito"},
            ]
        }
    },
    methods: {
        mostrarModal(){
            console.log("Lista de compras");
        }
    },
});