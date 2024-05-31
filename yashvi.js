let nfts = [];

function mintNFT(name, age,work) {
  let nft = {
    name: name,
    age: age,
    work: work,
    id: nfts.length + 1
  };
  nfts.push(nft);
  console.log(`NFT #${nft.id} minted: ${nft.name}`);
}

function listNFTs() {
  if (nfts.length === 0) {
    console.log("No NFTs available.");
  } else {
    for (let i = 0; i < nfts.length; i++) {
      console.log(`NFT #${nfts[i].id}:`);
      console.log(`Name: ${nfts[i].name}`);
      console.log(`Age: ${nfts[i].age}`);
      console.log(`Work: ${nfts[i].work}`);
      console.log("--------------------");
    }
  }
}

function getTotalSupply() {
  return nfts.length;
}


mintNFT("NFT 1", "Age is 26", "GAMER");
mintNFT("NFT 2", "Age is 37", "CODER");
mintNFT("NFT 3", "Age is 22", "ART ");

listNFTs();

console.log(`Total NFT supply: ${getTotalSupply()}`);
