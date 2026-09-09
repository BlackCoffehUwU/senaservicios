<template>
  <q-page class="bg-grey-2">

    <!-- Imagen de portada -->
    <div class="cover-img" :style="{ backgroundImage: `url(${fotoBienestar})` }">
      <div class="cover-overlay flex flex-center">
        <div class="text-h3 text-white text-weight-bold">Bienestar al Aprendiz</div>
      </div>
    </div>

    <div class="q-pa-lg row q-col-gutter-lg justify-center">

      <!-- Descripción -->
      <div class="col-12 col-md-8">
        <q-card class="q-pa-lg rounded-borders shadow-2">
          <div class="text-h6 text-green-9 q-mb-sm">
            <q-icon name="favorite" class="q-mr-sm" />
            ¿Qué es Bienestar al Aprendiz?
          </div>
          <div class="text-body1 text-grey-8" style="text-align: justify;">
            Bienestar al Aprendiz es una estrategia institucional para contribuir en la
            permanencia de los aprendices en su proceso formativo. Los servicios que presta
            están alineados con los objetivos estratégicos y operativos establecidos en la
            Política Nacional Integral de Bienestar al Aprendiz, tales como el reconocimiento
            de la cultura como creadora de identidad, generadora de inclusión y catalizadora de
            diversidad; la generación en los aprendices de prácticas asociadas a la prevención
            de la enfermedad y promoción de la salud, a través de la gestión con entidades
            competentes (salud física y mental); el fortalecimiento de habilidades blandas y
            para la vida; el deporte, la actividad física y el aprovechamiento del tiempo libre
            como elementos fundamentales en el mejoramiento de la formación profesional integral;
            y la promoción de expresiones de arte de los aprendices en su formación profesional
            integral.
          </div>
          <div class="text-body1 text-grey-8 q-mt-md" style="text-align: justify;">
            Además de lo anterior, desde Bienestar al Aprendiz se manejan temas como apoyos
            socioeconómicos (apoyos de sostenimiento regular, FIC, medios tecnológicos,
            alimentación y transporte), monitorías, y el fortalecimiento y ejercicio de liderazgo.
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
              <q-item-section avatar><q-icon name="location_on" color="green-8" /></q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium">Enfermería (sede principal)</q-item-label>
                <q-item-label caption>6:30 am – 10:30 am y 4:00 pm – 8:00 pm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="location_on" color="green-8" /></q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium">Sede Unisangil</q-item-label>
                <q-item-label caption>8:00 am – 12:00 pm y 4:00 pm – 8:00 pm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="attach_money" color="green-8" /></q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium">Apoyos socioeconómicos</q-item-label>
                <q-item-label caption>8:00 am – 12:00 pm y 2:00 pm – 6:00 pm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="groups" color="green-8" /></q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium">Líder de Bienestar al Aprendiz</q-item-label>
                <q-item-label caption>7:30 am – 12:00 pm y 2:00 pm – 6:00 pm</q-item-label>
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

          <div class="text-h6 text-green-9">María Delea Arenas Mejía</div>
          <div class="text-subtitle2 text-grey-7 q-mb-md">Líder de Bienestar al Aprendiz</div>

          <q-separator class="q-mb-md" />

          <q-list dense>
            <q-item>
              <q-item-section avatar><q-icon name="email" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="mailto:mdarenas@sena.edu.com" class="text-grey-8">
                  mdarenas@sena.edu.com
                </a>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="phone" color="green-8" /></q-item-section>
              <q-item-section class="text-left">
                <a href="tel:3176377670" class="text-grey-8">
                  317 637 7670
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
const fotoBienestar = '/necesarioarchivos/bienestaralaprendiz.jpg'
const fotoEncargada = '/necesarioarchivos/encargadabienestar.jpg'
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