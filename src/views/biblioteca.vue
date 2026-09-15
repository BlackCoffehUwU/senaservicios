<template>
  <q-page class="bg-grey-2">

    <!-- Portada -->
    <div class="cover-banner q-pa-lg">
      <q-icon name="menu_book" size="20px" color="green-3" class="q-mb-sm" />
      <div class="text-h4 text-white text-weight-bold">Servicio de Biblioteca</div>
      <div class="text-body2 text-green-2 q-mt-xs" style="max-width: 640px;">
        Servicios de consulta bibliográfica, investigación técnica, acceso a tecnologías y recursos
        de apoyo al aprendizaje para aprendices, instructores y personal administrativo del Centro Agroturístico.
      </div>

      <div class="row q-gutter-sm q-mt-md">
        <div class="header-chip">
          <q-icon name="location_on" size="14px" class="q-mr-xs" />
          Sede San Gil • Bloque Principal
        </div>
        <div class="header-chip">
          <q-icon name="wifi" size="14px" class="q-mr-xs" />
          Conectividad WiFi & Equipos TIC
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
              <div class="text-caption text-green-8 text-weight-bold">PORTAFOLIO BIBLIOGRÁFICO</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Atención diaria</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">¿Qué ofrecemos?</div>
            <div class="text-body2 text-grey-7 q-mb-md">
              Nuestra biblioteca institucional provee acceso integral al conocimiento, soporte pedagógico
              para proyectos productivos y formación técnica especializada.
            </div>

            <div class="row q-col-gutter-sm">
              <div v-for="item in servicios" :key="item.label" class="col-12 col-sm-6">
                <div class="offer-item row no-wrap items-start q-pa-sm">
                  <div class="icon-badge" :class="[item.bg, item.color]">
                    <q-icon :name="item.icon" size="16px" />
                  </div>
                  <div class="text-subtitle2 text-weight-bold text-grey-9 q-ml-sm offer-text">{{ item.label }}</div>
                </div>
              </div>
            </div>
          </q-card>

          <!-- Horarios -->
          <q-card flat class="info-card q-pa-lg q-mt-md">
            <div class="row items-center justify-between q-mb-xs">
              <div class="text-caption text-green-8 text-weight-bold">DISPONIBILIDAD EN SEDE</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Jornada continua</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">Horarios de atención</div>

            <div class="row q-col-gutter-sm q-mb-md">
              <div class="col-12 col-sm-6">
                <div class="schedule-box schedule-morning q-pa-sm">
                  <div class="row items-center q-gutter-x-sm">
                    <div class="icon-badge bg-orange-6 text-white">
                      <q-icon name="wb_sunny" size="16px" />
                    </div>
                    <div class="text-caption text-weight-bold text-orange-9">HORARIO GENERAL</div>
                  </div>
                  <div class="text-subtitle1 text-weight-bold text-grey-9 q-mt-sm">7:00 am – 10:00 pm</div>
                  <div class="text-caption text-grey-6">
                    Atención sin interrupciones durante el día.
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="schedule-box schedule-days q-pa-sm">
                  <div class="row items-center q-gutter-x-sm">
                    <div class="icon-badge bg-green-7 text-white">
                      <q-icon name="event" size="16px" />
                    </div>
                    <div class="text-caption text-weight-bold text-green-9">DÍAS DE SERVICIO</div>
                  </div>
                  <div class="text-subtitle1 text-weight-bold text-grey-9 q-mt-sm">Lunes a viernes</div>
                  <div class="text-caption text-grey-6">
                    Sábados según programación académica.
                  </div>
                </div>
              </div>
            </div>

            <q-separator class="q-mb-sm" />

            <div class="row items-start q-gutter-x-sm">
              <q-icon name="info" size="16px" color="green-6" class="q-mt-xs" />
              <div class="text-caption text-grey-6">
                <span class="text-weight-bold text-grey-8">Nota de servicio:</span>
                El préstamo y entrega de equipos de cómputo y salas de trabajo colaborativo
                se realiza hasta las 9:30 pm.
              </div>
            </div>
          </q-card>

        </div>

        <!-- Columna derecha: encargada -->
        <div class="col-12 col-md-4">
          <q-card flat class="info-card overflow-hidden">

            <div class="staff-cover q-pa-md relative-position">
              <q-chip dense size="sm" class="bg-green-8 text-white staff-badge">
                Bibliotecaria de turno
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
              <div class="text-subtitle1 text-weight-bold text-grey-9">Yudith Milagros Martínez Bautista</div>
              <div class="text-body2 text-green-8 text-weight-medium">Bibliotecaria</div>
              <div class="text-caption text-grey-5">Bienestar al Aprendiz • Sede San Gil</div>
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
                  <a href="mailto:ymmartinez@sena.edu.co" class="text-green-8 text-weight-medium">
                    ymmartinez@sena.edu.co
                  </a>
                </div>
              </div>

              <div class="row items-center">
                <div class="icon-badge bg-green-1 text-green-8 q-mr-sm">
                  <q-icon name="phone_iphone" size="16px" />
                </div>
                <div class="col">
                  <div class="text-caption text-grey-6">Línea móvil / WhatsApp</div>
                  <div class="text-weight-bold text-grey-9">312 584 8032</div>
                </div>
                <q-btn flat dense no-caps color="green-8" label="Llamar" href="tel:3125848032" />
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-btn
                unelevated
                no-caps
                color="green-8"
                icon="call"
                label="Contactar a Encargada"
                class="full-width contact-btn"
                href="tel:3125848032"
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
const fotoEncargada = '/necesarioarchivos/encargadabiblioteca.jpg'

const servicios = [
  { label: 'Consultas en sala', icon: 'menu_book', bg: 'bg-teal-1', color: 'text-teal-8' },
  { label: 'Préstamos a domicilio', icon: 'home', bg: 'bg-blue-1', color: 'text-blue-8' },
  { label: 'Préstamo interbibliotecario (PIP)', icon: 'swap_horiz', bg: 'bg-purple-1', color: 'text-purple-8' },
  { label: 'Talleres de lectura', icon: 'groups', bg: 'bg-orange-1', color: 'text-orange-9' },
  { label: 'Capacitaciones', icon: 'inventory_2', bg: 'bg-teal-1', color: 'text-teal-8' },
  { label: 'Acceso a TIC', icon: 'computer', bg: 'bg-green-1', color: 'text-green-8' },
  { label: 'Asesorías en búsqueda de información', icon: 'search', bg: 'bg-blue-1', color: 'text-blue-8' },
  { label: 'Uso adecuado del catálogo bibliográfico', icon: 'import_contacts', bg: 'bg-purple-1', color: 'text-purple-8' },
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

.schedule-box {
  border-radius: 14px;
}

.schedule-morning {
  background: #fff4e0;
}

.schedule-days {
  background: #e7f4e8;
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