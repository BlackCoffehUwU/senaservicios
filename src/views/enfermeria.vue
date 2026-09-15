<template>
  <q-page class="bg-grey-2">

    <!-- Portada -->
    <div class="cover-banner q-pa-lg">
      <q-icon name="local_hospital" size="20px" color="green-3" class="q-mb-sm" />
      <div class="text-h4 text-white text-weight-bold">Servicio de Enfermería</div>
      <div class="text-body2 text-green-2 q-mt-xs" style="max-width: 620px;">
        Servicio de promoción y prevención de la salud, atención primaria y primeros auxilios
        para aprendices, instructores y personal administrativo del Centro Agroturístico.
      </div>
    </div>

    <div class="content-wrapper q-mx-auto q-pa-lg">
      <div class="row q-col-gutter-lg">

        <!-- Columna izquierda -->
        <div class="col-12 col-md-8">

          <!-- Qué ofrecemos -->
          <q-card flat class="info-card q-pa-lg">
            <div class="row items-center justify-between q-mb-xs">
              <div class="text-caption text-green-8 text-weight-bold">PORTAFOLIO MÉDICO</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Atención diaria</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">¿Qué ofrecemos?</div>
            <div class="text-body2 text-grey-7 q-mb-md">
              Aquí se ofrecen todos los servicios de promoción y prevención de enfermedades,
              así como atención básica en primeros auxilios.
            </div>

            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <div class="icon-badge bg-teal-1 text-teal-8">
                  <q-icon name="healing" size="18px" />
                </div>
                <div class="text-subtitle2 text-weight-bold text-grey-9 q-mt-sm">Primeros Auxilios</div>
                <div class="text-caption text-grey-6">
                  Curaciones, vendajes, estabilización primaria y manejo de traumatismos menores.
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="icon-badge bg-purple-1 text-purple-8">
                  <q-icon name="favorite" size="18px" />
                </div>
                <div class="text-subtitle2 text-weight-bold text-grey-9 q-mt-sm">Control de Signos Vitales</div>
                <div class="text-caption text-grey-6">
                  Tensión arterial, saturación, glucometría rápida y control de temperatura.
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="icon-badge bg-blue-1 text-blue-8">
                  <q-icon name="edit_note" size="18px" />
                </div>
                <div class="text-subtitle2 text-weight-bold text-grey-9 q-mt-sm">Jornadas y Prevención</div>
                <div class="text-caption text-grey-6">
                  Campañas periódicas de vacunación, salud visual y tamizajes preventivos.
                </div>
              </div>
            </div>
          </q-card>

          <!-- Horarios -->
          <q-card flat class="info-card q-pa-lg q-mt-md">
            <div class="row items-center justify-between q-mb-xs">
              <div class="text-caption text-green-8 text-weight-bold">DISPONIBILIDAD EN SEDE</div>
              <q-chip dense size="sm" class="bg-grey-2 text-grey-7">Jornada mixta</q-chip>
            </div>
            <div class="text-h6 text-grey-9 text-weight-bold q-mb-sm">Horarios de atención</div>

            <div class="row q-col-gutter-sm q-mb-md">
              <div class="col-12 col-sm-6">
                <div class="schedule-box schedule-morning q-pa-sm">
                  <div class="row items-center q-gutter-x-sm">
                    <div class="icon-badge bg-orange-6 text-white">
                      <q-icon name="wb_sunny" size="16px" />
                    </div>
                    <div class="text-caption text-weight-bold text-orange-9">JORNADA MAÑANA</div>
                  </div>
                  <div class="text-subtitle1 text-weight-bold text-grey-9 q-mt-sm">6:30 am – 10:30 am</div>
                  <div class="text-caption text-grey-6">
                    Apertura temprana para aprendices e instructores.
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="schedule-box schedule-evening q-pa-sm">
                  <div class="row items-center q-gutter-x-sm">
                    <div class="icon-badge bg-deep-purple-5 text-white">
                      <q-icon name="nights_stay" size="16px" />
                    </div>
                    <div class="text-caption text-weight-bold text-deep-purple-9">JORNADA TARDE / NOCHE</div>
                  </div>
                  <div class="text-subtitle1 text-weight-bold text-grey-9 q-mt-sm">4:00 pm – 8:00 pm</div>
                  <div class="text-caption text-grey-6">
                    Cobertura para jornadas vespertina y nocturna.
                  </div>
                </div>
              </div>
            </div>

            <q-separator class="q-mb-sm" />

            <div class="row items-center justify-between wrap">
              <div class="row items-center q-gutter-x-sm">
                <div class="icon-badge bg-green-1 text-green-8">
                  <q-icon name="event" size="16px" />
                </div>
                <div>
                  <span class="text-subtitle2 text-weight-bold text-grey-9">Días hábiles</span>
                  <span class="text-body2 text-grey-7"> Lunes a viernes</span>
                </div>
              </div>
              <div class="row items-center q-gutter-x-xs">
                <q-icon name="circle" size="8px" color="green-6" />
                <div class="text-caption text-grey-6">Fuera de horario, dirigirse a Brigadistas o Vigilancia</div>
              </div>
            </div>
          </q-card>

        </div>

        <!-- Columna derecha: encargada -->
        <div class="col-12 col-md-4">
          <q-card flat class="info-card overflow-hidden">

            <div class="staff-cover q-pa-md relative-position">
              <q-chip dense size="sm" class="bg-green-8 text-white staff-badge">
                Enfermera de turno
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
              <div class="text-subtitle1 text-weight-bold text-grey-9">María Fernanda Gómez Reyes</div>
              <div class="text-body2 text-green-8 text-weight-medium">Enfermera Profesional</div>
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
                  <div class="text-caption text-grey-6">Correo institucional / turno</div>
                  <a href="mailto:Mafecita1118@gmail.com" class="text-green-8 text-weight-medium">
                    Mafecita1118@gmail.com
                  </a>
                </div>
              </div>

              <div class="row items-center">
                <div class="icon-badge bg-green-1 text-green-8 q-mr-sm">
                  <q-icon name="phone_iphone" size="16px" />
                </div>
                <div class="col">
                  <div class="text-caption text-grey-6">Línea móvil / WhatsApp</div>
                  <div class="text-weight-bold text-grey-9">321 415 3995</div>
                </div>
                <q-btn flat dense no-caps color="green-8" label="Llamar" href="tel:3214153995" />
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-btn
                unelevated
                no-caps
                color="green-8"
                icon="call"
                label="Contactar a Enfermería"
                class="full-width contact-btn"
                href="tel:3214153995"
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
const fotoEncargada = '/necesarioarchivos/encargadaenfermeria.jpg'
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
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.schedule-box {
  border-radius: 14px;
}

.schedule-morning {
  background: #fff4e0;
}

.schedule-evening {
  background: #f1edfb;
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