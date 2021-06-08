<template>
<div>
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Realizar pago</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-list>
            <q-item v-for="i in items" v-if="i.cantidad>0">
             <q-item-label>
                {{i.nombre}}  <b>({{i.cantidad}})</b>
             </q-item-label> 
             .... ${{i.precio * i.cantidad}}
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section>
          <q-input label="Numero de Targeta" v-model="nun_tarjeta"/>
          <q-radio v-model="visa" val="v" label="Visa" color="primary" />
          <q-radio v-model="visa" val="m" label="MasterCard" color="primary" />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="Cancelar" color="negative" v-close-popup />
          <q-btn outline label="Pagar" color="primary" @click="pagar()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">EXITO</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          EL PAGO SE HA EFECTUADO CON EXITO
        </q-card-section>

        <q-card-actions align="center">
          <q-btn outline label="ACEPTAR" color="positive" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-list class="q-px-xs q-py-sm" >
        <div class="q-py-md q-px-xl row">
        <div class="col">
          <p class="text-bold">Total: {{total}}</p>
        </div>
            <!-- <p class="text-bold">Sub Total: {{subtotal}} </p> -->
        <div>
            <q-btn color="primary"  label="pagar" @click="dialog=true"/>
            <!-- <p class="text-bold">Sub Total: {{subtotal}} </p> -->
        </div>
        </div>
      <q-item  v-for="i in items">
        <q-item-section thumbnail>
          <img :src="i.imagen">
          <!-- <img src="../assets/rudy5.jpg"> -->
        </q-item-section>
        <q-item-section>{{i.nombre}}</q-item-section>
        <q-item-section>
            <p>$ {{i.precio}}</p>
        </q-item-section>
        <q-item-section>
           <q-input outlined label="cantidad" v-model="i.cantidad"/>
        </q-item-section>
        <q-item>
               <q-btn round color="primary" icon="add" @click="add(i.precio,i.cantidad)"/>
        </q-item>
      </q-item>
    </q-list>
    <div class="text-center q-pt-xl"><q-btn label="VOLVER" color="info" text-color="black" 
      to="/" class=""/></div>
</div>
</template>
<script>
export default {
    data:() => ({
      total:0,
      subtotal:0,
      dialog:false,
      alert:false,
      visa:false,
      nun_tarjeta:null,
      items:[
        {imagen:"rudy1.jpg",nombre:'RAM - GAMER',precio:'56.00',cantidad:0},
        {imagen:"rudy2.jpg",nombre:'RAM - NORMAL',precio:'43.00',cantidad:0},
        {imagen:"rudy3.jpeg",nombre:'MC CORE I5',precio:'105.50',cantidad:0},
        {imagen:"rudy4.png",nombre:'CASE GAMER',precio:'187.99',cantidad:0},
        {imagen:"rudy5.jpg",nombre:'CASE GAMER - DELUXE',precio:'285.97',cantidad:0},
      ]
    }),
    methods:{
      pagar(){
        this.items.forEach (row => {
          row.cantidad = 0
        })
        this.total = 0
          this.dialog = false
          this.alert = true
          setInterval(() => {
            this.alert = false
          }, 2000);
      },
      add(precio,cantidad){
        let totalprecio = precio * cantidad
        let subtotalprecio = precio * cantidad * 0.13
        this.subtotal = subtotalprecio
        this.total = this.total + totalprecio
      }
    },
    mounted(){}
}
</script>