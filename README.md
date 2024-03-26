<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
 
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="vnx-tezos.png" alt="Logo" width="300" >
  </a>

  <h3 align="center">VNX Smart Contracts for Tezos</h3>

  <p align="center">
    smart contract source code for VNX tokens
    <br />
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

This repo contains the smart contract for VNX tokens that will be issued on Tezos blockchain. 
The contracts have been developed using Archetype language. 

<!-- GETTING STARTED -->
## Getting Started

The source code of the contract can be found in 
 ```sh
  cd contracts
  ```
### Prerequisites

To test the contracts you need to install the required modules.
* npm
  ```sh
  npm install 
  ```
### Unit Test running
To run the Unit Test few modules should be installed first: 

* Tezos Client Installation and Setup (MacOS)
  ```sh
    brew tap serokell/tezos-packaging-stable https://github.com/serokell/tezos-packaging-stable.git
    brew install tezos-client
  ```
  For other Operating system check [Tezos Clients](https://wiki.tezosagora.org/build/clients/installation-and-setup)
  
  Use these commands to fix issues 
  ````
  brew doctor
  brew cleanup
``   
* Initialize Completium environment

  ```sh
    npm run completium_init
  ```
* Setup Completium Mockup endpint
  ```sh
    npm run mockup_init
  ```
* Run Test
  ```sh
    npm run test-dgr
    npm run test-frt
  ```


<!-- LICENSE -->
## License

Distributed under the MIT License.

<!-- CONTACT -->
## Contact

Wazen Shbair - [@WazenShbair](https://twitter.com/WazenShbair) - wazen.shbair@vnx.io

Eugene Gavrilov - eugene.gavrilov@vnx.io

<p align="right">(<a href="#readme-top">back to top</a>)</p>
