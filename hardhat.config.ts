import { config as dotEnvConfig } from 'dotenv';

import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';

dotEnvConfig();

const { PRIVATE_KEY, SEPOLIA_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
