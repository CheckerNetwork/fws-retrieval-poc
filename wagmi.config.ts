import { defineConfig } from '@wagmi/cli'
import type { Abi } from 'viem'
import PDPVerifierAbi from './vendored/PDPVerifier.abi.json' with { type: 'json' }

/** @type {import('@wagmi/cli').Config} */
export default defineConfig({
  out: 'generated/contracts.ts',
  contracts: [
    {
      name: 'PDPVerifier',
      abi: PDPVerifierAbi as Abi,
      address: '0x5A23b7df87f59A291C26A2A1d684AD03Ce9B68DC', // on Calibration testnet
    },
  ],
  plugins: [],
})
