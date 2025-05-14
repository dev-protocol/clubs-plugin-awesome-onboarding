/* eslint-disable functional/no-return-void */

/* eslint-disable functional/no-expression-statements */

import { useEffect, useMemo, useState } from 'react'
import { whenDefined, type UndefinedOr } from '@devprotocol/util-ts'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import type { LocaleResource } from '@dynamic-labs/sdk-react-core'
import {
	DynamicContextProvider,
	overrideNetworkRpcUrl,
} from '@dynamic-labs/sdk-react-core'

import Button from './Button'
import { English, Japanese } from '../../i18n/dynamic'
import type { ConnectButtonProps } from '../../types'
import cssOverrides from '../../i18n/cssOverrides'

const langs = ['en', 'ja']

export default ({
	chainId,
	environmentId,
	dynamicSettings,
	...props
}: ConnectButtonProps) => {
	const [locale, setLocale] =
		useState<UndefinedOr<{ lang: string; dic: LocaleResource } | null>>(null)

	useEffect(() => {
		// eslint-disable-next-line functional/no-conditional-statements
		if (typeof window !== 'undefined') {
			const loc = window.navigator.languages.find((l) => langs.includes(l))
			setLocale(
				loc === 'ja'
					? { lang: 'ja', dic: Japanese }
					: { lang: 'en', dic: English },
			)
		}
	}, [])

	const polygonUrl = useMemo(
		() => dynamicSettings?.rpcUrl?.find((x) => x.chain === 137),
		[dynamicSettings?.rpcUrl],
	)

	return locale !== null ? (
		<DynamicContextProvider
			settings={{
				environmentId,
				walletConnectPreferredChains: [`eip155:${chainId ?? 137}`],
				walletConnectors: [EthereumWalletConnectors],
				cssOverrides: cssOverrides(locale?.lang),
				social: dynamicSettings?.social ?? { strategy: 'redirect' },
				overrides: whenDefined(polygonUrl, (pol) => ({
					evmNetworks: (networks) =>
						overrideNetworkRpcUrl(networks, { '137': [pol.url] }),
				})),
			}}
			locale={locale?.dic}
		>
			<Button chainId={chainId} {...props} />
		</DynamicContextProvider>
	) : (
		<div className="min-h-10 min-w-32 animate-pulse rounded-xl bg-black/10" />
	)
}
