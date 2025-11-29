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
        <a
          :class="[styles.link, styles.underline]"
          href="#"
        >
          Privacy Policy Terms & Conditions
        </a>
        v1.2.0
      </p>

      <p :class="[styles.text, 'text-body-bold']">
        Support:
        <a :class="styles.link" href="#">
          support@hotbit.gg
        </a>
        <br />
        <a :class="styles.link" href="#">
          @HotbitSupportBot
        </a>
      </p>

      <a
        :class="[
          'text-body-bold',
          styles.link,
          styles.underline,
          styles.gambling,
        ]"
        href="#"
      >
        <Plus18 :class="styles.icon" />
        Responsible Gambling
      </a>
    </div>
  </Container>
</template>
