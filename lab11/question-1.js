/**
 * Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address. 
 * (Search and learn 'dns' module, resolve4) - For this exercise, you need to look up Node.js API by yourself
 */

// Import the DNS module
const dns = require('dns');

// Domain name to resolve
const domain = 'www.miu.edu';

// Use resolve4 to get the IP address
dns.resolve4(domain, (err, addresses) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log(`IP Address for ${domain}: ${addresses[0]}`);
});

