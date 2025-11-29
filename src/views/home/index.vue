<script setup lang="ts">
// Home page
import Header from '@/components/layouts/Header/index.vue';
import Navigation from '@components/layouts/Navigation/index.vue';
import Banner from './components/Banner/index.vue';
import Wins from './components/Wins/index.vue';
import Popular from './components/Popular/index.vue';
import Catalog from './components/Catalog/index.vue';
import Studios from './components/Studios/index.vue';
import Recently from './components/Recently/index.vue';
import Info from './components/Info/index.vue';
</script>

<template>
  <Header />
  <Banner />
  <Wins />
  <Popular />
  <Catalog />
  <Studios />
  <Recently />
  <Info />
  <Navigation />
</template>
