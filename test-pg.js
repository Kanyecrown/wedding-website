const { Client } = require('pg');
async function testDirect() {
  const directUrl = "postgresql://postgres.hywvysbzmvypgtqowwxj:FaithFrancis2026@aws-0-eu-west-1.pooler.supabase.com:5432/postgres?sslmode=require";
  const client = new Client({ connectionString: directUrl });
  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log("Direct URL works:", res.rows[0]);
  } catch (err) {
    console.error("Direct URL failed:", err.message);
  } finally {
    await client.end();
  }
}

async function testPool() {
  const poolUrl = "postgresql://postgres.hywvysbzmvypgtqowwxj:FaithFrancis2026@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true";
  const client = new Client({ connectionString: poolUrl });
  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log("Pool URL works:", res.rows[0]);
  } catch (err) {
    console.error("Pool URL failed:", err.message);
  } finally {
    await client.end();
  }
}

async function main() {
  await testDirect();
  await testPool();
}
main();
