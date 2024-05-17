import { dts } from 'rollup-plugin-dts'
import packageJson from './package.json' assert { type: 'json' }
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

const external = [
	...Object.keys(packageJson.dependencies),
	...Object.keys(packageJson.peerDependencies),
]

export default [
	{
		input: 'src/.build/src/components/Entry/Entry.js',
		external,
		output: [
			{
				dir: 'src/.build/Entry',
				format: 'es',
			},
		],
		plugins: [nodeResolve({ browser: true }), commonjs(), json()],
	},
	{
		input: 'src/.build/src/components/Entry/Entry.js',
		external,
		output: [
			{
				dir: 'src/.build/Entry',
				format: 'es',
			},
		],
		plugins: [nodeResolve(), dts()],
	},
]