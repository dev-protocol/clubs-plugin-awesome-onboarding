import { ClubsPluginCategory } from '@devprotocol/clubs-core'
import type {
	ClubsFunctionGetSlots,
	ClubsFunctionPlugin,
	ClubsPluginMeta,
} from '@devprotocol/clubs-core'

import Readme from './readme.astro'
import ConnectButton from './ConnectButton.astro'

export const getSlots = (async (_, { chainId, rpcUrl }) => {
	return [
		{
			slot: 'clubs:connect-button',
			component: ConnectButton,
			props: {
				chainId,
				rpcUrl,
			},
		},
	]
}) satisfies ClubsFunctionGetSlots

export const meta = {
	id: 'devprotocol:clubs:plugin:awesome-onboarding',
	displayName: 'Awesome Onboarding',
	category: ClubsPluginCategory.Uncategorized,
	readme: Readme,
} satisfies ClubsPluginMeta

export default {
	getSlots,
	meta,
} satisfies ClubsFunctionPlugin

export { ConnectButton }
export * from './types'
