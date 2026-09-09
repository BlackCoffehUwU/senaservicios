<template>
  <q-page class="bg-grey-2">

    <!-- Imagen de portada -->
    <div class="cover-img" :style="{ backgroundImage: `url(${fotoSede})` }">
      <div class="cover-overlay flex flex-center">
        <div class="text-h3 text-white text-weight-bold">Acerca de</div>
      </div>
    </div>

    <div class="q-pa-lg row q-col-gutter-lg justify-center">

      <!-- Info del centro -->
      <div class="col-12 col-md-9">
        <q-card class="q-pa-lg rounded-borders shadow-2">
          <div class="text-h6 text-green-9 q-mb-sm">
            <q-icon name="info" class="q-mr-sm" />
            Centro Agroturístico SENA – San Gil, sede principal
          </div>
          <div class="text-body1 text-grey-8" style="text-align: justify;">
            En 1997 fue creado el Centro Multisectorial de las Provincias Guanentina y
            Comunera, con sede en el municipio de San Gil, Santander, con el propósito de
            satisfacer las necesidades de formación del talento humano de las provincias Guanentina y Comunera en acciones de formación laboral, asesoría a empresas y servicios tecnológicos.
            En el año 2008, mediante Resolución 02428, fue cambiada la denominación del Centro, pasando a llamarse Centro Agroturístico.
          </div>

          <q-separator class="q-my-md" />

          <q-list dense>
            <q-item>
              <q-item-section avatar><q-icon name="location_on" color="green-8" /></q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium">Dirección</q-item-label>
                <q-item-label caption>Calle 22 N.º 9-82, San Gil, Santander</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="phone" color="green-8" /></q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium">Teléfono</q-item-label>
                <q-item-label caption>(607) 724 8113</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- Equipo desarrollador -->
      <div class="col-12 col-md-9">
        <q-card class="q-pa-lg rounded-borders shadow-2 q-mt-md">
          <div class="text-h6 text-green-9 q-mb-md">
            <q-icon name="code" class="q-mr-sm" />
            Equipo desarrollador
          </div>

          <div class="row items-center q-col-gutter-md">
            <div class="col-auto">
              <q-avatar size="80px">
                <img :src="fotoDesarrollador" alt="Foto del desarrollador">
              </q-avatar>
            </div>
            <div class="col">
              <div class="text-subtitle1 text-weight-medium text-green-9">
                Andrés Jesús Calderón Núñez
              </div>
              <div class="text-body2 text-grey-7">
                Desarrollador de esta página web
              </div>
            </div>
          </div>
        </q-card>
      </div>

    </div>

  </q-page>
</template>

<script setup>
// Reemplaza estas rutas por las imágenes reales que tengas en public/necesarioarchivos/
const fotoSede = 'https://www.vanguardia.com/resizer/v2/balancepositivodelcentroagroturisticosenaen2015vl341343mg19630426jpg-GCP2TL3D3NGE7PDG6QBWGNBTNI.jpg?auth=8e3667d3defb6aa84db70e4cb644a8d01790637dd3ccb140eb767927d2a2c1e5&smart=true&width=1200&height=800&quality=70'
const fotoDesarrollador = 'https://previews.123rf.com/images/redlinevector/redlinevector1903/redlinevector190300784/119702484-curly-haired-guy-line-icon-young-man-cheerful-hipster-student-boy-concept-can-be-used-for.jpg'
</script>

<style scoped>
.cover-img {
  height: 260px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15));
}
</style>