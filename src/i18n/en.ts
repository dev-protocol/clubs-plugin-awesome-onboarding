// The English translation is here: node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/en/translation.js.

import type { LocaleResource } from '@dynamic-labs/sdk-react-core'

export default {
	/**
   * @description copy keys for account exists view
   * @default
   * {
        connect: 'Connect with {{socialOauth}}',
        description: 'It looks like an account already exists using',
        title: 'Account already exists',
        trail_message_email: '. Please log in with your email.',
        trail_message_social: 'through {{socialOauth}}',
      }
   */
	dyn_sandbox_maximum_threshold: {
		title: 'Max User Limit Reached',
		description:
			'Your sandbox environment has reached your 100 MAU limit. To test with new users, delete existing users.',
		button: 'Back',
	},
	dyn_account_exists: {
		connect: 'Connect with {{socialOauth}}',
		description_email: 'It looks like an account already exists using',
		description_social:
			'To restore your account to the right place, we need you to log in again.',
		title: 'Re-Authentication Required',
		trail_message_email: '. Please log in with your email.',
		trail_message_social: 'through {{socialOauth}}',
	},
	/**
   * @description copy keys for active wallet information (address, network, etc)
   * @default
   * {
        testnet_warning: 'A testnet network has been selected. Please only use testnet funds or they will be lost.',
        ordinals_address: 'Ordinals address',
        payment_address: 'Payment address',
        balance: 'Balance',
        options: {
          copy_ens: 'Copy ENS',
          view_address: 'View address',
          settings: 'Wallet settings',
          export: 'Export private keys',
        },
      }
   */
	dyn_active_wallet_info: {
		testnet_warning:
			'A testnet network has been selected. Please only use testnet funds or they will be lost.',
		ordinals_address: 'Ordinals address',
		payment_address: 'Payment address',
		balance: 'Balance',
		options: {
			copy_ens: 'Copy ENS',
			view_address: 'View address',
			settings: 'Wallet settings',
			export: 'Export private keys',
		},
	},
	/**
   * @description copy keys for wallet details card
   * @default
   * {
        header: 'Wallet Details',
        address: 'Address',
        copy: 'Copy',
        copied: 'Copied!',
     }
   */
	dyn_wallet_details_card: {
		header: 'Wallet Details',
		address: 'Address',
		copy: 'Copy',
		copied: 'Copied!',
	},
	/**
   * @description copy keys for add network view
   * @default
   * {
      title: 'Add {{name}} network to your wallet',
      add_button: {
        title: 'Add network',
      },
      cancel_button: {
        title: 'Cancel',
      },
    }
   */
	dyn_add_network_view: {
		title: 'Network unavailable',
		description: 'This network is not supported in your {{name}} wallet.',
		add_button: {
			title: 'Add Network',
		},
		cancel_button: {
			title: 'Cancel',
		},
	},
	/**
   * @description copy keys for bridge view
   * @default
   * {
        summary_view: {
          connection_succeed: 'Congratulations on connecting both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets',
          title: 'Welcome to {{appName}}',
        },
        welcome_view: {
          button: 'Get started',
          description: 'You’ll need to connect both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets to get started',
          title: 'Connect to {{appName}}',
        },
        widget: {
          address: 'Copy wallet address',
          connect: 'Connect wallet',
          connect_with_network: 'Connect {{blockchainName}} wallet',
          copy: {
            address: 'Copy wallet address',
            ens: 'Copy ENS',
          },
          disconnect: 'Disconnect',
          edit_profile: 'Edit profile',
          wallet_network: '{{networkName}} wallet',
        },
      }
   */
	dyn_bridge: {
		summary_view: {
			connection_succeed:
				'Congratulations on connecting both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets',
			title: 'Welcome to {{appName}}',
		},
		welcome_view: {
			button: 'Get started',
			description:
				'You’ll need to connect both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets to get started',
			title: 'Connect to {{appName}}',
		},
		widget: {
			address: 'Copy wallet address',
			connect: 'Connect wallet',
			connect_with_network: 'Connect {{blockchainName}} wallet',
			copy: {
				address: 'Copy wallet address',
				ens: 'Copy ENS',
			},
			disconnect: 'Disconnect',
			edit_profile: 'Edit profile',
			wallet_network: '{{networkName}} wallet',
		},
	},
	/**
   * @description copy keys for Dynamic Captcha
   * @default
   * {
      verify_user_subtitle: 'We need to quickly verify you’re human before we proceed.',
      verify_user_title: "Let's verify you're human",
    }
   */
	dyn_captcha: {
		verify_user_subtitle:
			'We need to quickly verify you’re human before we proceed.',
		verify_user_title: "Let's verify you're human",
	},
	/**
	 * @description copy keys for sanctioned access blocked view
	 * @default
	 * {
	 *  title: 'Access Blocked',
	 *  content: 'Logging in is not available to persons in {{jurisdiction}} as you are in a sanctioned jurisdiction.',
	 * }
	 */
	dyn_access_blocked: {
		title: 'Access Blocked',
		content:
			'Logging in is not available to persons in {{jurisdiction}} as you are in a sanctioned jurisdiction.',
	},
	/**
   * @description copy keys for chainalysis blocked wallet view
   * @default
   * {
       title: 'Access denied',
     }
   */
	dyn_chainalysis_blocked_wallet: {
		title: 'Access denied',
	},
	/**
   * @description copy keys for collecting user data
   * @default
   * {
      description: 'We need a bit of information to get started',
      fields: {
        alias: {
          label: 'Alias',
        },
        country: {
          label: 'Country',
        },
        email: {
          label: 'Email',
          validation: 'Email is not valid',
        },
        first_name: {
          label: 'First Name',
        },
        job_title: {
          label: 'Job Title',
        },
        last_name: {
          label: 'Last Name',
        },
        phone_number: {
          label: 'Phone number',
          validation: 'Phone number is not valid',
          too_short: 'Phone number is too short',
        },
        policies_consent: {
          label: 'Policies Consent',
        },
        t_shirt_size: {
          label: 'T-Shirt Size',
        },
        team: {
          label: 'Team',
        },
        username: {
          label: 'Username',
          validation: 'Username is not valid',
        },
      },
      greeting: 'Welcome to {{appName}}',
      log_out_button: 'Log out',
      not_supported_network: {
        description: 'Your wallet is not connected to a supported network. Please update before continuing.',
        error_message: 'This network is not available, please update.',
        title: 'Update Network',
      },
      update_email_tooltip:
      'This email is tied to your wallet so cannot be updated',
      update_phone_number_tooltip:
      'This phone number is tied to your wallet so cannot be updated',
      lock_editing_multiple_verified_fields:
      'You can only edit 1 field at a time that requires verification',
    }
   */
	dyn_collect_user_data: {
		description: 'We need a bit of information to get started',
		fields: {
			alias: {
				label: 'Alias',
			},
			country: {
				label: 'Country',
			},
			email: {
				label: 'Email',
				validation: 'Email is not valid',
			},
			first_name: {
				label: 'First Name',
			},
			job_title: {
				label: 'Job Title',
			},
			last_name: {
				label: 'Last Name',
			},
			phone_number: {
				label: 'Phone number',
				validation: 'Phone number is not valid',
				too_short: 'Phone number is too short',
			},
			policies_consent: {
				label: 'Policies Consent',
			},
			t_shirt_size: {
				label: 'T-Shirt Size',
			},
			team: {
				label: 'Team',
			},
			username: {
				label: 'Username',
				validation: 'Username is not valid',
			},
		},
		greeting: 'Welcome to {{appName}}',
		log_out_button: 'Log out',
		not_supported_network: {
			description:
				'Your wallet is not connected to a supported network. Please update before continuing.',
			error_message: 'This network is not available, please update.',
			title: 'Update Network',
		},
		update_email_tooltip:
			'This email is tied to your wallet so cannot be updated',
		update_phone_number_tooltip:
			'This phone number is tied to your wallet so cannot be updated',
		lock_editing_multiple_verified_fields:
			'You can only edit 1 field at a time that requires verification',
	},
	/**
   * @description copy keys for create password view
   * @default
   * {
      continue: 'Continue',
      create_input: {
        label: 'Create passcode',
        placeholder: 'Create passcode',
      },
      confirm_input: {
        label: 'Confirm passcode',
        placeholder: 'Confirm passcode',
      },
      current_password_input: {
        label: 'Current passcode',
        placeholder: 'Current passcode',
      },
      description:
        "Choose a strong, unique passcode to ensure your account's security and privacy.",
      errors: {
        invalid_current_password: 'Invalid current passcode',
        error_changing_password: 'Error changing passcode',
        new_password_same_as_old: 'New passcode cannot be the same as the old passcode',
        password_mismatch: 'Passcodes do not match',
        user_closed_view: 'User closed the view',
      },
      intro: {
        continue: 'Set up a passcode',
        description: {
          title: 'Add a passcode to protect your account',
          additional_protection: {
            title: 'Passcode Security',
            description:
              'Add a secure passcode to further prevent un-authrized access to your account.',
          },
          restore_access: {
            title: 'Restore Access',
            description:
              'You will be asked to enter it when signing on to a new device.',
          },
        },
        title: 'Add a Passcode',
      },
      logout: 'Log out',
      title: {
        create: 'Create passcode',
        update: 'Create new passcode',
      },
      update_input: {
        label: 'New passcode',
        placeholder: 'New passcode',
      },
    }
   */
	dyn_create_password: {
		continue: 'Continue',
		create_input: {
			label: 'Create passcode',
			placeholder: 'Create passcode',
		},
		confirm_input: {
			label: 'Confirm passcode',
			placeholder: 'Confirm passcode',
		},
		current_password_input: {
			label: 'Current passcode',
			placeholder: 'Current passcode',
		},
		description:
			"Choose a strong, unique passcode to ensure your account's security and privacy.",
		errors: {
			invalid_current_password: 'Invalid current passcode',
			error_changing_password: 'Error changing passcode',
			new_password_same_as_old:
				'New passcode cannot be the same as the old passcode',
			password_mismatch: 'Passcodes do not match',
			user_closed_view: 'User closed the view',
		},
		intro: {
			continue: 'Set up a passcode',
			description: {
				title: 'Add a passcode to protect your account',
				additional_protection: {
					title: 'Passcode Security',
					description:
						'Add a secure passcode to further prevent un-authrized access to your account.',
				},
				restore_access: {
					title: 'Restore Access',
					description:
						'You will be asked to enter it when signing on to a new device.',
				},
			},
			title: 'Add a Passcode',
		},
		logout: 'Log out',
		title: {
			create: 'Create passcode',
			update: 'Create new passcode',
		},
		update_input: {
			label: 'New passcode',
			placeholder: 'New passcode',
		},
	},
	/**
   * @description copy keys for creating wallet wallet message
   * @default
   * {
      loading_message: 'Your wallet is being created...',
    }
   */
	dyn_creating_wallet: {
		loading_message: 'Your wallet is being created...',
	},
	/**
   * @description copy keys for email verification view after email logging in with magiclink
   * @default
   * {
      description: 'We’ve sent a verification email to',
      note: 'Note: it might take a few seconds to proceed after clicking the link in your email',
      title: 'Confirm your email',
    }
   */
	dyn_email_confirmation: {
		description: 'We’ve sent a verification email to',
		note: 'Note: it might take a few seconds to proceed after clicking the link in your email',
		title: 'Confirm your email',
	},
	/**
   * @description copy keys for email update view
   * @default
   * {
      current_email: 'Your current email address is',
      label: 'Email address',
      send_verification: 'Send Verification Code',
      title: 'Update email',
    }
  */
	dyn_email_update: {
		current_email: 'Your current email address is',
		label: 'Email address',
		send_verification: 'Send Verification Code',
		title: 'Update email',
	},
	/**
   * @description copy keys for one-time password verification view after logging in with dynamic email or phone number provider or after kyc verification
   * @default
   * {
      code_not_received: 'Did not receive a code? Check spam or',
      code_sent: 'Code sent',
      description: 'We’ve sent a verification code to',
      log_out_button: 'Log out',
      resend_code: 'Re-send code',
      resend_code_in: 'Re-send code in {{remainingSeconds}}',
      confirm_code: 'Confirm verification code',
      verification_succeeded: 'Verification code confirmed',
      hang_tight: 'Hang tight while we get things ready for you',

      email: {
        title: 'Confirm your email',
        complete:
          'Verification complete, the email is now verified to this account.',
      },
      phone_number: {
        title: 'Confirm your phone number',
        edit: 'Edit phone number',
        complete:
          'Verification complete, the phone number is now verified to this account.',
      },
    },
   */
	dyn_otp_verification: {
		code_not_received: 'Did not receive a code? Check spam or',
		code_sent: 'Code sent',
		description: 'We’ve sent a verification code to',
		log_out_button: 'Log out',
		resend_code: 'Re-send code',
		resend_code_in: 'Re-send code in {{remainingSeconds}}',
		confirm_code: 'Confirm verification code',
		verification_succeeded: 'Verification code confirmed',
		hang_tight: 'Hang tight while we get things ready for you',
		email: {
			title: 'Confirm your email',
			complete:
				'Verification complete, the email is now verified to this account.',
		},
		phone_number: {
			title: 'Confirm your phone number',
			edit: 'Edit phone number',
			complete:
				'Verification complete, the phone number is now verified to this account.',
		},
	},
	/**
   * @description copy keys for deposit view
   * @default
   * {
      title: 'Deposit',
    }
   */
	dyn_deposit: {
		title: 'Deposit',
		receive_funds_on: 'You can receive tokens on ',
	},
	/**
   * @description copy keys for embedded wallet authenticator choice view
   * @default
   * {
      description:
        'Protect your account and simplify your transaction experience.',
      email: {
        badge: 'Fastest',
        description: ' You will need to renew after {{expiration}} minutes ',
        title: 'Use a one-time code',
      },
      passkey: {
        auth_info: {
          convinience: {
            title: 'Convenient and Fast',
            description:
              'Use Face ID or Touch ID to complete transactions quickly.',
          },
          security: {
            title: 'Increased Security',
            description:
              'Passkeys are encrypted end-to-end on your device or password manager to prevent phishing attempts.',
          },
          add_button: 'Add a passkey',
          start_button: 'Add a passkey',
        },
        no_email_auth_info: {
          convinience: {
            title: 'Simple and Fast',
            description:
              'Works across devices and syncs between devices and browsers.',
          },
          security: {
            title: 'Secured with a bio-metric',
            description: 'Phishing resistant and encrypted.',
          },
          add_button: 'Add passkey',
          start_button: 'Add passkey',
        },
        badge: 'Recommended',
        description:
          'Works across devices & secured with biometric to prevent phishing attempts ',
        title: 'Create new passkey',
        reveal_title: 'Add a passkey',
      },
      skip: 'Not now',
      title: 'Account security',
      need_help_title: 'Problem Signing?',
      need_help_description: 'Select from an option below to complete',
      reveal_title: 'Verification Required',
      reveal_description: 'Choose a verification method.',
    }
   */
	dyn_embedded_authenticator: {
		description:
			'Protect your account and simplify your transaction experience.',
		email: {
			badge: 'Fastest',
			description: ' You will need to renew after {{expiration}} minutes ',
			title: 'Use a one-time code',
		},
		passkey: {
			auth_info: {
				convinience: {
					title: 'Convenient and Fast',
					description:
						'Use Face ID or Touch ID to complete transactions quickly.',
				},
				security: {
					title: 'Increased Security',
					description:
						'Passkeys are encrypted end-to-end on your device or password manager to prevent phishing attempts.',
				},
				add_button: 'Add a passkey',
				start_button: 'Add a passkey',
			},
			no_email_auth_info: {
				convinience: {
					title: 'Simple and Fast',
					description:
						'Works across devices and syncs between devices and browsers.',
				},
				security: {
					title: 'Secured with a bio-metric',
					description: 'Phishing resistant and encrypted.',
				},
				add_button: 'Add passkey',
				start_button: 'Add passkey',
			},
			badge: 'Recommended',
			description:
				'Works across devices & secured with biometric to prevent phishing attempts ',
			title: 'Create new passkey',
			reveal_title: 'Add a passkey',
		},
		skip: 'Not now',
		title: 'Account security',
		need_help_title: 'Problem Signing?',
		need_help_description: 'Select from an option below to complete',
		reveal_title: 'Verification Required',
		reveal_description: 'Choose a verification method.',
	},
	/**
     * @description copy keys for enter password view
     * @default
     * {
        continue_button_label: 'Continue',
        description: 'Please enter your passcode below to continue.',
        error: {
          invalid_password: 'Invalid passcode',
        },
        input: {
          label: 'Passcode',
          placeholder: 'Passcode',
        },
        title: 'Enter passcode',
      }
     */
	dyn_enter_password: {
		continue_button_label: 'Continue',
		description: 'Please enter your passcode below to continue.',
		error: {
			invalid_password: 'Invalid passcode',
		},
		input: {
			label: 'Passcode',
			placeholder: 'Passcode',
		},
		title: 'Enter passcode',
	},
	/**
     * @description copy keys for Dynamic Farcaster connect view
     * @default
     * {
        copy_button: 'Copy QR URI',
        scan_title: "Scan this QR code from your mobile app or phone's camera to connect.",
      }
     */
	dyn_farcaster_connect_view: {
		copy_button: 'Copy QR URI',
		scan_title:
			"Scan this QR code from your mobile app or phone's camera to connect.",
	},
	/**
   * @description copy keys for log in view
   * @default
   * dyn_login: {
    connect_wallet: {
      title: 'Connect',
    },
    email_form: {
      email_field: {
        label: 'Enter your email',
      },
      submit_button: {
        label: 'Continue',
      },
    },
    email_or_phone: {
      use_email: 'Use email',
      use_phone: 'Use phone',
      prefer_email: 'Prefer email sign up?',
      prefer_phone: 'Prefer phone number sign up?',
    },
    helper: {
      all_wallet_list: 'Get your first wallet',
      email_form: {
        invalid_email: 'Invalid or incorrect email. Did you mistype it?',
      },
      pending_connect: {
        title: 'Connecting a wallet',
      },
      pending_signature: {
        title: 'Signing a wallet',
      },
      pending_signature_without_back_button: {
        title: 'Signing a wallet',
      },
      phone_number_form: {
        invalid_phone: 'Invalid or incorrect number. Did you mistype it?',
        invalid_sms_verification:
          'The code you entered is incorrect. Please try again.',
        too_many_sms_verification_attempts:
          'Too many verification attempts, please try again later.',
      },
      qr_code: {
        title: 'Connecting a wallet',
      },
      wallet_only: 'Get your first wallet',
    },
    qr_code: {
      title: 'Connect',
    },
    separators: {
      default: 'OR',
    },
    sign_wallet: {
      title: 'Sign',
    },
    select_wallet_in_wallet_group: {
      title: 'Select',
    },
    social: {
      button_label: 'Continue with {{provider}}',
      overlay_title: 'Choose a social account',
    },
    title: {
      all: 'Log in or sign up',
      all_wallet_list: 'Select your wallet',
      wallet_only: 'Select your wallet',
    },
    wallet_group: {
      title: 'Select Chain',
    },
    wallet_list: {
      button_only: 'Continue with a wallet',
    },
    mobile_wallet_redirect: {
      backup_title: 'Connect mobile app',
      prompt: "Tap 'Open' to continue",
      get_app_prompt: 'Get',
      open_prompt: 'Open',
      redirect_fail_message:
        "If the app doesn't open, you might need to download the {{walletName}} Wallet app.",
      app_store: 'App Store',
      play_store: 'Play Store',
    },
    wrong_social_account: {
      retry_button: 'Try again',
      retry_title: 'Please connect with: ',
      subtitle:
        'You must connect with the same account you originally signed in with.',
      title: 'Whoops. Wrong Account',
    },
  },
   */
	dyn_login: {
		connect_wallet: {
			title: 'Connect',
		},
		email_form: {
			email_field: {
				label: 'Enter your email',
			},
			submit_button: {
				label: 'Continue',
			},
		},
		email_or_phone: {
			use_email: 'Use email',
			use_phone: 'Use phone',
			prefer_email: 'Prefer email sign up?',
			prefer_phone: 'Prefer phone number sign up?',
		},
		helper: {
			all_wallet_list: 'Get your first wallet',
			email_form: {
				invalid_email: 'Invalid or incorrect email. Did you mistype it?',
			},
			pending_connect: {
				title: 'Connecting a wallet',
			},
			pending_signature: {
				title: 'Signing a wallet',
			},
			pending_signature_without_back_button: {
				title: 'Signing a wallet',
			},
			phone_number_form: {
				invalid_phone: 'Invalid or incorrect number. Did you mistype it?',
				invalid_sms_verification:
					'The code you entered is incorrect. Please try again.',
				too_many_sms_verification_attempts:
					'Too many verification attempts, please try again later.',
			},
			qr_code: {
				title: 'Connecting a wallet',
			},
			wallet_only: 'Get your first wallet',
		},
		qr_code: {
			title: 'Connect',
		},
		separators: {
			default: 'OR',
		},
		sign_wallet: {
			title: 'Sign',
		},
		select_wallet_in_wallet_group: {
			title: 'Select',
		},
		social: {
			button_label: 'Continue with {{provider}}',
			overlay_title: 'Choose a social account',
		},
		title: {
			all: 'Log in or sign up',
			all_wallet_list: 'Select your wallet',
			wallet_only: 'Select your wallet',
		},
		wallet_group: {
			title: 'Select Chain',
		},
		wallet_list: {
			button_only: 'Continue with a wallet',
		},
		mobile_wallet_redirect: {
			backup_title: 'Connect mobile app',
			prompt: "Tap 'Open' to continue",
			get_app_prompt: 'Get',
			open_prompt: 'Open',
			redirect_fail_message:
				"If the app doesn't open, you might need to download the {{walletName}} Wallet app.",
			app_store: 'App Store',
			play_store: 'Play Store',
		},
		wrong_social_account: {
			retry_button: 'Try again',
			retry_title: 'Please connect with: ',
			subtitle:
				'You must connect with the same account you originally signed in with.',
			title: 'Whoops. Wrong Account',
		},
	},
	/**
   * @description copy keys for Dynamic manage passkeys view which are used inside dynamic widget
   * @default
   * {
      title: 'My passkeys',
      passkey_from: 'from',
      passkey_providers: {
        android: 'Android Phone',
        brave: 'Brave Browser',
        chrome: 'Google Chrome',
        edge: 'Microsoft Edge',
        firefox: 'Firefox',
        iPhone: 'iPhone',
        opera: 'Opera Browser',
        safari: 'Safari Browser',
      },
      recovery_button: 'Set up new passkey',
    }
   */
	dyn_manage_passkeys: {
		title: 'Manage passkeys',
		passkey_from: 'from',
		passkey_providers: {
			android: 'Android Phone',
			brave: 'Brave Browser',
			chrome: 'Google Chrome',
			edge: 'Microsoft Edge',
			firefox: 'Firefox',
			iPhone: 'iPhone',
			opera: 'Opera Browser',
			safari: 'Safari Browser',
		},
		recovery_button: 'Set up new passkey',
	},
	/**
   * @description copy keys for Dynamic rename passkey view
   * @default
   * {
    error: Whoops! There was an error updating your passkey
    input_label: 'Passkey name',
    save: 'Save',
    title: 'Rename your passkey',
    not_found: 'No passkeys found',
   }
   */
	dyn_rename_passkeys: {
		error: 'Whoops! There was an error updating your passkey',
		input_label: 'Passkey name',
		save: 'Save',
		title: 'Rename your passkey',
		not_found: 'No passkeys found',
	},
	/**
   * @description export keys for Dynamic embedded reveal view
   * @default
   * {
      title: 'Export wallet',
      agreement_title: 'Agree to continue',
      private_key_title: 'Private key',
      recovery_phrase_title: 'Secret recovery phrase',
      description:
        'Your wallet is non-custodial, meaning you are always in control of it.',
      statement_1: {
        title: 'Do not publicly share your {{keyType}}',
        description: 'Your {{keyType}} controls your account and assets.',
      },
      checkbox_label:
        'I am responsible for safeguarding and using my wallet key information.',
      reveal_description: 'Make sure to safely back up this information',
      reveal_button_label: 'Reveal',
      copy_button_label: 'Copy to clipboard',
      done_button_label: "I'm Done",
      aa_warning: {
         title: 'Your assets are not in this wallet.',
         subtitle:
         'This is a smart-contract wallet. You will not see your balance if you import this to an external service. Please send your assets to your preferred external wallet first to access your funds:',
         button: 'here',
      },
      unlink: 'Unlink wallet info',
    },
   */
	dyn_embedded_reveal: {
		title: 'Export wallet',
		agreement_title: 'Agree to continue',
		prompt_for_export_title: 'Back up wallet key',
		private_key_title: 'Private key',
		recovery_phrase_title: 'Secret recovery phrase',
		badge_label: 'Sensitive information',
		prompt_for_export_description:
			'Your wallet is ready. Back up your key to protect your assets.',
		statement_1: {
			title: 'Non-custodial wallet',
			description: "You're always in control",
		},
		statement_2: {
			title: 'Keep your key private. It controls your account and assets.',
		},
		checkbox_label:
			'I am responsible for safeguarding and using my wallet key information.',
		reveal_description: 'Make sure to safely back up this information',
		skip_button_label: 'Skip for now',
		reveal_button_label: 'Reveal',
		backup_button_label: 'Back up now',
		copy_button_label: 'Copy to clipboard',
		done_button_label: "I'm Done",
		aa_warning: {
			title: 'Your assets are not in this wallet.',
			subtitle:
				'This is a smart-contract wallet. You will not see your balance if you import this to an external service. Please send your assets to your preferred external wallet first to access your funds:',
			button: 'here',
		},
		unlink: 'Unlink wallet info',
	},
	/**
	 * @description export keys for Dynamic embedded delete view
	 * @default
	 *
	 */
	dyn_embedded_delete: {
		title: 'Unlink from app',
		description_1:
			'By continuing you acknowledge that if you return to the application, you will receive a new wallet address.',
		description_2:
			'Once unlinked, you cannot recover any wallet information through this application including any associated smart contract wallets.',
		acknowledgement:
			'I have safely backed up my wallet seed phrase information. If I return to this application, a new wallet will be created for me.',
		cancel_button: 'Cancel',
		action_button: 'Unlink & Log out',
	},
	/**
   * @description Settings for Dynamic settings view which are used inside dynamic widget
   * @default
   * {
    global_connectivity_section: {
      title: 'Global Connectivity',
      connected_apps_button: 'Connected Apps',
    },
    export_section: {
      private_key_button: 'Private key',
      srp_button: 'Recovery phrase',
      title: 'Export & Backup',
    },
    identity_section: {
      title: 'Recovery',
      add_email_button: 'Add an email',
    },
    tags: { recommended: 'Recommended' },
    security_section: {
      email_auth_button: 'One time code',
      passkey_button: 'Passkeys',
      password_button: 'Passcode',
      mfa_button: 'Authenticator App',
      title: '2 factor authentication',
    },
    title: 'Settings',
    button_logout: 'Log out',
    empty_screen: {
      title: 'Nothing to see here yet!',
    },
  }
   */
	dyn_settings: {
		global_connectivity_section: {
			title: 'Global Connectivity',
			connected_apps_button: 'Connected Apps',
		},
		export_section: {
			private_key_button: 'Private key',
			srp_button: 'Recovery phrase',
			title: 'Export & Backup',
		},
		identity_section: {
			title: 'Recovery',
			add_email_button: 'Add an email',
		},
		tags: { recommended: 'Recommended' },
		security_section: {
			email_auth_button: 'One time code',
			passkey_button: 'Passkeys',
			password_button: 'Passcode',
			mfa_button: 'Authenticator App',
			title: '2 factor authentication',
		},
		title: 'Settings',
		button_logout: 'Log out',
		empty_screen: {
			title: 'Nothing to see here yet!',
		},
	},
	/**
   * @description copy keys for global wallet view
   * @default
   *  {
    connect_to_apps: 'Connect to apps',
    scan_qr_code: 'Scan QR Code',
    or: 'OR',
    walletconnect_uri: 'WalletConnect URI',
    the_dapp: 'the dApp',
    this_app: 'this app',
    confirm: {
      title: 'Confirm Connection',
      description: 'Are you sure you want to connect to {{name}}?',
      cancel_button: 'Cancel',
      connect_button: 'Connect',
    },
    banner: {
      warning: 'There was an error connecting to {{name}}.',
      success: 'Successfully connected to {{name}}.',
      already_connected: 'You are already connected to {{name}}.',
      expired:
        'The link you entered expired, please get a new URI from the app.',
      bad_input:
        'Invalid URI. Please check below for how to find the valid URI.',
    },
    help: {
      title: 'How do I find the URI code?',
      step: {
        1: '1. Go to the website you want to connect to',
        2: '2. Locate the "Connect" or "Login" button',
        3: '3. Open WalletConnect from the list',
      },
      learn_more: 'Learn more about global wallets',
    },
    malicious_site: {
      certain: {
        title: 'Malicious app detected!',
        subtitle_header: 'Risk of losing funds',
        subtitle_text:
          'The site is known to exploit and or take assets from connected wallets.',
        go_back: 'Cancel',
        proceed: 'Proceed',
      },
      unknown: {
        title: 'Site verification did not run.',
        subtitle_header: 'Double check the app',
        subtitle_text:
          'We were unable to verify the vailidity of the app at this time.',
        go_back: 'Cancel',
        proceed: 'Proceed',
      },
    },
     connected_apps: {
      title: 'Connected Apps',
      no_connections: 'No connected apps',
    },
  },
   */
	global_wallet: {
		connect_to_apps: 'Connect to apps',
		scan_qr_code: 'Scan QR Code',
		or: 'OR',
		walletconnect_uri: 'WalletConnect URI',
		the_dapp: 'the dApp',
		this_app: 'this app',
		confirm: {
			title: 'Confirm Connection',
			description: 'Are you sure you want to connect to {{name}}?',
			cancel_button: 'Cancel',
			connect_button: 'Connect',
		},
		banner: {
			warning: 'There was an error connecting to {{name}}.',
			success: 'Successfully connected to {{name}}.',
			already_connected: 'You are already connected to {{name}}.',
			expired:
				'The link you entered expired, please get a new URI from the app.',
			bad_input:
				'Invalid URI. Please check below for how to find the valid URI.',
		},
		help: {
			title: 'How do I find the URI code?',
			step: {
				1: '1. Go to the website you want to connect to',
				2: '2. Locate the "Connect" or "Login" button',
				3: '3. Open WalletConnect from the list',
			},
			learn_more: 'Learn more about global wallets',
		},
		malicious_site: {
			certain: {
				title: 'Malicious app detected!',
				subtitle_header: 'Risk of losing funds',
				subtitle_text:
					'The site is known to exploit and or take assets from connected wallets.',
				go_back: 'Cancel',
				proceed: 'Proceed',
			},
			unknown: {
				title: 'Site verification did not run.',
				subtitle_header: 'Double check the app',
				subtitle_text:
					'We were unable to verify the vailidity of the app at this time.',
				go_back: 'Cancel',
				proceed: 'Proceed',
			},
		},
		connected_apps: {
			title: 'Connected Apps',
			subtitle:
				'Connected apps allow you to interact with your wallet on other platforms.',
			success: 'Successfully connected to {{name}}.',
		},
	},
	/**
   * @description copy keys for mfa management view
   * @default
   *  {
        title: 'Authenticator App',
        add_mfa_button: 'Authenticator App',
        no_devices: 'No authenticator apps configured',
        generate_backup_codes_button: 'Get new backup codes',
      },
   */
	dyn_manage_mfa: {
		title: 'Authenticator App',
		add_mfa_button: 'Authenticator App',
		no_devices: 'No authenticator apps configured',
		generate_backup_codes_button: 'Get new backup codes',
	},
	/**
   * @description copy keys for mfa views
   * @default
   * {
      choose_device_view: {
        title: 'Secure your account',
        select_options: 'Protect your account by adding multi-factor authentication',
        authenticator_app: 'Authenticator app',
        authenticator_app_description:
          'Use your preferred authenticator app such as Authy, Google Authenticator, etc.',
        backup_code: 'Backup code',
        backup_code_description:
          'Enter one of your saved backup codes to authenticate.',
        choose_another_method:  'Choose another method',
        choose_another_method_description: 'Use one of the methods below:',
      logout: 'Log out',
      },
      display_backup_codes_view: {
        title: 'Back up your codes',
        body: 'Backup codes help recover your account if you lose access to your device. Each code can be used only 1 time.',
        warning: 'You won’t be able to see these again',
        copy_all: 'Copy all',
        download: 'Download',
        checkbox: 'I have safely stored a copy of my backup codes',
        complete: 'Complete',
      },
      otp_verification_view: {
        title: 'Confirm verification code',
        body: 'Enter the verification code generated by your authenticator app',
        error: 'Invalid code. Please try again.',
        rate_limit_error: 'Too many attempts, please try again later.',
        choose_another_method: 'Sign in another way',
      },
      secure_device_view: {
        title: 'Secure your account',
        body: 'Setup a new sign-in method in your authenticator app',
        continue: 'Continue',
        helper: {
          button: "Can't scan QR Code?",
          title: 'Troubles with scanning?',
          step1: {
            title: 'Open your Authenticator App',
            description: 'You will set up a new sign-in method',
          },
          step2: {
            title: 'Enter the key provided below',
            description: 'Make sure time-based or one-time password is enabled.',
          },
          uri: {
            title: 'Copy the full URI',
            description:
              'This only works if your authenticator app supports TOTP URIs',
          },
        },
        logout: 'Log out',
      },
    },
   */
	dyn_mfa: {
		choose_device_view: {
			title: 'Secure your account',
			select_options:
				'Protect your account by adding multi-factor authentication',
			authenticator_app: 'Authenticator app',
			authenticator_app_description:
				'Use your preferred authenticator app such as Authy, Google Authenticator, etc.',
			backup_code: 'Backup code',
			backup_code_description:
				'Enter one of your saved backup codes to authenticate.',
			choose_another_method: 'Choose another method',
			choose_another_method_description: 'Use one of the methods below:',
			logout: 'Log out',
		},
		display_backup_codes_view: {
			title: 'Back up your codes',
			body: 'Backup codes help recover your account if you lose access to your device. Each code can be used only 1 time.',
			warning: 'You won’t be able to see these again',
			copy_all: 'Copy all',
			download: 'Download',
			checkbox: "I've safely stored a copy of my backup codes",
			complete: 'Complete',
		},
		otp_verification_view: {
			title: 'Confirm verification code',
			body: 'Enter the verification code generated by your authenticator app',
			error: 'Invalid code. Please try again.',
			rate_limit_error: 'Too many attempts, please try again later.',
			choose_another_method: 'Login another way',
		},
		secure_device_view: {
			title: 'Secure your account',
			body: 'Setup a new sign-in method in your authenticator app',
			continue: 'Continue',
			helper: {
				button: "Can't scan QR Code?",
				title: 'Troubles with scanning?',
				step1: {
					title: 'Open your Authenticator App',
					description: 'You will set up a new sign-in method',
				},
				step2: {
					title: 'Enter the key provided below',
					description: 'Make sure time-based or one-time password is enabled.',
				},
				uri: {
					title: 'Copy the full URI',
					description:
						'This only works if your authenticator app supports TOTP URIs',
				},
			},
			logout: 'Log out',
		},
		recovery_view: {
			title: 'Enter your backup code',
			body: 'Your backup code is one of the 10 codes you received when you first enrolled in multi-factor authentication',
			input_label: 'Enter back up code',
			button_label: 'Continue',
			get_help: {
				description: 'Missing your back up codes?',
				button_label: 'Get Help',
			},
			helper: {
				title: 'Mfa Recovery Help',
			},
		},
	},
	/**
   * @description copy keys for merge user accounts view
   * @default
   * {
      confirm_button: 'Merge accounts',
      errors: {
        merge_error: 'Something went wrong, please try again.',
      },
      wallet: {
        content: 'This wallet is associated to another account. Would you like to merge accounts?',
        title: 'Wallet already in use',
      },
    }
   */
	dyn_merge_user_accounts: {
		confirm_button: 'Merge accounts',
		errors: {
			merge_error: 'Something went wrong, please try again.',
		},
		wallet: {
			content:
				'This wallet is associated to another account. Would you like to merge accounts?',
			title: 'Wallet already in use',
		},
	},
	/**
   * @description copy keys for merge user accounts conflicts view
   * @default
   * {
      confirm_button: 'Confirm & Merge',
      description:
        'You have some conflicting information. Please select your preferences',
      errors: {
        merge_error: 'Something went wrong, please try again.',
      },
      title: 'Confirm your preferences',
    }
   */
	dyn_merge_user_accounts_conflicts: {
		confirm_button: 'Confirm & Merge',
		description:
			'You have some conflicting information. Please select your preferences',
		errors: {
			merge_error: 'Something went wrong, please try again.',
		},
		title: 'Confirm your preferences',
	},
	/**
   * @description copy keys for merge user accounts view when using email associated to a different account
   * @default
   * {
      cancel_button: "No, I'll use a different email",
      confirm_button: 'Yes, link to existing account',
      errors: {
        merge_error: 'Something went wrong, please try again.',
      },
      existing_account: 'An account already exists that uses',
      existing_account_trail: 'email.',
      title: 'Would you like to link this wallet to this existing account?',
    }
   */
	dyn_merge_user_accounts_with_same_email: {
		cancel_button: "No, I'll use a different email",
		confirm_button: 'Yes, link to existing account',
		errors: {
			merge_error: 'Something went wrong, please try again.',
		},
		existing_account: 'An account already exists that uses',
		existing_account_trail: 'email.',
		title: 'Would you like to link this wallet to this existing account?',
	},
	/**
   * @description copy key for Dynamic need help footer section
   * @default
   * {
      info: 'Problem Signing?',
      contact_support: 'Contact support',
      divider: 'or',
      help_button: 'go here.',
    }
   */
	dyn_need_help_section: {
		info: 'Need Help?',
		contact_support: 'Contact support',
		divider: 'or',
		help_button: 'Go here for support',
		visit_platform: 'Visit {{platform}}',
	},
	/**
   * @description copy keys for network not supported view
   * @default
   * {
      button: 'Switch Network',
      subtitle: 'Your wallet is not connected to a supported network. Please update before continuing.',
      title: 'Update Network',
      warning_message: 'This network is not available, please update.',
    }
   */
	dyn_network_not_supported: {
		button: 'Switch Network',
		subtitle:
			'Your wallet is not connected to a supported network. Please update before continuing.',
		title: 'Update Network',
		warning_message: 'This network is not available, please update.',
		wallet: 'Not Supported',
	},
	/**
   * @description copy keys for network not supported view for manual switch
   * @default
   * {
      subtitle_network_defined_metamaskstarknet:
        'To continue, please update the network in your wallet to {{network}} by visiting the Starknet Snap companion app',
      subtitle_network_defined_metamaskstarknet_companion_app: 'companion app',
      subtitle_network_defined: 'To continue, please update the network in your wallet to {{network}}',
      subtitle_no_network_defined: 'Your wallet does not support switching networks from this app. Switch networks directly in your wallet.',
      title: 'Update your Network',
      warning_message: 'This network is not available, please update.',
    }
   */
	dyn_network_not_supported_manual_switch: {
		subtitle_network_defined_metamaskstarknet:
			'To continue, please update the network in your wallet to {{network}} by visiting the Starknet Snap',
		subtitle_network_defined_metamaskstarknet_companion_app: 'companion app',
		subtitle_network_defined:
			'To continue, please update the network in your wallet to {{network}}',
		subtitle_no_network_defined:
			'Your wallet does not support switching networks from this app. Switch networks directly in your wallet.',
		title: 'Update your Network',
		warning_message: 'This network is not available, please update.',
	},
	/**
   * @description copy keys for no access view
   * @default
   * {
      chainalysis: {
        button_text: 'Try another method',
        description: 'This wallet has been correlated to illicit activity and cannot access this site.',
        social_media_link_text: 'Why am I seeing this message?',
        social_media_link_url: 'https://docs.dynamic.xyz/docs',
        title: 'This address seems corrupted.',
      },
      default: {
        button_text: 'Try another method',
        description: "You are not currently on the allow list.",
        title: 'Access denied',
      },
      gate: {
        button_text: 'Try a different wallet',
        description: 'A NFT or a token is required to access this site.',
        title: 'You cannot access the site',
      },
      not_in_the_list_image_alt: 'user is not in the list',
      title: "You don't have access",
    }
   */
	dyn_no_access: {
		chainalysis: {
			button_text: 'Try another method',
			description:
				'This wallet has been correlated to illicit activity and cannot access this site.',
			social_media_link_text: 'Why am I seeing this message?',
			social_media_link_url: 'https://docs.dynamic.xyz/docs',
			title: 'This address seems corrupted.',
		},
		default: {
			button_text: 'Try another method',
			description: 'You are not currently on the allow list.',
			title: 'Access denied',
		},
		gate: {
			button_text: 'Try a different wallet',
			description: 'A NFT or a token is required to access this site.',
			title: 'You cannot access the site',
		},
		not_in_the_list_image_alt: 'user is not in the list',
		title: "You don't have access",
	},
	/**
   * @description copy keys for email OTP verification for magiclink
   * @default
   * {
      banner_text: 'Sign in to access your email based wallet',
    }
   */
	dyn_magic_verification: {
		banner_text: 'Login to access your email based wallet',
	},
	/**
   * @description copy key for passkey created success banner
   * @default
   * {
      text: 'A new passkey has been created',
    }
   */
	dyn_passkey_success: {
		created: 'A new passkey has been created',
		edited: 'Your passkey has been edited',
	},
	/**
   * @description copy keys for passkey intro view
   * @default
   * {
      button: 'Set up a passkey',
      button_logout: 'Log out',
      button_skip: 'Skip for now',
      disabled: 'Passkeys are not available on this device or browser. Please open on Chrome, Safari, or Brave to continue',
      helper: {
        section_1: {
          description: 'Passkeys are a standard built by Apple, Google and others, and eliminates the use of passwords.',
          title: 'Built by Apple and Google',
        },
        section_2: {
          description: 'Passkeys are stored on your phone and are not shared with anyone.',
          title: 'Secure and Private',
        },
        title: "What's Passkey",
        tooltip: 'Need some help?',
      },
      sms_auth: {
        title: 'Finish set up',
        description:
          'Add a security method to finish your profile and complete transactions',
      },
      subtitle: 'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
      title: 'Secure your wallet',
    }
   */
	dyn_passkey_intro: {
		button: 'Set up a passkey',
		button_logout: 'Log out',
		button_skip: 'Skip for now',
		disabled:
			'Passkeys are not available on this device or browser. Please open on Chrome, Safari, or Brave to continue',
		helper: {
			section_1: {
				description:
					'Passkeys are a standard built by Apple, Google and others, and eliminates the use of passwords.',
				title: 'Built by Apple and Google',
			},
			section_2: {
				description:
					'Passkeys are stored on your phone and are not shared with anyone.',
				title: 'Secure and Private',
			},
			title: "What's Passkey",
			tooltip: 'Need some help?',
		},
		sms_auth: {
			title: 'Finish set up',
			description:
				'Add a security method to finish your profile and complete transactions',
		},
		subtitle:
			'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
		title: 'Secure your wallet',
	},
	/**
   * @description copy keys for passkey new domain detected modal
   * @default
   * {
   title: 'New domain detected',
   description: 'To complete your transaction select a signing method',
   actions: {
   passkey: {
   title: 'Add new passkey',
   subtitle: 'Does not expire. Works across devices & secured with biometric.',
   },
   emailAuth: {
   title: 'Use a one-time code',
   subtitle: 'Allows you to transact for 30 min',
   },
   badges: {
   recommended: 'Recommended',
   fastest: 'Fastest',
   },
   },
   }
   */
	dyn_passkey_new_domain_detected: {
		title: 'New domain detected',
		description: 'To complete your transaction select a signing method',
		actions: {
			passkey: {
				title: 'Add new passkey',
				subtitle:
					'Does not expire. Works across devices & secured with biometric.',
			},
			emailAuth: {
				title: 'Use a one-time code',
				subtitle: 'Allows you to transact for 30 min',
			},
			badges: {
				recommended: 'Recommended',
				fastest: 'Fastest',
			},
		},
	},
	/**
   * @description copy keys for passkeys recovery flow
   * @default
   * {
      add_email: {
        description:
          'Don’t get locked out if you delete your passkey or lose your device.',
        input_label: 'Enter your email',
        title: 'Add a recovery email',
        confirm_button: 'Confirm with a passkey',
        skip_button: 'Skip for now',
        success_message: 'Recovery email added!',
      },
      code: {
          description: 'A verification code has been sent to {{email}}',
          input_label: 'Enter your code here...',
          title: 'Verification code sent',
        resend: {
            button: 'Resend code',
            text: "Didn't receive a code?",
        },
      },
      complete: {
        complete_button: 'Create a passkey',
        description: 'Secure your wallet by adding a new passkey.',
        title: 'Create a new passkey',
      },
      start: {
        description:
          'To complete this process, ensure you are using the same device/browser.',
        start_button: 'Send me an email',
        title: 'Initiate Request',
      },
    }
   */
	dyn_passkey_recovery: {
		add_email: {
			description:
				'Don’t get locked out if you delete your passkey or lose your device.',
			input_label: 'Enter your email',
			title: 'Add a recovery email',
			confirm_button: 'Confirm with a passkey',
			skip_button: 'Skip for now',
			success_message: 'Recovery email added!',
		},
		code: {
			description: 'A verification code has been sent to {{email}}',
			input_label: 'Enter your code here...',
			title: 'Verification code sent',
			resend: {
				button: 'Resend code',
				text: "Didn't receive a code?",
			},
		},
		complete: {
			complete_button: 'Create a passkey',
			description: 'Secure your wallet by adding a new passkey.',
			title: 'Create a new passkey',
		},
		start: {
			description:
				'To complete this process, ensure you are using the same device/browser.',
			start_button: 'Send me an email',
			title: 'Initiate Request',
		},
	},
	/**
   * @description copy keys for Dynamic pending wallet connection
   * @default
   * {
      mobile: 'Click connect in your mobile wallet',
      computer: 'Click connect in your wallet popup',
    }
   */
	dyn_pending_connection: {
		title: 'Connect',
		mobile: 'Click connect in your mobile wallet',
		computer: 'Click connect in your wallet popup',
	},
	/**
     * @description copy keys for Dynamic pending signature, we have overrides for phantom ledger which does not support message signing.
     * @default
     * {
        click_to_sign: 'Click to Sign',
        note: 'Note: ',
        phantom_ledger_sign: "Click sign in your wallet to confirm you own this wallet (this doesn't cost gas).",
        phantom_ledger_warning: "Ledger with Phantom doesn't support message signing. When logging in, a small fee (which should not apply) may appear. See below to learn more.",
        regular_sign_description: 'Click sign-in in your wallet to confirm you own this wallet.',
  }
     */
	dyn_pending_signature: {
		click_to_sign: 'Click to Sign',
		note: 'Note: ',
		phantom_ledger_sign:
			"Click sign in your wallet to confirm you own this wallet (this doesn't cost gas).",
		phantom_ledger_warning:
			"Ledger doesn't support message signing. When logging in, a small fee (which should not apply) may appear. See below to learn more.",
		regular_sign_description:
			'Click sign-in in your wallet to confirm you own this wallet.',
	},
	/**
     * @description copy keys for Dynamic QR code Wallet Connection Pop-Up
     * @default
     * {
        copy_button: 'Copy QR URI',
        get_extension_button: 'Get extension',
        open_button: 'Open App',
        scan_title: "Scan this QR code from your mobile {{app}} or phone's camera to connect.",
        wallet_not_installed: {
          browser_install: 'Install {{browser}} extension',
          install: 'Install {{wallet}} extension to connect',
          refresh: 'Refresh the page once installed',
          select: 'Select from your preferred options below:',
        },
      }
     */
	dyn_qr_code: {
		copy_button: 'Copy QR URI',
		get_extension_button: 'Get Extension',
		open_button: 'Open App',
		scan_title:
			"Scan this QR code from your mobile {{app}} or phone's camera to connect.",
		wallet_not_installed: {
			browser_install: 'Install {{browser}} extension',
			install: 'Install {{wallet}} extension to connect',
			refresh: 'Refresh the page once installed',
			select: 'Select from your preferred options below:',
		},
	},
	/**
     * @description copy keys for Dynamic wallet locked/disconnected
     * @default
     * {
        connect_continue: 'Connect your wallet to continue',
        title: 'Welcome back',
        subtitle: "We couldn't connect to your wallet. Click connect to retry the connection ",
        connect: 'Connect wallet',
        logout: 'Log out',
      }
     */
	dyn_wallet_locked: {
		connect_continue: 'Connect your wallet to continue',
		title: 'Welcome back',
		subtitle:
			"We couldn't connect to your wallet. Click connect to retry the connection ",
		connect: 'Connect wallet',
		logout: 'Log out',
	},
	/**
   * @description copy keys for passkeys creation flow for existent embedded wallets
   * @default
   * {
      code: {
        action_based_description: 'To {{action}} verify account.',
        description: 'A secure code has been sent to {{email}}.',
        input_label: 'Enter your code here...',
        title: 'Verification code sent',
        resend: {
          button: 'Resend code',
          text: "Didn't receive a code?",
        },
        complete_transaction_action: 'complete transaction',
        sign_message_action: 'sign this message',
      },
      complete: {
        complete_button: 'Create a passkey',
        description:
          'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
        title: 'Secure your account',
      },
      start: {
        description:
          'A one-time security code will be sent to the email on file. It will expire in 15 minutes.',
        start_button: 'Send me an email',
        title: 'Send Email Code',
      },
    }
   */
	dyn_passkey_secure_modal: {
		code: {
			action_based_description: 'To {{action}} verify account.',
			description: 'A secure code has been sent to {{email}}.',
			input_label: 'Enter your code here...',
			title: 'Verification code sent',
			resend: {
				button: 'Resend code',
				text: "Didn't receive a code?",
			},
			complete_transaction_action: 'complete transaction',
			sign_message_action: 'sign this message',
		},
		complete: {
			complete_button: 'Create a passkey',
			description:
				'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
			title: 'Secure your account',
		},
		start: {
			description:
				'A one-time security code will be sent to the email on file. It will expire in 15 minutes.',
			start_button: 'Send me an email',
			title: 'Send Email Code',
		},
	},
	/**
   * @description copy keys for save password view
   * @default
   * {
      badge_text: 'Important!',
      checkbox_label: 'I have safely stored a copy of my passcode.',
      continue: 'Continue',
      copy_button: {
        copy: 'Copy',
        copied: 'Copied',
      },
      description: 'You must retain a copy of this passcode.',
      download_button: 'Download',
      logout: 'Log out',
      password_input: {
        label: 'Passcode',
        placeholder: 'Passcode',
      },
      title: 'Save passcode',
      warning:
        'If you lose your passcode, you cannot recover access to your account.',
    }
   */
	dyn_save_password: {
		badge_text: 'Important!',
		checkbox_label: 'I have safely stored a copy of my passcode.',
		continue: 'Continue',
		copy_button: {
			copy: 'Copy',
			copied: 'Copied',
		},
		description: 'You must retain a copy of this passcode.',
		download_button: 'Download',
		logout: 'Log out',
		password_input: {
			label: 'Passcode',
			placeholder: 'Passcode',
		},
		title: 'Save passcode',
		warning:
			'If you lose your passcode, you cannot recover access to your account.',
	},
	/**
   * @description copy keys for secure pregenerated embedded wallet
   * @default
   * {
      description: 'Make transactions simpler and more secure.',
      action: 'Get started'
   }
   */
	dyn_secure_pregenerated_wallet: {
		description: 'Make transactions simpler and more secure.',
		action: 'Get started',
	},
	/**
   * @description copy keys for send transaction flow views
   * @default
   * {
      confirmation: {
        cancel_button: 'Cancel',
        confirm_button: 'Confirm',
        data: {
          amount: 'Amount',
          from: 'From (You)',
          gas: 'Gas',
          gas_estimate: 'Network Fee',
          to: 'To',
          total: 'Total',
        },
        not_applied: 'N/A',
        title: 'Confirm transaction',
      },
      data: {
        amount: {
          label: 'Amount',
          placeholder: 'Select amount',
        },
        balance: {
          label: 'Balance:',
        },
        from: 'Send from',
        recipient: {
          label: 'Recipient',
          placeholder: 'Enter wallet address...',
        },
      },
      multiple_recipients: 'Multiple',
      send_button: 'Send now',
      succeeded: {
        continue_button: 'Continue',
        network: {
          label: 'Network',
        },
        recipient: {
          label: 'Recipient',
        },
        title: 'Transaction successfully sent',
        total_amount: {
          label: 'Total amount',
        },
      },
      validation: {
        amount: {
          invalid_decimals: 'Please enter a value up to the {{decimals}}th decimal place.',
          invalid_format: 'The amount is in invalid format',
          over_balance: 'Insufficient funds to send this amount.',
          required: 'The amount field is required',
        },
        recipient: {
          invalid_format: 'The address is in invalid format',
          required: 'The recipient is required',
        },
      },
      warning_message: {
        insufficient_funds: 'Insufficient funds due to gas price increase from estimate. Please add {{amountLeft}} {{currencySymbol}} to continue.',
      },
      error_message: {
        gas_not_sponsored: 'The gas fee has increased. Confirm if you still want to complete this transaction.',
      },
    }
   */
	dyn_send_transaction: {
		confirmation: {
			cancel_button: 'Cancel',
			confirm_button: 'Confirm',
			send: 'Confirm',
			data: {
				amount: 'Amount',
				from: 'From (You)',
				gas: 'Gas',
				gas_estimate: 'Network Fee',
				to: 'To',
				total: 'Total',
				wallet_used: 'Wallet used',
				network: 'Network',
				recipient: 'Recipient',
				destination: 'Interacting with',
				gas_tooltip:
					'Gas fees are charged by the network and can change quickly based on usage.',
				sending: 'Sending',
				receiving: 'Receiving',
				transfer: {
					send: 'Send',
					receive: 'Receive',
				},
			},
			not_applied: 'N/A',
			title: 'Confirm transaction',
		},
		data: {
			amount: {
				label: 'Amount',
				placeholder: 'Enter amount',
			},
			balance: {
				label: 'Balance:',
			},
			from: 'Send from',
			send: 'Send',
			send_preview: 'Send Preview',
			confirmation_tx: 'Confirm Transaction',
			banner: "You're nearly done! Confirm transaction to proceed.",
			recipient: {
				label: 'Address',
				placeholder: 'Enter wallet address...',
			},
		},
		multiple_recipients: 'Multiple',
		preview_transaction: 'Preview transaction',
		send_button: 'Send now',
		succeeded: {
			continue_button: 'Done',
			network: {
				label: 'Network',
			},
			recipient: {
				label: 'Recipient',
			},
			title: 'Transaction successfully sent to',
			total_amount: {
				label: 'Total amount',
			},
		},
		validation: {
			amount: {
				invalid_decimals:
					'Please enter a value up to the {{decimals}}th decimal place.',
				invalid_format: 'The amount is in invalid format',
				over_balance: 'Insufficient funds to send this amount.',
				required: 'The amount field is required',
			},
			recipient: {
				invalid_format: 'The address is in invalid format',
				required: 'The recipient is required',
			},
		},
		info_message: {
			refresh_balance_time: 'Your balance may take up to 30s to refresh.',
		},
		warning_message: {
			insufficient_funds: {
				title: 'Insufficient funds',
				description:
					'Insufficient funds for transaction. Please add {{amountLeft}} {{currencySymbol}} to continue.',
			},
			insufficient_gas_funds: {
				title: 'Insufficient gas funds',
				description:
					'Please add {{amountLeft}} {{currencySymbol}} to continue.',
			},
			failed_simulation: {
				title: 'Transaction expected to fail',
				description: 'Something went wrong. Check your balances and try again.',
			},
		},
		error_message: {
			gas_not_sponsored:
				'The gas fee has increased. Confirm if you still want to complete this transaction.',
		},
	},
	/**
   * @description copy keys for Select Chain view
   * @default
   * {
      description: "This wallet supports multiple chains. Select which chain you'd like to connect to",
      using_hardware_wallet_toggle_label: 'Using Ledger',
    }
   */
	dyn_select_chain: {
		description:
			"This wallet supports multiple chains. Select which chain you'd like to connect to",
		using_hardware_wallet_toggle_label: 'Using Ledger',
	},
	/**
   * @description copy keys for Select Wallet view
   * @default
   * {
      description: "This wallet supports multiple chains. Select which chain you'd like to connect to",
      using_hardware_wallet_toggle_label: 'Using Ledger with {{chainName}}',
    }
   */
	dyn_select_wallet: {
		description: 'Select your preferred {{walletName}} wallet?',
	},
	/**
   * @description copy keys for Select Chain view
   * @default
   * {
      title: "Connect",
      description:
        "This wallet supports using ledger. Toggle on ledger to enable it.",
      using_hardware_wallet_toggle_label: "Using Ledger with {{chainName}}",
      button: "Connect",
    }
   */
	dyn_select_hardware_wallet: {
		title: 'Connect',
		description:
			'This wallet supports using ledger. Toggle on ledger to enable it.',
		using_hardware_wallet_toggle_label: 'Using Ledger with {{chainName}}',
		button: 'Connect',
	},
	/**
   * @description copy keys for sign message flow views
   * @default
   * {
      cancel_button: 'Cancel',
      sign_button: 'Sign',
      title: 'Requesting Signature',
    }
   */
	dyn_sign_message: {
		cancel_button: 'Cancel',
		sign_button: 'Sign',
		title: 'Requesting Signature',
	},
	/**
   * @description copy keys for social redirect view
   * @default
   * {
      logging_in: 'Logging you in',
    }
   */
	dyn_social_redirect: {
		logging_in: 'Logging you in',
	},
	/**
   * @description copy keys for wallet redirect view
   * @default
   * {
      loading: 'Loading...',
    }
   */
	dyn_wallet_redirect: {
		loading: 'Loading...',
	},
	/**
   * @description copy keys for messages related to time since a date
   * @default
   * {
      second: 'second',
      seconds: 'seconds',
      minute: 'minute',
      minutes: 'minutes',
      hour: 'hour',
      hours: 'hours',
      day: 'day',
      days: 'days',
      month: 'month',
      months: 'months',
      year: 'year',
      years: 'years',
      ago: 'ago',
      created: 'Created',
   }
   */
	dyn_time_since: {
		second: 'second',
		seconds: 'seconds',
		minute: 'minute',
		minutes: 'minutes',
		hour: 'hour',
		hours: 'hours',
		day: 'day',
		days: 'days',
		month: 'month',
		months: 'months',
		year: 'year',
		years: 'years',
		ago: 'ago',
		created: 'Created',
	},
	/**
   * @description copy keys for connecting wallets view
   * @default
   * {
      mobile: {
        wallet_list: {
          helper: 'Get your first wallet',
          title: 'WalletConnect wallets',
        },
      },
    }
   */
	dyn_wallet_conect: {
		mobile: {
			wallet_list: {
				helper: 'Get your first wallet',
				title: 'WalletConnect wallets',
			},
		},
	},
	/**
   * @description copy keys for linking wallets to profile view
   * @default
   * {
      cannot_link: {
        cancel_button: 'Cancel',
        description: 'This wallet is the only wallet in your other account. You cannot transfer it, since then you will lose access to that account.',
        link_other_button: 'Link a different wallet',
        title: 'Cannot link this wallet to a new account',
      },
      confirm_button: 'Link wallet to current account',
      existent_account: {
        acceptance: 'I understand that linking this wallet means that I will lose access to the other account.',
        warning: 'Linking your wallet to this account will unlink it from its previously associated account',
      },
      log_out_button: 'Log out',
      title: 'Transfer this wallet?'
    }
   */
	dyn_wallet_link: {
		cannot_link: {
			cancel_button: 'Cancel',
			description:
				'This wallet is the only wallet in your other account. You cannot transfer it, since then you will lose access to that account.',
			link_other_button: 'Link a different wallet',
			title: 'Cannot link this wallet to a new account',
		},
		confirm_button: 'Link wallet to current account',
		existent_account: {
			acceptance:
				'I understand that linking this wallet means that I will lose access to the other account.',
			warning:
				'Linking your wallet to this account will unlink it from its previously associated account',
		},
		log_out_button: 'Log out',
		title: 'Transfer this wallet?',
		already_exists: {
			title: 'Wallet Already Linked',
			description:
				'This wallet is already used as an embedded wallet. You cannot link it unless you delete the existing embedded wallet.',
		},
	},
	/**
   * @description copy keys for connecting wallets list view
   * @default
   * {
      configuration_mismatch: 'Oops, no login methods have been configured.',
      helper: 'Get your first wallet',
      search: {
        label: 'Search through {{numberOfWallets}} wallets...',
        not_found: {
          description: 'The wallet you’re looking for may not be available, or linking more than one of these wallets might not be possible.',
          title: 'Wallet not available',
        },
      },
      title: {
        connect: 'Connect a new wallet',
        link: 'Link a new wallet',
        select: 'Select your wallet',
      },
      view_all: 'View all wallets',
      wallet_missing: {
        description: 'Try search instead',
        title: "Don't see your wallet?",
      },
    }
   */
	dyn_wallet_list: {
		configuration_mismatch: 'Oops, no login methods have been configured.',
		helper: 'Get your first wallet',
		search: {
			label: 'Search through {{numberOfWallets}} wallets...',
			not_found: {
				description:
					'The wallet you’re looking for may not be available, or linking more than one of these wallets might not be possible.',
				title: 'Wallet not available',
			},
		},
		title: {
			connect: 'Connect a new wallet',
			link: 'Link a new wallet',
			select: 'Select your wallet',
		},
		view_all: 'View all wallets',
		wallet_missing: {
			description: 'Try search instead',
			title: "Don't see your wallet?",
		},
	},
	/**
   * @description copy keys for transferring wallets between accounts view
   * @default
   * {
      sign: {
        spinner: {
          cancel: 'Cancel',
          confirm_transfer:
          'Sign the message to confirm transferring this wallet to this account.',
        },
        title: 'Sign to confirm transfer',
      },
    }
   */
	dyn_wallet_transfer: {
		sign: {
			spinner: {
				cancel: 'Cancel',
				confirm_transfer:
					'Sign the message to confirm transferring this wallet to this account.',
			},
			title: 'Sign to confirm transfer',
		},
	},
	/**
   * @description copy keys for Dynamic widget
   * @default
   * {
      connect: 'Log in or sign up',
      empty_wallets: '{{action}} additional wallets to see them here.',
      other_wallets: 'My other wallets',
    }
   */
	dyn_widget: {
		connect: 'Log in or sign up',
		empty_wallets: '{{action}} additional wallets to see them here.',
		other_wallets: 'My other wallets',
		empty_wallets_action_link: 'Link',
		empty_wallets_action_connect: 'Connect',
	},
	/**
   * @description copy keys for Dynamic wallet information card
   * @default
   * {
      balance: 'Balance'
    }
   */
	dyn_wallet_information: {
		balance: 'Balance',
		multi_asset: {
			empty_state: 'No assets in this wallet',
		},
	},
	/**
   * @description copy keys for Unlink wallet prompt
   * @default
   * {
      disconnect_title: 'Disconnect your wallet?',
      unlink_title: 'Unlink your wallet?',
      disconnect_description: 'Are you sure you want to disconnect your wallet?',
      unlink_description: 'Are you sure you want to unlink your wallet?',
      disconnect_button: 'Yes, disconnect',
      unlink_button: 'Yes, unlink',
      cancel_button: 'No',
    }
   */
	dyn_unlink_wallet_pop_up: {
		disconnect_title: 'Disconnect your wallet?',
		unlink_title: 'Unlink your wallet?',
		disconnect_description: 'Are you sure you want to disconnect your wallet?',
		unlink_description: 'Are you sure you want to unlink your wallet?',
		disconnect_button: 'Yes, disconnect',
		unlink_button: 'Yes, unlink',
		cancel_button: 'No',
	},
	/**
   * @description copy keys for the user profile widget
   * @default
   * {
      my_information: {
        title: 'My information',
      },
      my_wallet: {
        title: 'My wallet',
      },
      social_accounts: {
        title: 'Social accounts',
      },
      tooltips: {
        verified_email: 'This email is verified',
        verified_phone: 'This phone number is verified',
      },
      wallets: {
        link_wallet_button: 'Link wallet',
        title: 'Wallets',
      },
    }
   */
	dyn_user_profile: {
		my_information: {
			title: 'My information',
		},
		my_wallet: {
			title: 'My wallet',
		},
		social_accounts: {
			title: 'Social accounts',
		},
		tooltips: {
			verified_email: 'This email is verified',
			verified_phone: 'This phone number is verified',
		},
		wallets: {
			link_wallet_button: 'Link wallet',
			title: 'Want to add a wallet?',
		},
		edit_profile_button: 'Edit Profile',
	},
	/**
   * @description copy keys for Dynamic subdomain field
   * @default
   * {
      label: 'Subdomain Handle',
      available: 'Subdomain is available',
      not_available: 'Subdomain is not available',
      error: 'Subdomain check failed',
      details:
        'A subdomain handle will create a unique ENS subdomain for your wallet, helping you easily share and identify it.',
    }
   */
	dyn_subdomain_field: {
		label: 'Subdomain Handle',
		available: 'Subdomain is available',
		not_available: 'Subdomain is not available',
		error: 'Subdomain check failed',
		details:
			'A subdomain handle will create a unique ENS subdomain for your wallet, helping you easily share and identify it.',
	},
	/**
   * @description copy keys for Detected new wallet prompt
   * @default
   * {
      title: 'Account Change Detected',
      description: 'Your active account in {{walletName}} has changed. This account is not currently linked to this app. Do you want to add it?',
      confirm_button: 'Yes, link this wallet',
    }
   */
	dyn_detected_new_wallet: {
		title: 'Account Change Detected',
		description:
			'Your active account in {{walletName}} has changed. This account is not currently linked to this app. Do you want to add it?',
		confirm_button: 'Yes, link this wallet',
	},
	/**
     * @description copy keys for sync wallet view
     * @default
     * {
        switch_wallet: {
          title: 'Your wallets are mismatched. \nSwitch to continue.',
          active_address: {
            heading: 'Currently active in wallet',
          },
          expected_address: {
            heading: 'Currently active on website',
            prompt: 'Manually switch to this wallet',
          },
        },
        reconnecting: {
          title: 'This wallet is not connected',
          description: 'Reconnecting wallet {{walletAddress}} to make it active...',
        },
        reconnect_with_qr_code: {
          title: 'This wallet is not connected',
        },
        cancel_button: 'Cancel',
        retry_button: 'Retry',
      }
    */
	dyn_sync_wallet: {
		switch_wallet: {
			title: 'Your wallets are mismatched. \nSwitch to continue.',
			active_address: {
				heading: 'Currently active in wallet',
			},
			expected_address: {
				heading: 'Currently active on website',
				prompt: 'Manually switch to this wallet',
			},
		},
		reconnecting: {
			title: 'This wallet is not connected',
			description: 'Reconnecting wallet {{walletAddress}} to make it active...',
		},
		reconnect_with_qr_code: {
			title: 'This wallet is not connected',
		},
		cancel_button: 'Cancel',
		retry_button: 'Retry',
	},
	/**
   * @description copy keys for the wallet funding flow
   * @default
   * {
      success: 'Transaction processing',
      success_txn_link: 'View transaction',

      funding_method_selection: {
        title: 'Deposit',
        qr_option: 'Receive by QR',
        buy_option: 'Buy Crypto',
        external_wallet_option: 'From External Wallets',
      },
      onramp_provider_selection: {
        title: 'Select provider',
        description: 'Select from a list of available onramp providers.',
      },
      from_external_wallet: {
        wallet_list: {
          title: 'Fund from Wallet',
        },
        funding_view: {
          title: 'Fund from Wallet',
          wallet_detail_from: 'From',
          confirm_button: 'Confirm Transaction',
          pricing_unavailable:
            'Pricing unavailable.',
          minimum_error: 'Minimum {{minimum}}',
          balance_error: 'Insufficient funds',
        },
        token_select: {
          title: 'Select a Token',
          search_placeholder: 'Search for a token',
          no_assets_title: 'No Supported Assets',
          no_assets_description: 'This wallet does not support any assets',
        },
      },
    }
   */
	dyn_wallet_funding: {
		success: 'Transaction processing',
		success_txn_link: 'View transaction',
		funding_method_selection: {
			title: 'Deposit',
			qr_option: 'Receive by QR',
			buy_option: 'Buy Crypto',
			external_wallet_option: 'From External Wallets',
		},
		onramp_provider_selection: {
			title: 'Select provider',
			description: 'Select from a list of available onramp providers.',
		},
		from_external_wallet: {
			wallet_list: {
				title: 'Fund from External Wallet',
			},
			funding_view: {
				title: 'Fund from External Wallet',
				wallet_detail_from: 'From',
				confirm_button: 'Confirm Transaction',
				pricing_unavailable: 'Pricing unavailable.',
				minimum_error: 'Minimum {{minimum}}',
				balance_error: 'Insufficient funds',
			},
			token_select: {
				title: 'Select a Token',
				search_placeholder: 'Search for a token',
				no_assets_title: 'No Supported Assets',
				no_assets_description: 'No supported assets in this wallet',
			},
		},
	},
	/**
   * @description copy keys for Dynamic widget header
   * @default
   * {
      buttons: {
        deposit_funds: 'Deposit',
        send_funds: 'Send',
        more: 'More',
      },
    }
   */
	dyn_widget_header: {
		buttons: {
			deposit_funds: 'Deposit',
			send_funds: 'Send',
			more: 'More',
		},
	},
} satisfies LocaleResource['en']
