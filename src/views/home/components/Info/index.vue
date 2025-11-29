<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Plus18 from '@components/icons/18Plus.vue';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <p :class="[styles.text, 'text-body-bold']">
        18+ only | Play Responsibly | <br />
        <router-link
          :class="[styles.link, styles.underline]"
          to="#"
        >
          Privacy Policy Terms & Conditions
        </router-link>
        v1.2.0
      </p>

      <p :class="[styles.text, 'text-body-bold']">
        Support:
        <router-link :class="styles.link" to="#">
          support@hotbit.gg
        </router-link>
        <br />
        <router-link :class="styles.link" to="#">
          @HotbitSupportBot
        </router-link>
      </p>

      <router-link
        :class="[
          'text-body-bold',
          styles.link,
          styles.underline,
          styles.gambling,
        ]"
        to="#"
      >
        <Plus18 :class="styles.icon" />
        Responsible Gambling
      </router-link>
    </div>
  </Container>
</template>
