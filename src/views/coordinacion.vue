<template>
  <q-page class="bg-grey-2">

    <!-- Portada -->
    <div class="cover-banner q-pa-lg">
      <q-chip dense size="sm" class="header-badge">
        <q-icon name="school" size="14px" class="q-mr-xs" />
        Servicio Institucional Campus San Gil
      </q-chip>
      <div class="text-h4 text-white text-weight-bold q-mt-sm">Servicio de Coordinación Académica</div>
      <div class="text-body2 text-green-2 q-mt-xs" style="max-width: 640px;">
        Gestión, seguimiento pedagógico y administración curricular para aprendices e instructores
        del Centro Agroturístico.
      </div>

      <div class="row q-gutter-sm q-mt-md">
        <div class="header-chip">
          <q-icon name="location_on" size="14px" class="q-mr-xs" />
          Sede San Gil • Bloque Académico
        </div>
        <div class="header-chip">
          <q-icon name="menu_book" size="14px" class="q-mr-xs" />
          Gestión Curricular & Novedades
        </div>
        <div class="header-chip">
          <q-icon name="event_available" size="14px" class="q-mr-xs" />
          Programación a Instructores
        </div>
      </div>
    </div>

    <div class="content-wrapper q-mx-auto q-pa-lg">
      <div class="row q-col-gutter-lg">

        <!-- Columna izquierda -->
        <div class="col-12 col-md-8">

          <!-- Qué ofrecemos -->
          <q-card flat class="info-card q-pa-lg">
            <div class="row items-center justify-between q-mb-xs">
              <div class="text-caption text-green-8 text-weight-bold">PORTAFOLIO ACADÉMICO & NOVEDADES</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Atención Presencial & Virtual</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">¿Qué ofrecemos?</div>

            <div class="text-body2 text-grey-7" style="text-align: justify;">
              Apoyamos el tema de novedades de los aprendices: retiros, deserción, traslados y
              aplazamientos que corresponden a la formación titulada del SENA.
            </div>
            <div class="text-body2 text-grey-7 q-mt-md" style="text-align: justify;">
              También apoyamos con el tema de la programación de los instructores para la
              formación, y la logística de los ambientes, garantizando que estos se encuentren en
              óptimas condiciones.
            </div>

            <div class="text-caption text-green-8 text-weight-bold q-mt-lg q-mb-sm">
              GESTIÓN Y SOPORTE
            </div>

            <div class="row q-col-gutter-sm">
              <div v-for="item in servicios" :key="item.title" class="col-12 col-sm-6">
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
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Lunes a Viernes</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">Horarios de atención</div>

            <div class="row q-col-gutter-sm">
              <div v-for="item in horarios" :key="item.title" class="col-12 col-sm-6">
                <div class="offer-item q-pa-sm">
                  <div class="row items-center justify-between no-wrap">
                    <div class="row items-center q-gutter-x-sm">
                      <div class="icon-badge" :class="[item.bg, item.color]">
                        <q-icon :name="item.icon" size="16px" />
                      </div>
                      <div class="text-subtitle2 text-weight-bold text-grey-9">{{ item.title }}</div>
                    </div>
                    <q-chip dense size="sm" :class="item.tagClass">{{ item.tag }}</q-chip>
                  </div>

                  <div v-if="item.turnos" class="q-mt-sm">
                    <div
                      v-for="turno in item.turnos"
                      :key="turno.hora"
                      class="row items-center q-gutter-x-xs"
                    >
                      <q-icon name="circle" size="6px" color="green-6" />
                      <div class="text-caption text-grey-8 text-weight-medium">{{ turno.hora }}</div>
                      <div class="text-caption text-grey-6">{{ turno.detalle }}</div>
                    </div>
                  </div>

                  <div v-if="item.desc" class="text-caption text-grey-6 q-mt-xs">
                    {{ item.desc }}
                  </div>
                </div>
              </div>
            </div>
          </q-card>

        </div>

        <!-- Columna derecha: encargado -->
        <div class="col-12 col-md-4">
          <q-card flat class="info-card overflow-hidden">

            <div class="staff-cover q-pa-md relative-position">
              <q-chip dense size="sm" class="bg-green-8 text-white staff-badge">
                Coordinador de Turno
              </q-chip>

              <div class="row items-center">
                <div class="relative-position">
                  <q-avatar size="60px" class="staff-avatar bg-white">
  <img src="/necesarioarchivos/encargadocoordinacion.jpg" alt="Luis Carlos Reina" />
</q-avatar>
                  <q-icon name="check_circle" color="green-5" size="16px" class="staff-status" />
                </div>
              </div>
            </div>

            <q-card-section class="q-pt-md">
              <div class="text-subtitle1 text-weight-bold text-grey-9">Luis Carlos Reina</div>
              <div class="text-body2 text-green-8 text-weight-medium">Coordinador Académico</div>
              <div class="text-caption text-grey-5">Centro Agroturístico • Sede San Gil</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <div class="text-caption text-grey-6 text-weight-bold q-mb-sm">
                CANALES DE CONTACTO DIRECTO
              </div>

              <div class="row items-center">
                <div class="icon-badge bg-green-1 text-green-8 q-mr-sm">
                  <q-icon name="email" size="16px" />
                </div>
                <div class="col">
                  <div class="text-caption text-grey-6">Correo institucional</div>
                  <a href="mailto:lreinas@sena.edu.com" class="text-green-8 text-weight-medium">
                    lreinas@sena.edu.com
                  </a>
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none q-gutter-y-sm">
              <q-btn
                unelevated
                no-caps
                color="green-8"
                icon="mail"
                label="Contactar a Coordinación Académica"
                class="full-width contact-btn"
                href="mailto:lreinas@sena.edu.com"
              />
              <q-btn
                flat
                no-caps
                color="grey-8"
                icon="launch"
                label="Consultar Novedades SOFIA Plus"
                class="full-width contact-btn"
                href="https://senasofiaplus.edu.co"
                target="_blank"
              />
            </q-card-section>

          </q-card>
        </div>

      </div>
    </div>

  </q-page>
</template>

<script setup>
const servicios = [
  {
    title: 'Novedades de Aprendices',
    desc: 'Retiros, deserción, traslados y aplazamientos para el proceso formativo en formación titulada.',
    icon: 'assignment_late',
    bg: 'bg-red-1',
    color: 'text-red-8'
  },
  {
    title: 'Programación de Instructores',
    desc: 'Planificación de cronogramas, asignación pedagógica y articulación de jornadas formativas.',
    icon: 'calendar_month',
    bg: 'bg-blue-1',
    color: 'text-blue-8'
  },
  {
    title: 'Logística de Ambientes',
    desc: 'Supervisión y garantía de aulas, talleres de campo y laboratorios en condiciones óptimas.',
    icon: 'meeting_room',
    bg: 'bg-teal-1',
    color: 'text-teal-8'
  },
  {
    title: 'Soporte a la Formación',
    desc: 'Orientación y asesoría de ficha y atención de solicitudes académicas en sede institucional.',
    icon: 'support_agent',
    bg: 'bg-orange-1',
    color: 'text-orange-9'
  },
]

const horarios = [
  {
    title: 'Lunes a viernes',
    icon: 'calendar_month',
    bg: 'bg-green-1',
    color: 'text-green-8',
    tag: 'Jornada Mañana',
    tagClass: 'bg-green-1 text-green-8',
    turnos: [
      { hora: '7:30 am – 12:00 pm', detalle: 'Atención presencial' },
    ],
    desc: 'Recepción de solicitudes, trámites de novedades y radicación de formatos.'
  },
  {
    title: 'Canales Complementarios',
    icon: 'sync_alt',
    bg: 'bg-orange-1',
    color: 'text-orange-9',
    tag: 'Trámites Virtuales',
    tagClass: 'bg-orange-1 text-orange-9',
    desc: 'Para novedades fuera del horario presencial o remisiones académicas, los aprendices pueden radicar su requerimiento vía correo institucional adjuntando soporte en PDF.'
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

.header-badge {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #e8f5e9;
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