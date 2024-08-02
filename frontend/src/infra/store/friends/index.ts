import type Friend from '@/domain/entities/Friend.js'

const friendsList: Friend[] = []

export function getFriends(): Friend[] {
  return friendsList
}

export async function loadFriends(): Promise<Friend[]> {
  const friends = (await import('./mock/friends.js')).friendsList

  friendsList.push(...friends)

  return friends
}
