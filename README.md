<p align="center">
  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/helicopter_1f681.png" />
</p>
<p align="center">
|
<br/>
|
<br/>
|
<br/>
  <b>Airdrops</b> && <b>POAPs</b>
</p>
<br/>

> 🚁 Claimable aggregates all known Ethereum airdrops and POAPs on one page.

> 🤑 If you use DeFi you might have money waiting you don't know about!

<br/>

## Want to add an airdrop or POAP?

There are two good ways.

### Option 1 - open a [GH Issue](https://github.com/dawsbot/claimable/issues/new) (slower)

Provide the folowing: 
```md
    url:
      "URL linking to csv of eligible addresses and amounts",

    imgSrc: "URL linking to project/protocol logo",
    claimUrl: "URL users go to in-order to claim",
    displayName: "Token name (UNI, TORN, etc.)",
```

#### A completed example
Issue title: "`Add Tornado cash`"

```md
    url:
      "https://raw.githubusercontent.com/tornadocash/airdrop/master/airdrop.csv",

    imgSrc: "/images/csv-claimables/torn.jpeg",
    claimUrl: "https://app.tornado.cash/airdrop/",
    displayName: "TORN",
```

### Option 2

1. Add the airdrop data source to the claimable lists.

- Add the required data to [csv-claimables](src/csv-claimables.ts) (everything in option 1 above).

2. Run `npm run build:claimable-data` (also ran on commit automatically in-case you forget)
3. Verify this created a new source file in `src/claimable-data/*` and that the master address data looks correct in `src/claimable-data/master-airdrop-data.json`

<br/>

## Web App Development

1.
```bash
npm install
```

2. Copy `.env.sample` to `.env` and replace with required variables

3.
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing pages in `pages/*`. They auto-update on save.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
