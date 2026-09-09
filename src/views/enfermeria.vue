<template>
  <q-page class="bg-grey-2">

    <!-- Imagen de portada -->
    <div class="cover-img" :style="{ backgroundImage: `url(${fotoEnfermeria})` }">
      <div class="cover-overlay flex flex-center">
        <div class="text-h3 text-white text-weight-bold">Enfermería</div>
      </div>
    </div>

    <div class="q-pa-lg row q-col-gutter-lg justify-center">

      <!-- Qué ofrece -->
      <div class="col-12 col-md-8">
        <q-card class="q-pa-lg rounded-borders shadow-2">
          <div class="text-h6 text-green-9 q-mb-sm">
            <q-icon name="medical_services" class="q-mr-sm" />
            ¿Qué ofrecemos?
          </div>
          <div class="text-body1 text-grey-8">
            Aquí se ofrecen todos los servicios de promoción y prevención de enfermedades,
            así como atención básica en primeros auxilios.
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
              <q-item-section>6:30 am – 10:30 am</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="nights_stay" color="green-8" /></q-item-section>
              <q-item-section>4:00 pm – 8:00 pm</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="event" color="green-8" /></q-item-section>
              <q-item-section>Lunes a viernes</q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- Encargada -->
      <div class="col-12 col-md-4">
        <q-card class="text-center q-pa-lg rounded-borders shadow-2">
          <q-avatar size="120px" class="q-mb-md">
            <img :src="fotoEncargada" alt="Foto de la encargada">
          </q-avatar>

          <div class="text-h6 text-green-9">María Fernanda Gómez Reyes</div>
          <div class="text-subtitle2 text-grey-7 q-mb-md">Enfermera</div>

          <q-separator class="q-mb-md" />

          <q-list dense>
            <q-item>
              <q-item-section avatar><q-icon name="email" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="mailto:Mafecita1118@gmail.com" class="text-grey-8">
                  Mafecita1118@gmail.com
                </a>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="phone" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="tel:3214153995" class="text-grey-8">
                  321 415 3995
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
const fotoEnfermeria = '/necesarioarchivos/enfermeria.jpg'
const fotoEncargada = '/necesarioarchivos/encargadaenfermeria.jpg'
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