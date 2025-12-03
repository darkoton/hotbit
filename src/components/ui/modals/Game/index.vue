<script setup lang="ts">
import styles from './style.module.scss';
import Star from '@components/icons/Star.vue';
import ArrowDown from '@components/icons/ArrowDown.vue';
import Cup from '@components/icons/Cup.vue';
import SearchZoomIn from '@components/icons/SearchZoomIn.vue';
import ModalDown from '../ModalDown.vue';
import Button from '@components/ui/Button/index.vue';

import Game from '@components/ui/Game/index.vue';
import Progress from '@components/ui/Progress/index.vue';
import { ref } from 'vue';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const openOptions = ref<boolean>(false);
</script>

<template>
  <ModalDown
    :show
    :openButton
    @close="$emit('close')"
  >
    <div :class="styles.game">
      <div :class="styles.head">
        <div :class="styles.headLeft">
          <h3 class="title-section">
            Gates of Olympus
          </h3>
          <h4
            :class="[
              'text-body',
              styles.subtitle,
            ]"
          >
            Pragmatic Play
          </h4>
        </div>

        <button :class="styles.buttonStar">
          <Star />
        </button>
      </div>

      <div :class="styles.top">
        <div :class="styles.card">
          <div :class="styles.cardTop">
            <div :class="styles.cardImg">
              <img
                src="/imgs/games/gates-of-olympus.png"
                alt="Game"
              />

              <button :class="styles.cardZoom">
                <SearchZoomIn />
              </button>
            </div>
          </div>

          <span :class="styles.cardWin"
            >MAXWIN:
            <span class="text-accent">
              5 000x
            </span></span
          >
        </div>

        <div :class="styles.info">
          <div :class="styles.infoStats">
            <span class="text-body">
              <span class="text-grey-light"
                >RTP</span
              >
              95,6%
            </span>
            <span class="text-body">
              <span class="text-grey-light"
                >XP</span
              >
              12,455
            </span>
          </div>
          <div :class="styles.infoAchiev">
            <span
              :class="[
                'text-body',
                styles.infoAchievTitle,
              ]"
            >
              Achievements
            </span>

            <div :class="styles.infoCups">
              <span
                :class="[
                  styles.infoCup,
                  styles.active,
                ]"
                ><Cup
              /></span>
              <span :class="styles.infoCup"
                ><Cup
              /></span>
              <span :class="styles.infoCup"
                ><Cup
              /></span>
            </div>

            <div :class="styles.infoExpirience">
              <span class="text-body"
                >Speen 1,000</span
              >
              <span
                class="text-sub-body text-grey-light"
                >782/1,000</span
              >
            </div>

            <Progress
              :class="styles.infoProgress"
              value="40"
            />

            <button
              :class="[
                'text-body',
                styles.infoMore,
              ]"
            >
              All Achievements
              <ArrowDown />
            </button>
          </div>
          <button
            :class="[
              'text-body-bold',
              styles.infoSpoller,
              openOptions && styles.active,
            ]"
            @click="openOptions = !openOptions"
          >
            Game Info
            <ArrowDown />
          </button>
        </div>
      </div>

      <Transition>
        <div
          v-if="openOptions"
          :class="styles.options"
        >
          <div :class="styles.optionsGrid">
            <div :class="styles.option">
              <span
                class="text-body-bold text-accent"
                >Valatulity:
              </span>
              <span class="text-bold">Hight</span>
            </div>
            <div :class="styles.option">
              <span
                class="text-body-bold text-accent"
                >Max Win:
              </span>
              <span class="text-bold"
                >5,000x</span
              >
            </div>
            <div :class="styles.option">
              <span
                class="text-body-bold text-accent"
                >PTP:
              </span>
              <span class="text-bold">95,6%</span>
            </div>
            <div :class="styles.option">
              <span
                class="text-body-bold text-accent"
                >Mechanics:
              </span>
              <span class="text-bold"
                >Tumble</span
              >
            </div>
          </div>
          <div :class="styles.option">
            <span
              class="text-body-bold text-accent"
              >Description:
            </span>
            <span class="text-bold"
              >Borem ipsum dolor sit amet,
              conseetur adipiscing elit. Nunc
              vulputate libero et velit any
              interdum, ac aliquet odio mattis
              dolor.</span
            >
          </div>
        </div>
      </Transition>

      <div :class="styles.buttons">
        <Button :class="styles.button"
          >Real Play</Button
        >
        <Button
          :class="styles.button"
          variant="black"
          >Fun Play</Button
        >
      </div>

      <p class="text-sub-body text-grey-light">
        Games played in ‘Fun Play’ will not count
        towards any Achievement and you won’t get
        any Trophy!
      </p>
    </div>

    <div :class="styles.slots">
      <h3 class="text-h3">
        More games from Prafmatic Play
      </h3>

      <div :class="styles.games">
        <Game
          v-for="i in 3"
          :key="i"
          title="Outsourced"
          img="/imgs/games/outsourced.png"
          maxWin="5 000x"
        />
      </div>
    </div>
  </ModalDown>
</template>
