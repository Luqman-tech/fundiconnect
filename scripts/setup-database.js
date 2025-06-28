const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up database for Fundis & Freelancers platform...');

// Create logs directory
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
  console.log('✅ Created logs directory');
}

// Create database file for SQLite (development)
const dbPath = path.join(__dirname, '../database.sqlite');
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '');
  console.log('✅ Created SQLite database file');
}

console.log('✅ Database setup complete!');
console.log('');
console.log('Next steps:');
console.log('1. Run: npm run db:migrate');
console.log('2. Run: npm run db:seed');
console.log('3. Start the server: npm run dev');