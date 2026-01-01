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
        <button :class="[styles.link, styles.underline]" to="#">
          Privacy Policy Terms & Conditions
        </button>
        v1.2.0
      </p>

      <p :class="[styles.text, 'text-body-bold']">
        Support:
        <button :class="styles.link" to="#">support@hotbit.gg</button>
        <br />
        <button :class="styles.link" to="#">@HotbitSupportBot</button>
      </p>

      <button :class="['text-body-bold', styles.link, styles.underline, styles.gambling]" to="#">
        <Plus18 :class="styles.icon" />
        Responsible Gambling
      </button>
    </div>
  </Container>
</template>
