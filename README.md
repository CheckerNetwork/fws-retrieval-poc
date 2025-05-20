# fws-retrieval-poc

## How to update PDPVerifier.abi.json

1. Clone https://github.com/FilOzone/pdp
2. Setup Foundry (see pdp repo README)
3. Run
   ```bash
   make build
   jq '.abi' out/PDPVerifier.sol/PDPVerifier.json > PDPVerifier.abi.json
   ```
4. Copy `PDPVerifier.abi.json` to `vendored` in this project
5. Run `wagmi generate`
