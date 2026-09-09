<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-green-9 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="row items-center">
          <q-avatar class="q-mr-sm">
            <img src="https://bogota.gov.co/sites/default/files/inline-images/logosena.png">
          </q-avatar>
          Centro Agroturístico SENA
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered class="bg-grey-1">
      <div class="text-h5 q-pa-md text-green-9">Servicios</div>
      <q-list padding>
        <q-item
          v-for="item in menuDrawer"
          :key="item.to"
          clickable
          :to="item.to"
          class="q-mb-xs rounded-borders"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" color="green-8" />
          </q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-if="$route.path !== '/'" />

      <q-page v-else class="bg-grey-2">

        <div class="hero q-pa-xl text-center text-white">
          <div class="text-h4 text-weight-bold">Bienvenido al Centro Agroturístico SENA</div>
          <div class="text-subtitle1 q-mt-sm">Selecciona un servicio para continuar</div>
        </div>

        <div class="row q-col-gutter-lg justify-center q-pa-lg">
          <div
            v-for="item in servicios"
            :key="item.to"
            class="col-12 col-sm-6 col-md-4"
          >
            <q-card
              class="servicio-card rounded-borders shadow-3"
              :style="{ backgroundImage: `url(${item.img})` }"
              clickable
              v-ripple
              @click="$router.push(item.to)"
            >
              <div class="overlay flex flex-center column">
                <q-icon :name="item.icon" size="42px" color="white" />
                <div class="text-h6 text-white q-mt-sm">{{ item.label }}</div>
              </div>
            </q-card>
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
  { label: 'Enfermería', to: '/enfermeria', img: '/necesarioarchivos/enfermeria.jpg', icon: 'medical_services' },
  { label: 'Biblioteca', to: '/biblioteca', img: '/necesarioarchivos/biblioteca.jpg', icon: 'menu_book' },
  { label: 'Bienestar al Aprendiz', to: '/bienestar', img: '/necesarioarchivos/bienestaralaprendiz.jpg', icon: 'favorite' },
  { label: 'Cafetería', to: '/cafeteria', img: '/necesarioarchivos/cafeteria.jpg', icon: 'restaurant' },
  { label: 'Coordinación Académica', to: '/coordinacion', img: '/necesarioarchivos/coordinacion.jpg', icon: 'school' },
  { label: 'Acerca de', to: '/acercade', img: 'https://www.vanguardia.com/resizer/v2/balancepositivodelcentroagroturisticosenaen2015vl341343mg19630426jpg-GCP2TL3D3NGE7PDG6QBWGNBTNI.jpg?auth=8e3667d3defb6aa84db70e4cb644a8d01790637dd3ccb140eb767927d2a2c1e5&smart=true&width=1200&height=800&quality=70', icon: 'info' },
]

const menuDrawer = [
  { label: 'Inicio', to: '/', icon: 'home' },
  ...servicios
]
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #2e7d32, #66bb6a);
}

.servicio-card {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.servicio-card:hover {
  transform: scale(1.03);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15));
}
</style>