const app = require('./app');

if (typeof app === 'function') {
  console.log('Test passed');
  process.exit(0);
} else {
  console.log('Test failed');
  process.exit(1);
}
