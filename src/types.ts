export type AwesomeOnboardingOptions = Readonly<{
	chainId?: number
	buttonClassName?: string
	overrideClassName?: string
}>

export type AwesomeOnboardingEnvs = Readonly<{
	environmentId: string
}>

export type ConnectButtonProps = AwesomeOnboardingOptions &
	AwesomeOnboardingEnvs
