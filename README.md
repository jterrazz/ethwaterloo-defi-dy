# defi-dy

### Main app
```bash
yarn start
```

### 0x app
```bash
# Start with
REACT_APP_RELAYER_URL='https://api.openrelay.xyz/v2/' REACT_APP_NETWORK_ID=3 yarn start
```

## They talk about us
- [In the Defiant](https://thedefiant.substack.com/p/ethereum-hackers-built-key-infrastructure?utm_campaign=post&utm_medium=web&utm_source=copy)
- [@shanghaipreneur](https://steemleo.com/ethereum/@shanghaipreneur/it-took-just-2-days-to-create-this-potentially-game-changing-derivatives-platform)

## Inspiration
We wanted a way to be able to invest in a company based on its performance, not through stock speculation.

Defi products are the perfect use case for it as now with Defidy people can invest in protocols and performance rather than just assets, just like stocks but which are only affected by internal performance.

And so, we created a synthetic asset who's price is determined by several factors on compound. (e.g. borrowing power, supply power, etc), fed in data using chainlink oracles, performed computations at smart contract level and deployed our asset on 0x relayer.

## What it does
It can act as a future for people who want to long/short against the popularity/usage/collatorization ratio/borrowing power/supply power of the various financial protocols, for this hackathon we focused on compound.

## How we built it
- We started hacking on the UMA, had to extend and hack on it due to the way we were retrieving most of our data (on chain, instead of from an oracle written by the UMA team).
- Deployed a Synthetic token on Ropsten network using 0x relayer.
- Integrated with Fortmatic for easy user interface and experience.
- Deployed chainlink oracles for even more data sources and performed our computation algorithm to determine the performance of the compound protocol.
- Generated subgraph from our smart contract generated computations after each event is fired so we can query it easily from our frontend and display it our users.
- Deployed a TokenSale contract to sell the tokens, and 0x as a marketplace for holders to freely trade them.
- Wrote a frontend to interact with TokenSale and the deployed synthetic asset token.

## Challenges we ran into
- Reading solidity Interfaces and converting data types(lack of examples)
- Getting MetaMask to work reliably
- Inspecting old javascript code (with only callbacks)
- Getting Synthetic Token Builder to work (UMA docs were outdated)

## Accomplishments that we're proud of
- Completed our MVP at our weekend which finally works
- Worked as a team, everyone pulled their own weights
- Learnt some new truffle and solidity tricks
- Fixed a bug in UMA's repository, created PR

## What's next for Defi-dy
Implement more synthetic assets for other Defi protocols e.g. Maker, NUO, dy/dx, Aave Launch our first alpha live on defidy.co
