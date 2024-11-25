const crypto = require("crypto");

const targetHash = "5531a5834816222280f20d1ef9e95f69";

function bruteForcePin() {
  for (let pin = 0; pin <= 9999; pin++) {
    const pinStr = pin.toString().padStart(4, "0");

    const hash = crypto.createHash("md5").update(pinStr).digest("hex");

    if (hash === targetHash) {
      console.log(`Alice's PIN is: ${pinStr}`);
      return pinStr;
    }
  }

  console.log("PIN not found.");
  return null;
}

bruteForcePin();
