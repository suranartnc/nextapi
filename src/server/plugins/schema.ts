import {
  connectionPlugin,
  nullabilityGuardPlugin,
  queryComplexityPlugin,
} from 'nexus'

const DEBUGGING_CURSOR = false
const fn = DEBUGGING_CURSOR ? (i: string): string => i : undefined

export default [
  queryComplexityPlugin(),
  connectionPlugin({
    encodeCursor: fn,
    decodeCursor: fn,
  }),
  nullabilityGuardPlugin({
    shouldGuard: true,
    fallbackValues: {
      ID: ({ info }): string => `${info.parentType.name}:N/A`,
      String: (): string => '',
      Int: (): number => 0,
      Boolean: (): boolean => false,
    },
  }),
]
