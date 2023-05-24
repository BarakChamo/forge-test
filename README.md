### forge-deploy issues

### To run

1. Install deps - `yarn`
2. Run Anvil - `yarn anvil`
3. Deploy contracts - `yarn deploy`

### Known issues

When compiling the contracts it is not possible to specify a relative path to the source contracts folder from where the output is generated.
Because of this, when running `yarn build` the paths to contracts will be wrong.

To fix replace all instances of `./contracts/XXX` with `../../contracts/XXX`

Thank you!
