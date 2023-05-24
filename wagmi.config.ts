import { defineConfig } from '@wagmi/cli'
import { foundry, react, actions } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

const foundryConfig = foundry({
	forge: {
		build: true,
		clean: true,
		rebuild: true,
	},
	deployments: {
		// TODO: this needs to be loaded from some
		// Counter: {
		// 	[chains.mainnet.id]: '0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac',
		// 	[chains.goerli.id]: '0x78991BB1D194C1235fe285240af8489CFA552151',
		// 	[chains.foundry.id]: '0xbe18A1B61ceaF59aEB6A9bC81AB4FB87D56Ba167',
		// },
	},
	// project: './contracts',
})

export default defineConfig([
	{
		out: 'hooks/react.ts',
		plugins: [foundryConfig, react()],
	},
	{
		out: 'hooks/actions.ts',
		plugins: [foundryConfig, actions()],
	},
])
