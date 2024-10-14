# Geni-Sys-Rec (Tax Record Smart Contract)

This project implements a simple tax record system on the Ethereum blockchain using Hardhat and TypeScript. It allows for adding, retrieving, and deleting tax records on the blockchain.

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- An Ethereum wallet (like MetaMask)
- Alchemy API key (for deploying to testnets/mainnet)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/geni-sys-rec.git
   cd geni-sys-rec
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your configuration:
   ```
   SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
   SEPOLIA_PRIVATE_KEY=your_sepolia_private_key
   MAINNET_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
   MAINNET_PRIVATE_KEY=your_mainnet_private_key
   ETHERSCAN_API_KEY=your_etherscan_api_key
   ```

## Compilation

Compile the smart contracts:

```bash
npx hardhat node
npx hardhat run scripts/interact.ts --network sepolia
```

```
npx hardhat compile
```

## Testing

Run the test suite:

```
npx hardhat test
```

## Deployment

To deploy to Sepolia testnet:

```
npx hardhat run scripts/deploy.ts --network sepolia
```

To deploy to Ethereum mainnet:

```
npx hardhat run scripts/deploy.ts --network mainnet
```

To deploy to local Hardhat network:

```
npx hardhat node
npx hardhat run scripts/deploy.ts --network localhost
```

## Contract Interaction

After deployment, you can interact with the contract using the Hardhat console or by creating additional scripts in the `scripts` folder.

To use the Hardhat console:

```
npx hardhat console --network sepolia
```

Then you can interact with the contract:

```javascript
const TaxRecord = await ethers.getContractFactory("TaxRecord");
const taxRecord = await TaxRecord.attach("DEPLOYED_CONTRACT_ADDRESS");
await taxRecord.addRecord("John Doe", ethers.parseEther("1.5"));
const record = await taxRecord.getRecord(1);
console.log(record);
```

## Gas Management

For development on Sepolia, you can get free ETH from a Sepolia faucet. Some options include:

- [Alchemy Sepolia Faucet](https://sepoliafaucet.com/)
- [Infura Sepolia Faucet](https://www.infura.io/faucet/sepolia)

For production deployment on mainnet, ensure you have sufficient ETH in your account to cover gas fees.

## Project Structure

```
geni-sys-rec/
├── contracts/
│   └── TaxRecord.sol
├── scripts/
│   ├── deploy.ts
│   └── interact.ts
├── test/
│   └── TaxRecord.test.ts
├── .env
├── .gitignore
├── hardhat.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.