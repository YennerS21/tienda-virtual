Vue.component('pie-pagina', {
    template://html
    `
        <div id="footer" class="float-start pt-5" style="width:100%">
            <ul>
                <li v-for="dato of datos">
                    {{dato.text}}
                </li>
            </ul>
        </div>
    `,
    data(){
        return{
            datos: [
                {text:"Creado por Yenner Suarez"},
                {text:"yenner@gmail.com"},
                {text:"444-55-55-666"},
            ]
        }
    }
})