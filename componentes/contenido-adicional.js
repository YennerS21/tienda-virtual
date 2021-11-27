Vue.component('contenido-adicional', {
    template://html
    `
        <div id="contenido-adicional" class="bg-ligth float-end" style="width: 20%">
            <div v-for="oferta in ofertas">
                <h5>{{oferta.titulo}}</h5>
                <p>{{oferta.descripcion}}</p>
            </div>
        </div>
    `,
    data(){
        return {
            ofertas:[
                {titulo:"Super oferta", descripcion:"Compras superiores a $ 190 tienen 15% de descuento en su total a pagar"},
                {titulo:"Descuento del 40% por 24 horas", descripcion:"Tienes 24 horas para obtener 40% de descuento."},
                {titulo:"Registrate", descripcion:"Si te registras obtienes un cupo de descuento."},
            ],
        }
    }
})