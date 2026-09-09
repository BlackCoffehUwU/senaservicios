<template>
  <q-page class="bg-grey-2">

    <!-- Imagen de portada -->
    <div class="cover-img" :style="{ backgroundImage: `url(${fotoCafeteria})` }">
      <div class="cover-overlay flex flex-center">
        <div class="text-h3 text-white text-weight-bold">Cafetería SENA</div>
      </div>
    </div>

    <div class="q-pa-lg row q-col-gutter-lg justify-center">

      <!-- Descripción -->
      <div class="col-12 col-md-8">
        <q-card class="q-pa-lg rounded-borders shadow-2">
          <div class="text-h6 text-green-9 q-mb-sm">
            <q-icon name="restaurant" class="q-mr-sm" />
            ¿Qué ofrecemos?
          </div>
          <div class="text-body1 text-grey-8">
            Venta y atención al cliente de comidas del SENA.
          </div>
        </q-card>

        <!-- Horarios -->
        <q-card class="q-pa-lg rounded-borders shadow-2 q-mt-md">
          <div class="text-h6 text-green-9 q-mb-sm">
            <q-icon name="schedule" class="q-mr-sm" />
            Horarios de atención
          </div>
          <q-list separator>
            <q-item>
              <q-item-section avatar><q-icon name="event" color="green-8" /></q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium">Lunes a viernes</q-item-label>
                <q-item-label caption>7:00 am – 12:00 pm</q-item-label>
                <q-item-label caption>1:00 pm – 5:30 pm</q-item-label>
                <q-item-label caption>7:00 pm – 9:30 pm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="event" color="green-8" /></q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium">Sábados</q-item-label>
                <q-item-label caption>7:30 am – 12:00 pm</q-item-label>
              </q-item-section>
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

          <div class="text-h6 text-green-9">Coordinadora de Cafetería</div>
          <div class="text-subtitle2 text-grey-7 q-mb-md">Ficha cocina: 3410173</div>

          <q-separator class="q-mb-md" />

          <q-list dense>
            <q-item>
              <q-item-section avatar><q-icon name="email" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="mailto:lcarreno@sena.edu.com" class="text-grey-8">
                  lcarreno@sena.edu.com
                </a>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="phone" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="tel:3223038451" class="text-grey-8">
                  322 303 8451
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
const fotoCafeteria = '/necesarioarchivos/cafeteria.jpg'
const fotoEncargada = '/necesarioarchivos/encargadacafeteria.jpg'
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