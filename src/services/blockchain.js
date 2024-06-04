import Web3 from 'web3';

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
        reject("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }
    });
  });

export default getWeb3;
