const fs = require('fs');

const data = {
  timestamp: new Date().toISOString(),
  message: "This JSON is json"
};

fs.writeFileSync('data.ts', JSON.stringify(data, null, 2));