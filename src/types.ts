import type { DynamicContextProps } from '@dynamic-labs/sdk-react-core'

export type AwesomeOnboardingOptions = Readonly<{
	chainId?: number
	buttonClassName?: string
	overrideClassName?: string
	dynamicSettings?: {
		social?: DynamicContextProps['settings']['social']
		rpcUrl?: { chain: 137; url: string }[]
	}
}>

export type AwesomeOnboardingEnvs = Readonly<{
	environmentId: string
}>

export type ConnectButtonProps = AwesomeOnboardingOptions &
	AwesomeOnboardingEnvs
