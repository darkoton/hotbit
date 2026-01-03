<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';

import Star from '@components/icons/Star.vue';
import ArrowDown from '@components/icons/ArrowDown.vue';
import Cup from '@components/icons/Cup.vue';
import SearchZoomIn from '@components/icons/SearchZoomIn.vue';
import ArrowRight from '@components/icons/ArrowRight.vue';
import BTC from '@components/tokens/BTC.vue';

import ModalDown from '../ModalDown.vue';
import Button from '@components/ui/Button/index.vue';
import Game from '@components/ui/Game/index.vue';
import Progress from '@components/ui/Progress/index.vue';
import Copy from '@components/ui/Copy/index.vue';
import Avatar from '@components/ui/Avatar.vue';
import Level from '@components/ui/Level/index.vue';

import Heart from '@components/emojis/Heart.vue';
import MoneyFace from '@components/emojis/MoneyFace.vue';
import Fire from '@components/emojis/Fire.vue';

import Logo from '@assets/imgs/logo.png';

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
    <div :class="styles.bet">
      <Copy
        :class="styles.id"
        before="BET ID"
        text="123456789"
      />

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

      <div :class="styles.player">
        <div :class="styles.playerTop">
          <div :class="styles.user">
            <Avatar
              size="49px"
              src="/imgs/avatar.png"
            />
            <div :class="styles.userInfo">
              <span
                :class="[
                  styles.userName,
                  'text-body-bold',
                ]"
              >
                Lucknload
              </span>
              <span
                :class="[
                  styles.userLevel,
                  'text-body',
                ]"
              >
                <span class="text-grey-light"
                  >Level</span
                >
                <Level>3</Level>
              </span>

              <Progress :size="5" value="33" />
            </div>
          </div>
          <div :class="styles.playerAchievs">
            <div
              :class="[
                styles.playerAchiev,
                styles.active,
              ]"
            >
              <Cup />
            </div>

            <div :class="styles.playerAchiev">
              <Cup />
            </div>

            <div :class="styles.playerAchiev">
              <Cup />
            </div>
          </div>
        </div>
        <div :class="styles.playerTags">
          <div :class="styles.playerTag">
            <span
              :class="[
                styles.playerTagTitle,
                'text-body-bold',
              ]"
            >
              95,6%
            </span>
            <span
              class="text-sub-body text-grey-light"
              >RTP</span
            >
          </div>

          <div :class="styles.playerTag">
            <span
              :class="[
                styles.playerTagTitle,
                'text-body-bold',
              ]"
            >
              12,455
            </span>
            <span
              class="text-sub-body text-grey-light"
              >XP</span
            >
          </div>

          <div :class="styles.playerTag">
            <span
              :class="[
                styles.playerTagTitle,
                'text-body-bold',
              ]"
            >
              $5234.11 <BTC />
            </span>
            <span
              class="text-sub-body text-grey-light"
              >Total bet</span
            >
          </div>
        </div>
      </div>

      <div :class="styles.player">
        <div :class="styles.playerTop">
          <div :class="styles.user">
            <Avatar size="49px" incognito />
            <div :class="styles.userInfo">
              <span
                :class="[
                  styles.userName,
                  'text-body-bold',
                ]"
              >
                Hidden
              </span>
              <span
                :class="[
                  styles.userLevel,
                  'text-body',
                ]"
              >
                <span class="text-grey-light"
                  >Level</span
                >
                <Level>?</Level>
              </span>

              <Progress :size="5" value="33" />
            </div>
          </div>
          <div :class="styles.playerAchievs">
            <div
              :class="[
                styles.playerAchiev,
                styles.active,
              ]"
            >
              <Cup />
            </div>

            <div :class="styles.playerAchiev">
              <Cup />
            </div>

            <div :class="styles.playerAchiev">
              <Cup />
            </div>
          </div>
        </div>
        <div :class="styles.playerTags">
          <div :class="styles.playerTag">
            <span
              :class="[
                styles.playerTagTitle,
                'text-body-bold text-grey-light',
              ]"
            >
              Hidden
            </span>
            <span
              class="text-sub-body text-grey-light"
              >RTP</span
            >
          </div>

          <div :class="styles.playerTag">
            <span
              :class="[
                styles.playerTagTitle,
                'text-body-bold text-grey-light',
              ]"
            >
              Hidden
            </span>
            <span
              class="text-sub-body text-grey-light"
              >XP</span
            >
          </div>

          <div :class="styles.playerTag">
            <span
              :class="[
                styles.playerTagTitle,
                'text-body-bold text-grey-light',
              ]"
            >
              Hidden
            </span>
            <span
              class="text-sub-body text-grey-light"
              >Total bet</span
            >
          </div>
        </div>
      </div>

      <div :class="styles.partition">
        <img
          :class="styles.logo"
          :src="Logo"
          alt="Logo"
        />
      </div>

      <div :class="styles.data">
        <div :class="styles.dataItem">
          <span class="text-body text-grey-light">
            Bet
          </span>
          <span
            :class="[
              styles.dataItemValue,
              'text-body-bold text-white',
            ]"
          >
            $1.00
            <BTC />
          </span>
        </div>

        <div :class="styles.dataItem">
          <span class="text-body text-grey-light">
            Multiplier
          </span>
          <span
            :class="[
              styles.dataItemValue,
              'text-body-bold text-white',
            ]"
          >
            5,00x
          </span>
        </div>

        <div :class="styles.dataItem">
          <span class="text-body text-grey-light">
            Payout
          </span>
          <span
            :class="[
              styles.dataItemValue,
              'text-body-bold text-green',
            ]"
          >
            $5,000.00
            <BTC />
          </span>
        </div>
      </div>

      <div :class="styles.game">
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

            <div :class="styles.cardAchievs">
              <div
                :class="[
                  styles.cardAchiev,
                  styles.active,
                ]"
              >
                <Cup />
              </div>

              <div :class="styles.cardAchiev">
                <Cup />
              </div>

              <div :class="styles.cardAchiev">
                <Cup />
              </div>
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
          <div :class="styles.infoMain">
            <div :class="styles.infoAchive">
              <div :class="styles.infoAchiveTop">
                <div
                  :class="styles.infoAchiveCup"
                >
                  <Cup />
                </div>
                <div
                  :class="styles.infoAchiveInfo"
                >
                  <span class="text-body-bold">
                    MEGA HIT
                  </span>

                  <span class="text-sub-body">
                    Hit 5000x on $1.00 bet on Le
                    Bandit
                  </span>
                </div>
              </div>

              <p
                :class="[
                  styles.infoAchiveTotal,
                  'text-sub-body text-grey-light',
                ]"
              >
                0,001% f total playbase has this
                Achievement
              </p>

              <Button
                :class="styles.infoAchiveReplay"
                variant="black-2"
              >
                Watch Replay <ArrowRight
              /></Button>
            </div>

            <div :class="styles.infoReacts">
              <span class="text-body-bold"
                >React on this win:</span
              >

              <div
                :class="styles.infoReactsCount"
              >
                <span
                  :class="[
                    styles.infoReact,
                    'text-body text-bg',
                  ]"
                >
                  <Heart />
                  <span>673</span>
                </span>
                <span
                  :class="[
                    styles.infoReact,
                    'text-body text-bg',
                  ]"
                >
                  <MoneyFace />
                  <span>123</span>
                </span>
                <span
                  :class="[
                    styles.infoReact,
                    'text-body text-bg',
                  ]"
                >
                  <Fire />
                  <span>727</span>
                </span>
              </div>
            </div>

            <div :class="styles.infoAchives">
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
