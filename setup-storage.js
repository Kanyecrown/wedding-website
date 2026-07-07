const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres.hywvysbzmvypgtqowwxj:FaithFrancis2026@aws-0-eu-west-1.pooler.supabase.com:5432/postgres?sslmode=require"
    }
  }
});

async function main() {
  console.log('Creating media bucket...');
  // Insert the bucket if it doesn't exist
  await prisma.$executeRawUnsafe(`
    INSERT INTO storage.buckets (id, name, public) 
    VALUES ('media', 'media', true)
    ON CONFLICT (id) DO NOTHING;
  `);

  console.log('Creating upload policy...');
  // Create policy allowing anon to insert
  await prisma.$executeRawUnsafe(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE schemaname = 'storage' 
        AND tablename = 'objects' 
        AND policyname = 'Allow public uploads to media'
      ) THEN
        CREATE POLICY "Allow public uploads to media" 
        ON storage.objects FOR INSERT 
        TO public 
        WITH CHECK (bucket_id = 'media');
      END IF;
    END
    $$;
  `);

  console.log('Creating delete policy...');
  // Create policy allowing anon to delete
  await prisma.$executeRawUnsafe(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE schemaname = 'storage' 
        AND tablename = 'objects' 
        AND policyname = 'Allow public deletions from media'
      ) THEN
        CREATE POLICY "Allow public deletions from media" 
        ON storage.objects FOR DELETE 
        TO public 
        USING (bucket_id = 'media');
      END IF;
    END
    $$;
  `);

  console.log('Successfully configured Supabase Storage.');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
