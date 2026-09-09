<template>
  <q-page class="bg-grey-2">

    <!-- Imagen de portada -->
    <div class="cover-img" :style="{ backgroundImage: `url(${fotoBiblioteca})` }">
      <div class="cover-overlay flex flex-center">
        <div class="text-h3 text-white text-weight-bold">Biblioteca</div>
      </div>
    </div>

    <div class="q-pa-lg row q-col-gutter-lg justify-center">

      <!-- Qué ofrece -->
      <div class="col-12 col-md-8">
        <q-card class="q-pa-lg rounded-borders shadow-2">
          <div class="text-h6 text-green-9 q-mb-sm">
            <q-icon name="menu_book" class="q-mr-sm" />
            ¿Qué ofrecemos?
          </div>
          <q-list dense>
            <q-item>
              <q-item-section avatar><q-icon name="check_circle" color="green-8" /></q-item-section>
              <q-item-section>Consultas en sala</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="check_circle" color="green-8" /></q-item-section>
              <q-item-section>Préstamos a domicilio</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="check_circle" color="green-8" /></q-item-section>
              <q-item-section>Préstamo interbibliotecario (PIP)</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="check_circle" color="green-8" /></q-item-section>
              <q-item-section>Talleres de lectura</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="check_circle" color="green-8" /></q-item-section>
              <q-item-section>Capacitaciones</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="check_circle" color="green-8" /></q-item-section>
              <q-item-section>Acceso a TIC</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="check_circle" color="green-8" /></q-item-section>
              <q-item-section>Asesorías en búsqueda de información</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="check_circle" color="green-8" /></q-item-section>
              <q-item-section>Asesorías en el uso adecuado del catálogo bibliográfico</q-item-section>
            </q-item>
          </q-list>
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
              <q-item-section>7:00 am – 10:00 pm</q-item-section>
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

          <div class="text-h6 text-green-9">Yudith Milagros Martínez Bautista</div>
          <div class="text-subtitle2 text-grey-7 q-mb-md">Bibliotecaria</div>

          <q-separator class="q-mb-md" />

          <q-list dense>
            <q-item>
              <q-item-section avatar><q-icon name="email" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="mailto:ymmartinez@sena.edu.co" class="text-grey-8">
                  ymmartinez@sena.edu.co
                </a>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="phone" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="tel:3125848032" class="text-grey-8">
                  312 584 8032
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
const fotoBiblioteca = '/necesarioarchivos/biblioteca.jpg'
const fotoEncargada = '/necesarioarchivos/encargadabiblioteca.jpg'
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