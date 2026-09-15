<template>
  <q-page class="bg-grey-2">

    <!-- Portada -->
    <div class="cover-banner q-pa-lg">
      <q-chip dense size="sm" class="header-badge">
        <q-icon name="restaurant" size="14px" class="q-mr-xs" />
        Servicio Institucional Campus San Gil
      </q-chip>
      <div class="text-h4 text-white text-weight-bold q-mt-sm">Servicio de Cafetería</div>
      <div class="text-body2 text-green-2 q-mt-xs" style="max-width: 640px;">
        Servicio de alimentación institucional, bebidas y atención a la comunidad de aprendices,
        instructores y personal administrativo del Centro Agroturístico.
      </div>

      <div class="row q-gutter-sm q-mt-md">
        <div class="header-chip">
          <q-icon name="location_on" size="14px" class="q-mr-xs" />
          Sede San Gil • Cafetería Principal
        </div>
        <div class="header-chip">
          <q-icon name="storefront" size="14px" class="q-mr-xs" />
          Servicio de Alimentación y Refrigerios
        </div>
        <div class="header-chip">
          <q-icon name="verified" size="14px" class="q-mr-xs" />
          Nutrición e Inocuidad Garantizada
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
              <div class="text-caption text-green-8 text-weight-bold">PORTAFOLIO NUTRICIONAL Y CAMPUS</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Atención Continua</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">¿Qué ofrecemos?</div>

            <div class="text-body2 text-grey-7" style="text-align: justify;">
              Venta y atención al cliente de comidas del SENA. Nuestro espacio está diseñado para
              brindar alimentación fresca, saludable y accesible a toda la comunidad educativa,
              promoviendo espacios de integración y bienestar diario.
            </div>

            <div class="text-caption text-green-8 text-weight-bold q-mt-lg q-mb-sm">
              MENÚ Y SERVICIOS
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
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Lunes a Sábado</q-chip>
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
                  <div class="q-mt-sm">
                    <div
                      v-for="turno in item.turnos"
                      :key="turno.hora"
                      class="row items-start q-gutter-x-xs q-mb-xs"
                    >
                      <q-icon name="circle" size="6px" color="green-6" class="q-mt-xs" />
                      <div>
                        <div class="text-caption text-grey-8 text-weight-medium">{{ turno.hora }}</div>
                        <div class="text-caption text-grey-6">{{ turno.detalle }}</div>
                      </div>
                    </div>
                  </div>
                  <div v-if="item.cerrado" class="text-caption text-red q-mt-xs">
                    {{ item.cerrado }}
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
                Encargada de Turno
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
              <div class="text-subtitle1 text-weight-bold text-grey-9">Coordinadora de Cafetería</div>
              <div class="text-body2 text-green-8 text-weight-medium">Ficha cocina: 341017</div>
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
                  <a href="mailto:lcarreno@sena.edu.com" class="text-green-8 text-weight-medium">
                    lcarreno@sena.edu.com
                  </a>
                </div>
              </div>

              <div class="row items-center">
                <div class="icon-badge bg-green-1 text-green-8 q-mr-sm">
                  <q-icon name="phone_iphone" size="16px" />
                </div>
                <div class="col">
                  <div class="text-caption text-grey-6">Línea móvil</div>
                  <div class="text-weight-bold text-grey-9">322 303 8451</div>
                </div>
                <q-btn flat dense no-caps color="green-8" label="Llamar" href="tel:3223038451" />
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-btn
                unelevated
                no-caps
                color="green-8"
                icon="call"
                label="Contactar a Cafetería"
                class="full-width contact-btn"
                href="tel:3223038451"
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
const fotoEncargada = '/necesarioarchivos/encargadacafeteria.jpg'

const servicios = [
  {
    title: 'Menú del Día y Almuerzos',
    desc: 'Platos balanceados con proteína, opciones vegetarianas, carbohidratos, ensaladas frescas y jugo natural.',
    icon: 'restaurant',
    bg: 'bg-green-1',
    color: 'text-green-8'
  },
  {
    title: 'Desayunos y Refrigerios',
    desc: 'Empanadas horneadas, sandwiches, panadería recién elaborada, lácteos y porciones de frutas de temporada.',
    icon: 'bakery_dining',
    bg: 'bg-orange-1',
    color: 'text-orange-9'
  },
  {
    title: 'Bebidas y Café de Origen',
    desc: 'Café santandereano tradicional, bebidas aromáticas de fruta, jugos en agua o leche y gaseosas.',
    icon: 'local_cafe',
    bg: 'bg-teal-1',
    color: 'text-teal-8'
  },
  {
    title: 'Eventos y Refrigerios Ficha',
    desc: 'Atención previa a jornadas pedagógicas, eventos institucionales, talleres y catering para instructores.',
    icon: 'event',
    bg: 'bg-blue-1',
    color: 'text-blue-8'
  },
]

const horarios = [
  {
    title: 'Lunes a viernes',
    icon: 'calendar_month',
    bg: 'bg-green-1',
    color: 'text-green-8',
    tag: '3 Franjas',
    tagClass: 'bg-green-1 text-green-8',
    turnos: [
      { hora: '7:00 am – 12:00 pm', detalle: 'Desayunos y café' },
      { hora: '1:00 pm – 5:30 pm', detalle: 'Almuerzos y tarde' },
      { hora: '7:00 pm – 9:30 pm', detalle: 'Servicio nocturno' },
    ]
  },
  {
    title: 'Sábados',
    icon: 'event',
    bg: 'bg-orange-1',
    color: 'text-orange-9',
    tag: 'Jornada Mañana',
    tagClass: 'bg-orange-1 text-orange-9',
    turnos: [
      { hora: '7:30 am – 12:00 pm', detalle: 'Servicio continuo para fichas sabatinas, cursos especiales y grupos formativos.' },
    ],
    cerrado: 'Domingos y Festivos: Cerrado'
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