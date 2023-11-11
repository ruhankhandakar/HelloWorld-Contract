import { ethers } from 'hardhat';
import { config } from 'dotenv';

config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const HelloWorldFactory = await ethers.getContractFactory('HelloWorld');
  const HelloWorldContract = await HelloWorldFactory.attach(CONTRACT_ADDRESS!);

  //Reading the current message stored
  const message = await HelloWorldContract.message();
  console.log('Current message stored:', message);

  //Updating the current message
  const tx = await HelloWorldContract.update('Good Bye, World!');
  await tx.wait();

  const newMessage = await HelloWorldContract.message();
  console.log('the new message is ' + newMessage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
