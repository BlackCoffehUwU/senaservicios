<template>
  <q-page class="bg-grey-2">

    <!-- Imagen de portada -->
    <div class="cover-img" :style="{ backgroundImage: `url(${fotoCoordinacion})` }">
      <div class="cover-overlay flex flex-center">
        <div class="text-h3 text-white text-weight-bold">Coordinación Académica</div>
      </div>
    </div>

    <div class="q-pa-lg row q-col-gutter-lg justify-center">

      <!-- Qué ofrece -->
      <div class="col-12 col-md-8">
        <q-card class="q-pa-lg rounded-borders shadow-2">
          <div class="text-h6 text-green-9 q-mb-sm">
            <q-icon name="school" class="q-mr-sm" />
            ¿Qué ofrecemos?
          </div>
          <div class="text-body1 text-grey-8" style="text-align: justify;">
            Apoyamos el tema de novedades de los aprendices: retiros, deserción, traslados
            y aplazamientos que corresponden a la formación titulada del SENA.
          </div>
          <div class="text-body1 text-grey-8 q-mt-md" style="text-align: justify;">
            También apoyamos con el tema de la programación de los instructores para la
            formación, y la logística de los ambientes, garantizando que estos se encuentren
            en óptimas condiciones.
          </div>
        </q-card>

        <!-- Horarios -->
        <q-card class="q-pa-lg rounded-borders shadow-2 q-mt-md">
          <div class="text-h6 text-green-9 q-mb-sm">
            <q-icon name="schedule" class="q-mr-sm" />
            Horarios de atención
          </div>
          <q-list dense>
            <q-item>
              <q-item-section avatar><q-icon name="wb_sunny" color="green-8" /></q-item-section>
              <q-item-section>7:30 am – 12:00 pm</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="event" color="green-8" /></q-item-section>
              <q-item-section>Lunes a viernes</q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- Encargado -->
      <div class="col-12 col-md-4">
        <q-card class="text-center q-pa-lg rounded-borders shadow-2">
          <q-avatar size="120px" class="q-mb-md">
            <img :src="fotoEncargado" alt="Foto del encargado">
          </q-avatar>

          <div class="text-h6 text-green-9">Luis Carlos Reina</div>
          <div class="text-subtitle2 text-grey-7 q-mb-md">Coordinador Académico</div>

          <q-separator class="q-mb-md" />

          <q-list dense>
            <q-item>
              <q-item-section avatar><q-icon name="email" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="mailto:lreinas@sena.edu.com" class="text-grey-8">
                  lreinas@sena.edu.com
                </a>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

    </div>

  </q-page>
</template>

<script setup>
// Reemplaza estas rutas por las imágenes reales que tengas en public/necesarioarchivos/
const fotoCoordinacion = '/necesarioarchivos/coordinacion.jpg'
const fotoEncargado = '/necesarioarchivos/encargadocoordinacion.jpg'
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