import { ref, type Ref } from 'vue'
import type Friend from '../entities/Friend'
import { createSharedComposable } from '@vueuse/core'
import { getFriends } from '@/infra/store/friends'

interface useFriendsComposableState {
  friends: Ref<Friend[]>;
}

/**
 * Composable to work with cities
 */
export const useFriends = createSharedComposable((): useFriendsComposableState => {
  const friends = ref<Friend[]>(getFriends())

  return {
    friends: friends,
  }
})
