<!-- eslint-disable clean-timer/assign-timer-id -->
<script setup lang="ts">
import { List, ListItem, ListItemExpandable, Sections, Section, ListCard, Text } from '@/presentation/components'
import { onMounted, ref, onBeforeUnmount, watchEffect, watch } from 'vue'
import { useTelegram, useScroll, useLottie } from '@/application/services'
import { shortNumber } from '@/infra/utils/number'
import { useFriends } from '@/domain/services/useFriends'
import { type Friend } from '@/domain/entities'

const { showMainButton, hideMainButton, setButtonLoader, expand, getViewportHeight, vibrate } = useTelegram()
const { scrollTo } = useScroll()
const { animationData } = useLottie('simp')

const viewportHeight = ref(window.innerHeight)

const { friends } = useFriends()
</script>
<template>
  <div class="home-page">
    <Sections class="sections">
      <Section>
        <List>
          <ListItem
          v-for="friend in friends"
          >
            <Text class="small">{{ friend.name }}</Text>
            <Text class="small">{{ friend.level }}</Text>
          </ListItem>
          <ListItem>
            <Text class="small">Friends</Text>
          </ListItem>
        </List>
      </Section>
    </Sections>
  </div>
</template>

<style scoped>
@import '@/presentation/styles/theme/typescale.css';

.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  transform: translateZ(0);

  .sections {
    flex-grow: 1;
    grid-auto-rows: min-content;
  }
}

.viewed {
  background-color: #000;
  font-size: 11px;
  border-radius: 13px;
  padding: 6px 7px;
  position: absolute;
  transform: translate(-24px, 72px);
  z-index: 9;
  white-space: nowrap;
  animation: fade-in 200ms ease;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.viewed-eyes {
  display: inline-block;
  animation: eye-blink 200ms ease;
  animation-delay: 200ms;
}

@keyframes eye-blink {
  0% {
    transform: scale(0.5);
  }

  70% {
    transform: scale(1.1);
  }

  100% {
    transform: none;
  }
}

.small {
  @apply --caption-2;

  color: var(--color-hint)
}

.room-cell-right {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  :deep(.amount){
    text-align: center;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 2.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.results {
  min-height: 800px;
}

.switch-enter-active,
.switch-leave-active {
  transition: transform 300ms cubic-bezier(.39,-0.26,.16,1.25), opacity 300ms ease;
  position: absolute;
}
.switch-enter-from {
  transform: scale(0.1);
}
.switch-leave-to {
  transform: scale(0.6);
  opacity: 0.5;
}
</style>
