### forge-deploy issues

### To run

1. Install deps - `yarn`
2. Run Anvil - `yarn anvil`
3. Deploy contracts - `yarn deploy`

### Main issue
Deployments revert

```bash
[⠒] Compiling...
[⠘] Compiling 6 files with 0.8.13
[⠊] Solc 0.8.13 finished in 1.66s
Compiler run successful with warnings:
Warning (2018): Function state mutability can be restricted to view
  --> contracts/lib/forge-deploy/contracts/Deployer.sol:47:5:
   |
47 |     function readTagsFromContext(string calldata context) external returns (string[] memory tags) {
   |     ^ (Relevant source part starts here and spans across multiple lines).

Error: 
Failed to deploy script:
Execution reverted: EvmError: Revert (gas: 148202)
error Command failed with exit code 1.
```

### Other known issues

When compiling the contracts it is not possible to specify a relative path to the source contracts folder from where the output is generated.
Because of this, when running `yarn build` the paths to contracts will be wrong.

To fix replace all instances of `./contracts/XXX` with `../../contracts/XXX`

Thank you!
