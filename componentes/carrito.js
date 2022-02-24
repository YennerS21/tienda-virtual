Vue.component('carrito', {
    template:
        `
    <div>
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table"> 
                        <thead>
                            <th class="scope">#</th>
                            <th class="scope">Nombre-producto </th>
                            <th class="scope"> Precio (unidad) </th>
                            <th class="scope">Ccantidad </th>
                        </thead>
            
                        <tbody>
                            <tr v-for="item in carrito">
                                <th scope="row">{{item.id}}</th>
                                <td>{{item.nombre}}</td>
                                <td>{{item.precio}}</td>
                                <td>{{item.cantidad}}</td>
                                <td>
                                    <button class="btn bg-danger">
                                        E
                                    </button>
                                    <button class="btn bg-primary">
                                        A
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
        
    </div>
    `,
    methods: {

    },
    computed: {
        ...Vuex.mapState(['carrito']),
    },
})