let blockSize = 20;
let numBlocksX, numBlocksY;
let qrCode;
let frameRateValue = 5; // Adjust this value for slower/faster animation

function setup() {
  createCanvas(100, 100);
  clear();
  noStroke();
  frameRate(frameRateValue);
  
  numBlocksX = width / blockSize;
  numBlocksY = height / blockSize;
  
  // Initialize QR code pattern
  qrCode = generateQRCodePattern();
}

function draw() {
  
  clear();
  
  // Shift QR code pattern
  shiftQRCodePattern();
  
  // Draw the QR code pattern
  drawQRCodePattern();
}

function generateQRCodePattern() {
  let pattern = [];
  for (let y = 0; y < numBlocksY; y++) {
    let row = [];
    for (let x = 0; x < numBlocksX; x++) {
      row.push(random() > 0.5);
    }
    pattern.push(row);
  }
  return pattern;
}

function shiftQRCodePattern() {
  for (let y = 0; y < numBlocksY; y++) {
    for (let x = 0; x < numBlocksX; x++) {
      qrCode[y][x] = random() > 0.5;
    }
  }
}

function drawQRCodePattern() {
  for (let y = 0; y < numBlocksY; y++) {
    for (let x = 0; x < numBlocksX; x++) {
      let xPos = x * blockSize;
      let yPos = y * blockSize;
      
      if (qrCode[y][x]) {
        fill(13, 203, 140); // Green color
        rect(xPos, yPos, blockSize, blockSize);
      }
    }
  }
}

