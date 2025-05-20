//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PDPVerifier
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pdpVerifierAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'BURN_ACTOR',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXTRA_DATA_MAX_SIZE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FIL_USD_PRICE_FEED_ID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LEAF_SIZE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_ENQUEUED_REMOVALS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_ROOT_SIZE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NO_CHALLENGE_SCHEDULED',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NO_PROVEN_EPOCH',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PYTH',
    outputs: [{ name: '', internalType: 'contract IPyth', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'RANDOMNESS_PRECOMPILE',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SECONDS_IN_DAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'rootData',
        internalType: 'struct PDPVerifier.RootData[]',
        type: 'tuple[]',
        components: [
          {
            name: 'root',
            internalType: 'struct Cids.Cid',
            type: 'tuple',
            components: [
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'rawSize', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'addRoots',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'estimatedGasFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'calculateProofFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimProofSetOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'listenerAddr', internalType: 'address', type: 'address' },
      { name: 'extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createProofSet',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteProofSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'leafIndexs', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'findRootIds',
    outputs: [
      {
        name: '',
        internalType: 'struct PDPVerifier.RootIdAndOffset[]',
        type: 'tuple[]',
        components: [
          { name: 'rootId', internalType: 'uint256', type: 'uint256' },
          { name: 'offset', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChallengeFinality',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'getChallengeRange',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFILUSDPrice',
    outputs: [
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'int32', type: 'int32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'getNextChallengeEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNextProofSetId',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'getNextRootId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProofSetLastProvenEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProofSetLeafCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProofSetListener',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProofSetOwner',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'getRandomness',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'rootId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRootCid',
    outputs: [
      {
        name: '',
        internalType: 'struct Cids.Cid',
        type: 'tuple',
        components: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'rootId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRootLeafCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'getScheduledRemovals',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_challengeFinality', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'challengeEpoch', internalType: 'uint256', type: 'uint256' },
      { name: 'extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'nextProvingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'setId', internalType: 'uint256', type: 'uint256' }],
    name: 'proofSetLive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'proposeProofSetOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'proofs',
        internalType: 'struct PDPVerifier.Proof[]',
        type: 'tuple[]',
        components: [
          { name: 'leaf', internalType: 'bytes32', type: 'bytes32' },
          { name: 'proof', internalType: 'bytes32[]', type: 'bytes32[]' },
        ],
      },
    ],
    name: 'provePossession',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'rootId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rootChallengable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'rootId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rootLive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'setId', internalType: 'uint256', type: 'uint256' },
      { name: 'rootIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'scheduleRemovals',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ContractUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'challengeEpoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'leafCount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NextProvingPeriod',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'challenges',
        internalType: 'struct PDPVerifier.RootIdAndOffset[]',
        type: 'tuple[]',
        components: [
          { name: 'rootId', internalType: 'uint256', type: 'uint256' },
          { name: 'offset', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'PossessionProven',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'reason', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'PriceOracleFailure',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'fee', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'price', internalType: 'uint64', type: 'uint64', indexed: false },
      { name: 'expo', internalType: 'int32', type: 'int32', indexed: false },
    ],
    name: 'ProofFeePaid',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ProofSetCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'deletedLeafCount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProofSetDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ProofSetEmpty',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ProofSetOwnerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'rootIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'RootsAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'setId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'rootIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'RootsRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  {
    type: 'error',
    inputs: [
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
      { name: 'msg', internalType: 'string', type: 'string' },
    ],
    name: 'IndexedError',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
] as const

export const pdpVerifierAddress =
  '0x5A23b7df87f59A291C26A2A1d684AD03Ce9B68DC' as const

export const pdpVerifierConfig = {
  address: pdpVerifierAddress,
  abi: pdpVerifierAbi,
} as const
