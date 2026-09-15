<template>
  <q-page class="bg-grey-2">

    <!-- Portada -->
    <div class="cover-banner q-pa-lg">
      <q-chip dense size="sm" class="header-badge">
        <q-icon name="account_balance" size="14px" class="q-mr-xs" />
        Portal Institucional Campus San Gil
      </q-chip>
      <div class="text-h4 text-white text-weight-bold q-mt-sm">Acerca del Centro Agroturístico</div>
      <div class="text-body2 text-green-2 q-mt-xs" style="max-width: 640px;">
        Historia, marco institucional, ubicación y equipo de desarrollo de la plataforma digital
        del Centro Agroturístico SENA – San Gil.
      </div>

      <div class="row q-gutter-sm q-mt-md">
        <div class="header-chip">
          <q-icon name="location_on" size="14px" class="q-mr-xs" />
          Sede Principal • San Gil, Santander
        </div>
        <div class="header-chip">
          <q-icon name="gavel" size="14px" class="q-mr-xs" />
          Resolución 02428 de 2008
        </div>
        <div class="header-chip">
          <q-icon name="check_circle" size="14px" class="q-mr-xs" />
          Formación Laboral & Tecnológica
        </div>
      </div>
    </div>

    <div class="content-wrapper q-mx-auto q-pa-lg">
      <div class="row q-col-gutter-lg">

        <!-- Columna izquierda -->
        <div class="col-12 col-md-8">

          <!-- Identidad -->
          <q-card flat class="info-card q-pa-lg">
            <div class="row items-center justify-between q-mb-xs">
              <div class="text-caption text-green-8 text-weight-bold">IDENTIDAD • MARCO INSTITUCIONAL</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Reseña Histórica</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">
              Centro Agroturístico SENA – San Gil, sede principal
            </div>

            <div class="text-body2 text-grey-7" style="text-align: justify;">
              En 1997 fue creado el Centro Multisectorial de las Provincias Guanentina y Comunera,
              con sede en el municipio de San Gil, Santander, con el propósito de satisfacer las
              necesidades de formación del talento humano de las provincias Guanentina y Comunera
              en acciones de formación laboral, asesoría a empresas y servicios tecnológicos. En el
              año 2008, mediante Resolución 02428, fue cambiada la denominación del Centro, pasando
              a llamarse Centro Agroturístico.
            </div>
          </q-card>

          <!-- Ubicación y contacto -->
          <q-card flat class="info-card q-pa-lg q-mt-md">
            <div class="row items-center justify-between q-mb-xs">
              <div class="text-caption text-green-8 text-weight-bold">ATENCIÓN EN SEDE</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">San Gil, Santander</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">
              Sede Principal • Ubicación y Contacto
            </div>

            <div class="row q-col-gutter-sm">
              <div v-for="item in contacto" :key="item.title" class="col-12 col-sm-6">
                <div class="offer-item q-pa-sm">
                  <div class="row items-center no-wrap">
                    <div class="icon-badge" :class="[item.bg, item.color]">
                      <q-icon :name="item.icon" size="16px" />
                    </div>
                    <div class="text-caption text-green-8 text-weight-bold q-ml-sm offer-text">
                      {{ item.title }}
                    </div>
                  </div>
                  <div class="text-subtitle2 text-weight-bold text-grey-9 q-mt-xs">{{ item.valor }}</div>
                  <div class="text-caption text-grey-6">{{ item.desc }}</div>
                </div>
              </div>
            </div>

            <div class="row items-center justify-between q-mt-md">
              <div class="text-caption text-grey-7">
                <q-icon name="schedule" size="14px" color="green-8" class="q-mr-xs" />
                Horario administrativo: Lunes a viernes 8:00 am – 12:00 m / 2:00 pm – 6:00 pm
              </div>
              <q-chip dense size="sm" class="bg-green-1 text-green-8">Atención Presencial</q-chip>
            </div>
          </q-card>

        </div>

        <!-- Columna derecha: equipo desarrollador -->
        <div class="col-12 col-md-4">
          <q-card flat class="info-card overflow-hidden">

            <div class="staff-cover q-pa-md relative-position">
              <q-chip dense size="sm" class="bg-green-8 text-white staff-badge">
                Equipo desarrollador
              </q-chip>

              <div class="row items-center">
                <div class="relative-position">
                  <q-avatar size="60px" class="staff-avatar">
                    <img :src="fotoDesarrollador" alt="Foto del desarrollador">
                  </q-avatar>
                  <q-icon name="check_circle" color="green-5" size="16px" class="staff-status" />
                </div>
              </div>
            </div>

            <q-card-section class="q-pt-md">
              <div class="text-subtitle1 text-weight-bold text-green-8">Andrés Jesús Calderón Núñez</div>
              <div class="text-body2 text-grey-8 text-weight-medium">Desarrollador de esta página web</div>
              <div class="text-caption text-grey-5 q-mt-xs">
                <q-icon name="code" size="12px" class="q-mr-xs" />
                Tecnología y Gestión de Sistemas de Información
              </div>
            </q-card-section>

          </q-card>
        </div>

      </div>
    </div>

  </q-page>
</template>

<script setup>
// Reemplaza estas rutas por las imágenes reales que tengas en public/necesarioarchivos/
const fotoDesarrollador = 'https://previews.123rf.com/images/redlinevector/redlinevector1903/redlinevector190300784/119702484-curly-haired-guy-line-icon-young-man-cheerful-hipster-student-boy-concept-can-be-used-for.jpg'

const contacto = [
  {
    title: 'DIRECCIÓN FÍSICA',
    valor: 'Calle 22 N.° 9-82',
    desc: 'San Gil, Santander, Colombia',
    icon: 'location_on',
    bg: 'bg-green-1',
    color: 'text-green-8'
  },
  {
    title: 'TELÉFONO CONMUTADOR',
    valor: '(607) 724 8113',
    desc: 'Línea de atención institucional',
    icon: 'phone',
    bg: 'bg-teal-1',
    color: 'text-teal-8'
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
</style>