const NFTs=[]
function mintNFT (name, year, country, category) {
    const NFT={
        name:name, year: year, country: country, category: category
    }
    NFTs.push(NFT);
}
function listNFTs () {
    console.log("NFTs are:");
for(let i=0;i<NFTs.length;i++)
{
    console.log(i+1+".");
    console.log("Name: "+NFTs[i].name);
    console.log("Year: "+NFTs[i].year);
    console.log("Country: "+NFTs[i].country);
    console.log("Category: "+NFTs[i].category);
    console.log("\n");

}
}
function getTotalSupply() {
console.log("The total  of NFTs are:"+NFTs.length);
}
mintNFT("Harshul",2003,"India", "Porsche");
mintNFT("Audi",2002,"Germany", "Vehicle");
mintNFT("Bose",2018,"Italy"," Phantom");
mintNFT("Maggi",2001,"America", "Eatable");
mintNFT("Chinos",2019,"Czech", "Wearables");
listNFTs();
getTotalSupply();
