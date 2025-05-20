#!/usr/bin/env node --experimental-strip-types

import { createPublicClient, http } from 'viem'
import { filecoinCalibration } from 'viem/chains'
import { pdpVerifierAbi, pdpVerifierAddress } from './generated/contracts.ts'

const client = createPublicClient({
  chain: filecoinCalibration,
  transport: http(),
})

const blockNumber = await client.getBlockNumber()
console.log('Chain head:', blockNumber)

const result = await client.readContract({
  address: pdpVerifierAddress,
  abi: pdpVerifierAbi,
  functionName: 'getNextProofSetId',
})

console.log('nextProofSetId:', result)
