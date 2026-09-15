<template>
  <q-page class="bg-grey-2">

    <!-- Portada -->
    <div class="cover-banner q-pa-lg">
      <q-icon name="favorite" size="20px" color="green-3" class="q-mb-sm" />
      <div class="text-h4 text-white text-weight-bold">Servicio de Bienestar al Aprendiz</div>
      <div class="text-body2 text-green-2 q-mt-xs" style="max-width: 640px;">
        Estrategia institucional para contribuir a la permanencia y formación profesional integral
        de los aprendices mediante salud, deporte, cultura y apoyos.
      </div>

      <div class="row q-gutter-sm q-mt-md">
        <div class="header-chip">
          <q-icon name="location_on" size="14px" class="q-mr-xs" />
          Sede San Gil • Bloque Principal
        </div>
        <div class="header-chip">
          <q-icon name="handshake" size="14px" class="q-mr-xs" />
          Acompañamiento Integral y Formativo
        </div>
      </div>
    </div>

    <div class="content-wrapper q-mx-auto q-pa-lg">
      <div class="row q-col-gutter-lg">

        <!-- Columna izquierda -->
        <div class="col-12 col-md-8">

          <!-- Qué es -->
          <q-card flat class="info-card q-pa-lg">
            <div class="row items-center justify-between q-mb-xs">
              <div class="text-caption text-green-8 text-weight-bold">ESTRATEGIA INSTITUCIONAL</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Formación integral</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">¿Qué es Bienestar al Aprendiz?</div>

            <div class="text-body2 text-grey-7" style="text-align: justify;">
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
            <div class="text-body2 text-grey-7 q-mt-md" style="text-align: justify;">
              Además de lo anterior, desde Bienestar al Aprendiz se manejan temas como apoyos
              socioeconómicos (apoyos de sostenimiento regular, FIC, medios tecnológicos,
              alimentación y transporte), monitorías, y el fortalecimiento y ejercicio de liderazgo.
            </div>

            <div class="text-caption text-green-8 text-weight-bold q-mt-lg q-mb-sm">
              LÍNEAS DE ATENCIÓN Y BENEFICIOS
            </div>

            <div class="row q-col-gutter-sm">
              <div v-for="item in lineas" :key="item.title" class="col-12 col-sm-6">
                <div class="offer-item q-pa-sm">
                  <div class="row items-center no-wrap">
                    <div class="icon-badge" :class="[item.bg, item.color]">
                      <q-icon :name="item.icon" size="16px" />
                    </div>
                    <div class="text-subtitle2 text-weight-bold text-grey-9 q-ml-sm offer-text">
                      {{ item.title }}
                    </div>
                  </div>
                  <div class="text-caption text-grey-6 q-mt-xs">{{ item.desc }}</div>
                </div>
              </div>
            </div>
          </q-card>

          <!-- Horarios -->
          <q-card flat class="info-card q-pa-lg q-mt-md">
            <div class="row items-center justify-between q-mb-xs">
              <div class="text-caption text-green-8 text-weight-bold">DISPONIBILIDAD EN SEDE</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Lunes a viernes</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">Horarios de atención</div>

            <div class="row q-col-gutter-sm">
              <div v-for="item in horarios" :key="item.title" class="col-12 col-sm-6">
                <div class="offer-item q-pa-sm">
                  <div class="row items-center q-gutter-x-sm">
                    <div class="icon-badge" :class="[item.bg, item.color]">
                      <q-icon :name="item.icon" size="16px" />
                    </div>
                    <div class="text-subtitle2 text-weight-bold text-grey-9">{{ item.title }}</div>
                  </div>
                  <div class="q-mt-xs">
                    <div
                      v-for="turno in item.turnos"
                      :key="turno"
                      class="row items-center q-gutter-x-xs"
                    >
                      <q-icon name="circle" size="6px" color="green-6" />
                      <div class="text-caption text-grey-7">{{ turno }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card>

        </div>

        <!-- Columna derecha: encargada -->
        <div class="col-12 col-md-4">
          <q-card flat class="info-card overflow-hidden">

            <div class="staff-cover q-pa-md relative-position">
              <q-chip dense size="sm" class="bg-green-8 text-white staff-badge">
                Bienestar en línea
              </q-chip>

              <div class="row items-center">
                <div class="relative-position">
                  <q-avatar size="60px" class="staff-avatar">
                    <img :src="fotoEncargada" alt="Foto de la encargada">
                  </q-avatar>
                  <q-icon name="check_circle" color="green-5" size="16px" class="staff-status" />
                </div>
              </div>
            </div>

            <q-card-section class="q-pt-md">
              <div class="text-subtitle1 text-weight-bold text-grey-9">María Delea Arenas Mejía</div>
              <div class="text-body2 text-green-8 text-weight-medium">Líder de Bienestar al Aprendiz</div>
              <div class="text-caption text-grey-5">Centro Agroturístico • Sede San Gil</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <div class="text-caption text-grey-6 text-weight-bold q-mb-sm">
                CANALES DE CONTACTO DIRECTO
              </div>

              <div class="row items-center q-mb-md">
                <div class="icon-badge bg-green-1 text-green-8 q-mr-sm">
                  <q-icon name="email" size="16px" />
                </div>
                <div class="col">
                  <div class="text-caption text-grey-6">Correo institucional</div>
                  <a href="mailto:mdarenas@sena.edu.com" class="text-green-8 text-weight-medium">
                    mdarenas@sena.edu.com
                  </a>
                </div>
              </div>

              <div class="row items-center">
                <div class="icon-badge bg-green-1 text-green-8 q-mr-sm">
                  <q-icon name="phone_iphone" size="16px" />
                </div>
                <div class="col">
                  <div class="text-caption text-grey-6">Línea móvil / WhatsApp</div>
                  <div class="text-weight-bold text-grey-9">317 637 7670</div>
                </div>
                <q-btn flat dense no-caps color="green-8" label="Llamar" href="tel:3176377670" />
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-btn
                unelevated
                no-caps
                color="green-8"
                icon="call"
                label="Contactar a Líder de Bienestar"
                class="full-width contact-btn"
                href="tel:3176377670"
              />
            </q-card-section>

          </q-card>
        </div>

      </div>
    </div>

  </q-page>
</template>

<script setup>
// Reemplaza esta ruta por la imagen real que tengas en public/necesarioarchivos/
const fotoEncargada = '/necesarioarchivos/encargadabienestar.jpg'

const lineas = [
  {
    title: 'Apoyos Socioeconómicos',
    desc: 'Sostenimiento regular, FIC, medios tecnológicos, transporte y alimentación.',
    icon: 'attach_money',
    bg: 'bg-teal-1',
    color: 'text-teal-8'
  },
  {
    title: 'Salud Física y Mental',
    desc: 'Prevención, promoción integral de la salud y articulación con entidades competentes.',
    icon: 'favorite',
    bg: 'bg-red-1',
    color: 'text-red-8'
  },
  {
    title: 'Cultura y Deporte',
    desc: 'Actividad física, arte, tiempo libre, diversidad e identidad institucional.',
    icon: 'sports_soccer',
    bg: 'bg-orange-1',
    color: 'text-orange-9'
  },
  {
    title: 'Liderazgo y Habilidades',
    desc: 'Monitorías académicas, habilidades blandas para la vida y proyectos vocacionales.',
    icon: 'groups',
    bg: 'bg-blue-1',
    color: 'text-blue-8'
  },
]

const horarios = [
  {
    title: 'Enfermería (sede principal)',
    icon: 'location_on',
    bg: 'bg-green-1',
    color: 'text-green-8',
    turnos: ['6:30 am – 10:30 am', '4:00 pm – 8:00 pm']
  },
  {
    title: 'Sede Unisangil',
    icon: 'location_on',
    bg: 'bg-green-1',
    color: 'text-green-8',
    turnos: ['8:00 am – 12:00 pm', '4:00 pm – 8:00 pm']
  },
  {
    title: 'Apoyos Socioeconómicos',
    icon: 'attach_money',
    bg: 'bg-teal-1',
    color: 'text-teal-8',
    turnos: ['8:00 am – 12:00 pm', '2:00 pm – 6:00 pm']
  },
  {
    title: 'Líder de Bienestar al Aprendiz',
    icon: 'groups',
    bg: 'bg-blue-1',
    color: 'text-blue-8',
    turnos: ['7:30 am – 12:00 pm', '2:00 pm – 6:00 pm']
  },
]
</script>

<style scoped>
.cover-banner {
  background-color: #0f3d1f;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 22px 22px;
  padding-top: 56px;
  padding-bottom: 56px;
  padding-left: 32px;
}

.header-chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #e8f5e9;
  font-size: 12px;
}

.content-wrapper {
  max-width: 1100px;
}

.info-card {
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.icon-badge {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.offer-item {
  background: #f6f8f6;
  border-radius: 12px;
}

.offer-text {
  flex: 1;
  min-width: 0;
}

.staff-cover {
  background: linear-gradient(135deg, #1b5e20, #4caf50);
}

.staff-badge {
  position: absolute;
  top: 12px;
  right: 12px;
}

.staff-avatar {
  border: 3px solid white;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
}

.staff-status {
  position: absolute;
  bottom: -2px;
  right: -2px;
  background: white;
  border-radius: 50%;
}

.contact-btn {
  border-radius: 10px;
}
</style>