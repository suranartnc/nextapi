import {
  connectionPlugin,
  nullabilityGuardPlugin,
  queryComplexityPlugin,
  fieldAuthorizePlugin,
} from 'nexus'

const DEBUGGING_CURSOR = false
const fn = DEBUGGING_CURSOR ? (i: string): string => i : undefined

export default [
  connectionPlugin({
    encodeCursor: fn,
    decodeCursor: fn,
  }),
  queryComplexityPlugin(),
  fieldAuthorizePlugin(),
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
