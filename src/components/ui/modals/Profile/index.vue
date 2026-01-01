<script setup lang="ts">
import styles from './style.module.scss';

import ModalView from '../ModalView.vue';
import Level from '@components/ui/Level/index.vue';
import Progress from '@components/ui/Progress/index.vue';

import Avatar from '@components/ui/Avatar.vue';
import Cup from '@components/icons/Cup.vue';
import Logo from '@components/icons/Logo.vue';
import ArrowDown from '@components/icons/ArrowDown.vue';
import Wallet from '@components/icons/Wallet.vue';
import Setting from '@components/icons/Setting.vue';
import EmptyWalletChange from '@components/icons/EmptyWalletChange.vue';
import People from '@components/icons/People.vue';
import Message from '@components/icons/Message.vue';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const items: {
  game: string;
  message: string;
  achieve: boolean;
}[] = [
  {
    game: '/imgs/games/rip.png',
    message:
      'FishaTOM and 5 others target folloving you',
    achieve: false,
  },
  {
    game: '/imgs/games/rip.png',
    message:
      'Lucky77 and 3 others reacted on your Achievement',
    achieve: true,
  },
  {
    game: '/imgs/games/rip.png',
    message:
      'FishaTOM and 5 others target folloving you',
    achieve: false,
  },
  {
    game: '/imgs/games/rip.png',
    message:
      'Lucky77 and 3 others reacted on your Achievement',
    achieve: true,
  },
  {
    game: '/imgs/games/rip.png',
    message:
      'FishaTOM and 5 others target folloving you',
    achieve: false,
  },
  {
    game: '/imgs/games/rip.png',
    message:
      'Lucky77 and 3 others reacted on your Achievement',
    achieve: true,
  },
  {
    game: '/imgs/games/rip.png',
    message:
      'Lucky77 and 3 others reacted on your Achievement',
    achieve: true,
  },
  {
    game: '/imgs/games/rip.png',
    message:
      'Lucky77 and 3 others reacted on your Achievement',
    achieve: true,
  },
  {
    game: '/imgs/games/rip.png',
    message:
      'Lucky77 and 3 others reacted on your Achievement',
    achieve: true,
  },
];
</script>

<template>
  <ModalView
    :show="show"
    :open-button="openButton"
  >
    <div :class="styles.body">
      <div :class="styles.top">
        <div :class="styles.user">
          <div :class="styles.userLeft">
            <Avatar
              size="90px"
              src="/imgs/avatar.png"
            />

            <div :class="styles.userInfo">
              <span class="text-body-bold">
                LuckyKat777
              </span>

              <span :class="styles.userLevel">
                <span class="text-body-bold">
                  Level
                </span>
                <Level> 3 </Level>
              </span>

              <div :class="styles.userGames">
                <div :class="styles.userGame">
                  <div
                    :class="styles.userGameIcon"
                  >
                    <img
                      src="/imgs/games/rip.png"
                      alt="Game"
                    />
                  </div>

                  <span
                    :class="[
                      'text-notification',
                      styles.userGameScore,
                      styles.visible,
                    ]"
                  >
                    543X
                  </span>
                </div>

                <div :class="styles.userGame">
                  <div
                    :class="styles.userGameIcon"
                  >
                    <Cup />
                  </div>

                  <span
                    :class="[
                      'text-notification',
                      styles.userGameScore,
                    ]"
                  >
                    ???
                  </span>
                </div>

                <div :class="styles.userGame">
                  <div
                    :class="styles.userGameIcon"
                  >
                    <Cup />
                  </div>

                  <span
                    :class="[
                      'text-notification',
                      styles.userGameScore,
                    ]"
                  >
                    ???
                  </span>
                </div>
              </div>
            </div>

            <div :class="styles.tags">
              <span
                :class="[
                  styles.tag,
                  styles.vip,
                  'text-h3',
                ]"
              >
                VIP
              </span>

              <span
                :class="[
                  styles.tag,
                  styles.score,
                  'text-body-bold',
                ]"
              >
                2,432

                <div :class="styles.logo">
                  <Logo />
                </div>
              </span>
            </div>
          </div>
        </div>

        <div :class="styles.progress">
          <div
            :class="[
              'text-body',
              styles.progressTop,
            ]"
          >
            <div :class="styles.progressXP">
              55XP
            </div>

            <div :class="styles.progressRight">
              <div
                :class="[
                  'text-body',
                  styles.progressTop,
                ]"
              >
                1000 XP
              </div>
              <Level disabled> 4 </Level>
            </div>
          </div>

          <Progress :value="5.5" />
        </div>
      </div>

      <div :class="styles.list">
        <div :class="styles.listTop">
          <span
            :class="[
              'text-sub-body',
              styles.listDate,
            ]"
            >Today</span
          >
          <span
            :class="[
              'text-sub-body',
              styles.listTitle,
            ]"
            >History</span
          >
        </div>

        <ul :class="styles.listItems">
          <li
            :class="[
              styles.listItem,
              item.achieve && styles.achieve,
            ]"
            v-for="item in items"
            :key="item.message"
          >
            <div :class="styles.listItemLeft">
              <img
                :class="styles.listItemGame"
                :src="item.game"
                alt="Game"
              />
              <p class="text-sub-body">
                {{ item.message }}
              </p>
            </div>

            <button
              v-if="item.achieve"
              :class="[
                'text-body-bold',
                styles.listItemButton,
              ]"
            >
              View
            </button>
          </li>

          <button :class="styles.listMore">
            <ArrowDown />
          </button>
        </ul>
      </div>

      <div :class="styles.actions">
        <div :class="styles.actionsItems">
          <div :class="styles.actionsCol">
            <button
              :class="[
                'text-body-bold',
                styles.actionsItem,
              ]"
            >
              <Wallet
                :class="styles.actionsIcon"
              />
              <span>Wallet</span>
            </button>

            <button
              :class="[
                'text-body-bold',
                styles.actionsItem,
              ]"
            >
              <Setting
                :class="styles.actionsIcon"
              />
              <span>Setting</span>
            </button>
          </div>

          <div :class="styles.actionsCol">
            <button
              :class="[
                'text-body-bold',
                styles.actionsItem,
              ]"
            >
              <EmptyWalletChange
                :class="styles.actionsIcon"
              />
              <span>Transactions</span>
            </button>

            <button
              :class="[
                'text-body-bold',
                styles.actionsItem,
              ]"
            >
              <People
                :class="styles.actionsIcon"
              />
              <span>Affiliates</span>
            </button>
          </div>
        </div>

        <button
          :class="[
            'text-body-bold',
            styles.actionsItem,
            styles.actionsSupport,
          ]"
        >
          <Message :class="styles.actionsIcon" />
          <span>Live Support</span>
        </button>
      </div>
    </div>
  </ModalView>
</template>
