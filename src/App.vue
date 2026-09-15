<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-grey-9">
      <q-toolbar class="q-py-sm">
        <q-btn dense flat round icon="menu" color="grey-8" @click="toggleLeftDrawer" class="q-mr-sm" />

        <q-avatar rounded size="40px" class="bg-white q-mr-sm">
          <img src="https://oficinavirtualderadicacion.sena.edu.co/oficinavirtual/Resources/logoSenaNaranja.png" alt="Logo SENA">
        </q-avatar>

        <div>
          <div class="row items-center q-gutter-x-xs">
            <span class="text-subtitle1 text-weight-bold">SENA</span>
            <q-chip dense class="bg-green-1 text-green-8 text-weight-medium" style="font-size: 10px;">
              Sede Principal San Gil
            </q-chip>
          </div>
          <div class="text-caption text-grey-8">Centro Agroturístico</div>
          <div class="text-grey-5" style="font-size: 10px;">Regional Santander</div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered class="bg-grey-1">
      <div class="q-pa-md">

        <div class="row items-center justify-between q-mb-md">
          <div class="text-h6 text-weight-bold text-green-9">Servicios</div>
          <div class="text-caption text-grey-6">DIRECTORIO</div>
        </div>

        <q-list class="q-gutter-y-sm">
          <q-item
            v-for="item in menuDrawer"
            :key="item.to"
            clickable
            v-ripple
            :to="item.to"
            class="rounded-borders"
            :class="{ 'bg-green-1': $route.path === item.to }"
          >
            <q-item-section avatar>
              <q-avatar
                size="32px"
                :class="$route.path === item.to ? 'bg-green-6 text-white' : 'bg-grey-3 text-green-8'"
              >
                <q-icon :name="item.icon" size="18px" />
              </q-avatar>
            </q-item-section>
            <q-item-section :class="$route.path === item.to ? 'text-green-9 text-weight-medium' : ''">
              {{ item.label }}
            </q-item-section>
            <q-item-section side>
              <q-icon v-if="$route.path === item.to" name="circle" size="8px" color="green-6" />
              <q-icon v-else name="chevron_right" color="grey-5" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view v-if="$route.path !== '/'" />

      <q-page v-else class="bg-grey-2">

        <div class="hero-banner q-py-lg q-px-md text-center text-white">
          <div class="hero-badge">
            <span class="dot"></span>
            Campus Tecnológico y de Innovación Agropecuaria
          </div>
          <div class="text-h4 text-weight-bold q-mt-sm">Bienvenido al Centro Agroturístico SENA</div>
          <div class="text-subtitle2 text-green-2 q-mt-xs">
            Selecciona un servicio o dependencia para consultar turnos, trámites,<br>
            canales de atención y ubicación dentro del campus.
          </div>
        </div>

        <div class="content-wrapper q-mx-auto q-px-md">

          <div class="q-pt-md">
            <div class="text-h6 text-weight-bold text-grey-9">Servicios</div>
            <q-separator class="q-my-sm" />
          </div>

          <div class="row q-col-gutter-md q-pb-lg">
            <div
              v-for="item in servicios"
              :key="item.to"
              class="col-12 col-sm-6 col-md-4"
            >
              <q-card flat bordered class="service-card" clickable v-ripple @click="$router.push(item.to)">
                <div class="img-wrap">
                  <img :src="item.img" :alt="item.label">
                  <div class="img-overlay"></div>
                  <div class="img-caption row items-center">
                    <q-avatar square size="44px" class="icon-badge">
                      <q-icon :name="item.icon" size="22px" color="green-8" />
                    </q-avatar>
                    <div class="text-h6 text-white text-weight-bold q-ml-sm">{{ item.label }}</div>
                  </div>
                </div>
                <q-card-section class="q-pt-md q-pb-sm">
                  <div class="text-body2 text-grey-8">{{ item.desc }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="q-pt-sm">
                  <q-chip
                    v-for="tag in item.tags"
                    :key="tag"
                    dense
                    size="sm"
                    outline
                    color="blue-8"
                    class="q-mr-xs text-weight-medium tag-chip"
                  >
                    {{ tag }}
                  </q-chip>
                </q-card-section>
              </q-card>
            </div>
          </div>

        </div>

      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const servicios = [
  {
    label: 'Enfermería',
    to: '/enfermeria',
    img: '/necesarioarchivos/enfermeria.jpg',
    icon: 'medical_services',
    desc: 'Atención médica inicial, primeros auxilios y salud preventiva.',
    tags: ['Atención Inmediata', 'Botiquín Oficial']
  },
  {
    label: 'Biblioteca',
    to: '/biblioteca',
    img: '/necesarioarchivos/biblioteca.jpg',
    icon: 'menu_book',
    desc: 'Préstamo de libros técnicos, bases digitales y salas de cómputo.',
    tags: ['Bases de datos', 'WiFi aprendices']
  },
  {
    label: 'Bienestar al Aprendiz',
    to: '/bienestar',
    img: '/necesarioarchivos/bienestaralaprendiz.jpg',
    icon: 'favorite',
    desc: 'Acompañamiento psicológico, apoyos socioeconómicos, entre otros.',
    tags: ['Apoyos económicos', 'Psicología']
  },
  {
    label: 'Cafetería',
    to: '/cafeteria',
    img: '/necesarioarchivos/cafeteria.jpg',
    icon: 'restaurant',
    desc: 'Alimentación balanceada, refrigerios y café institucional.',
    tags: ['Almuerzo del día', 'Snacks saludables']
  },
  {
    label: 'Coordinación Académica',
    to: '/coordinacion',
    img: '/necesarioarchivos/coordinacion.jpg',
    icon: 'school',
    desc: 'Gestión de matrículas, notas, certificaciones y novedades.',
    tags: ['Trámites curriculares', 'Certificaciones']
  },
  {
    label: 'Acerca de',
    to: '/acercade',
    img: 'https://www.vanguardia.com/resizer/v2/balancepositivodelcentroagroturisticosenaen2015vl341343mg19630426jpg-GCP2TL3D3NGE7PDG6QBWGNBTNI.jpg?auth=8e3667d3defb6aa84db70e4cb644a8d01790637dd3ccb140eb767927d2a2c1e5&smart=true&width=1200&height=800&quality=70',
    icon: 'info',
    desc: 'Más información sobre el Centro Agroturístico SENA, su historia y equipo desarrollador.',
    tags: ['Misión institucional', 'Reglamento aprendiz']
  },
]

const menuDrawer = [
  { label: 'Inicio', to: '/', icon: 'home' },
  ...servicios
]
</script>

<style scoped>
.hero-banner {
  background-color: #0f3d1f;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 22px 22px;
  padding-top: 56px;
  padding-bottom: 56px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 12px;
}

.hero-badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #a5d6a7;
  display: inline-block;
}

.content-wrapper {
  max-width: 1100px;
}

.service-card {
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.img-wrap {
  position: relative;
  height: 190px;
  background: #d0d0d0;
  overflow: hidden;
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.15) 55%, transparent 80%);
}

.img-caption {
  position: absolute;
  left: 16px;
  bottom: 16px;
  right: 16px;
}

.icon-badge {
  background: white;
  border-radius: 12px;
}

.tag-chip {
  background: #eef2ff;
  border: none;
}
</style>