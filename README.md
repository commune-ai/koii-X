<!-- language-all: javascript -->

<h1 align="center">
  <img src="https://raw.githubusercontent.com/koii-network/koii.X/main/.github/images/koii_logo.svg" width="224px"/><br/>
  Create Koii App :fish:
</h1>
<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="typescript" />&nbsp;
   <a href="https://discord.gg/koii" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=flat&logo=discord&logoColor=white" alt="cli version" /></a>&nbsp;
   <a href="http://koii.network/" target="_blank"> <img src="https://img.shields.io/badge/made%20by-koii-blue" alt="made-by-koii" /></a>&nbsp;
</p>

## ⚡️ Quick start

First of all, run `npx create-koii-app` to create a Koii Dapp.

After the installation is done head to the installed project and inside it run `yarn start`.

(If the `yarn start` doesn't work, please try `react-scripts --openssl-legacy-provider start`)

## Table of Contents

- [Tech stack](#tech-stack)
- [Structure](#structure)
- [Examples](#examples)
  - [useFinnie](#useFinnie)
- [Customization](#customization)
- [Crowdfunding Portal](#crowdfunding)
- [Environment](#environment)
  - [Node](#node)
  - [Yarn](#yarn)

# Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://www.typescriptlang.org/): React-query is data fetching, caching & synchronization for React. Also it acts a state management (kinda :sweat_smile:).
- [Chakra UI](https://chakra-ui.com/): An opinionated UI framework

# Structure

Describes the app structure and usage of each part.

- [pages](./src/pages) - your app pages, e.g [/home](https://koii-x.vercel.app/), [/nft/:id](https://koii-x.vercel.app/nft/8nS--L8xnFBIA1f1hiS71iCAmyBEeEz-cpqYiDVjMvI) & [/artist/:id](https://koii-x.vercel.app/artist/CfvJqETL1hpeSAfc6cXx-vexXxCso7nq7Xya76tDzXE) The [pages](./src/pages/) are normally linked with react-router [routes](./src/routes/index.tsx)

```javascript
📦pages
 ┣ 📂artist
 ┃ ┗ 📜index.tsx
 ┣ 📂home
 ┃ ┗ 📜index.tsx
 ┣ 📂nft
 ┃ ┗ 📜index.tsx
```

- [services](./src/services) - shared services such as axios, [Koii port](https://www.npmjs.com/package/@_koi/port) & [utility functions](./src/services/utils/index.ts).

```
📦services
 ┣ 📂axios
 ┃ ┗ 📜index.ts
 ┣ 📂port
 ┃ ┗ 📜index.js
 ┗ 📂utils
 ┃ ┗ 📜index.ts
```

- [assets](./src/assets) - place images, svgs and any assets here
- [components](./src/components) - place any shared components here, This folder contains every single re-usable component.

```
📦components
 ┣ 📂buttons
 ┃ ┣ 📂ToggleButton
 ┃ ┃ ┣ 📜ToggleButton.tsx
 ┃ ┃ ┗ 📜ToggleButtonGroup.tsx
 ┣ 📂cards
 ┃ ┣ 📂NftCard
 ┃ ┣ 📂NftFeaturedCard
 ┣ 📂common /* Common components that you probably see on most pages */
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Nav
 ┃ ┣ 📂NftFootbar
 ┃ ┣ 📂NftMediaContainer
 ┣ 📂filters
 ┃ ┣ 📂NsfwFilter
 ┃ ┣ 📂TimeFilter
 ┣ 📂finnie
 ┣ 📂icons
 ┣ 📂layouts
 ┣ 📂modals
 ┃ ┣ 📜ReportModal.tsx /* Report NFT modal */
 ┃ ┣ 📜ShareModal.tsx /* Share NFT modal (with socials) */
 ┃ ┣ 📜TipArtistModal.tsx /* Tip artist (by wallet address) modal */
 ┣ 📂ui /* Re-usable UI components */
 ┗ 📂widgets
 ┃ ┣ 📂Leaderboard /* NFTs Leaderboard */
 ┃ ┣ 📜DragAndDropUploader.tsx /* Upload to Koi.rocks components */
 ┃ ┣ 📜TopNftsContent.tsx
 ┃ ┗ 📜index.ts
```

- [api](./src/api) - every single api call made here. e.g

```
📦api
 ┣ 📂hooks /* react-query hooks */
 ┃ ┣ 📜useArtist.ts /* Get the artist details */
 ┃ ┣ 📜useNft.ts /* Get the NFT details */
 ┃ ┣ 📜useNfts.ts /* Get all NFTs based on the timeframe, 24 hours, 1 week, 1 month, 1 year & even all of them */
 ┃ ┗ 📜useNsfw.ts /* Get NFTs marked as nsfw */
 ┃
 ┣ 📜finnie.ts /* Api calls to interact with finnie wallet */
 ┣ 📜index.ts /* Generic api calls */
 ┣ 📜sdk.ts /* Koii sdk api calls */
 ┗ 📜upload.ts /* Api related to upload to Koii network */
```

- [routes](./src/routes/index.tsx) - [react-router](https://reactrouter.com/web/guides/quick-start) implementation.

# Examples

## useFinnie

Use the `useFinnie` hook whenever you need to interact with finnie.

Example below how to connect to finnie wallet and get the wallet address with few lines of code:

```javascript
import { useFinnie } from "components/finnie";

function Component() {
  const {
    state: { connectFinnie, isLoading, isError, walletAddress, isFinnieConnected }
  } = useFinnie();

  return (
    <>
      <button onClick={connectFinnie}>{isLoading ? "Connecting..." : isFinnieConnected ? "Connected ✓" : "Connect to finnie"}</button>

      {isFinnieConnected && (
        <p>
          Connected. Your wallet address is: <code>{walletAddress}</code>
        </p>
      )}

      {isError && <p>An error occurred while connecting to finnie.</p>}
    </>
  );
}
```

# Customization

Edit the [config](./src/config) file to change the basic details about your app. e.g.

```javascript
const config = {
  lang: "en", // language of your website
  locale: "en_US", // locale of your website
  title: "Koii.X — Your Koii DApp",
  description: "Create Koii DApp",
  canonical: "http://koii-x.vercel.app/", // Your production website link
  twitterHandle: "@KoiiNetwork", // Twitter username
  companyName: "Koii"
};
```

To change the favicon, head to [public](./public) folder and replace the `favicon.svg` with yours.\
To change the logo, head to [assets](./src/assets) folder and replace the `logo.png` with yours.

# Crowdfunding

If you head to `/funding` route in your Koii.X dApp - [demo](https://koii-x.vercel.app/funding) - you'll see a default Crowdfunding portal that you can fully customize. To do so, head to [funding-config.tsx](./src/components/funding/funding-config.tsx) file in your app, you'll notice a `config` that you can change to match your portal config.

```javascript
const config = {
  title: "Plagiarism Registry DAO", // Project title
  companyLogo: "https://pbs.twimg.com/profile_images/1424786684194041859/lkDa9l1U_400x400.png", // Logo to appear in the navbar.
  companyName: "Koii Network Creator Studio",
  fundGoal: 1000, // Your funding goal in "eth"
  images: [
    // Images to be placed in the top slider
    { src: "https://picsum.photos/700" },
    { src: "https://picsum.photos/701" },
    { src: "https://picsum.photos/702" },
    { src: "https://picsum.photos/703" },
    { src: "https://picsum.photos/704" },
    { src: "https://picsum.photos/705" }
  ],
  socials: {
    // Your social network links
    website: "https://koii.network",
    twitter: "https://twitter.com/KoiiNetwork",
    discord: "https://discord.com/invite/koii",
    facebook: null,
    github: "https://github.com/koii-network"
  },
  paymentType: "ar", // 'eth' or 'ar' Portal currency "eth" (ethereum) or "ar" (Arweave)
  fundAddress: "_JHZaUrLyOVSf_t87GBASHXziurNqXmxJ0VgYg-rggM", // Your funding address that people will deposit to. (Ethereum or Arweave address, depends on paymentType)
  // A brief description about the project as html.
  about: (
    <div>
      <p>About us</p>
    </div>
  ),

  faqs: [
    // FAQs content
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" }
  ]
};
export default config;
```

# Environment

### Node

We recommend installing the latest LTS node version `v16.13.1` to provides stable compatibility with React

- **Node v16.XX** (`node --version`)

**[Or Download Node with NVM](https://github.com/nvm-sh/nvm#usage)**

### Yarn

We install and run our scripts with yarn, as an alternative to npm:

**[Download Yarn](https://yarnpkg.com/lang/en/docs/install/)**
