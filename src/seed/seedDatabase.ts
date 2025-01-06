import { readFileSync } from 'fs';
import { pool } from '../db'; 

const seedDatabase = async (): Promise<void> => {
    try {
        console.log('Starting database seeding...');

        const seedSql = readFileSync('./db/seeds.sql', 'utf8'); 

        await pool.query(seedSql);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await pool.end();
    }
};

if (require.main === module) {
    seedDatabase().catch((err) => {
        console.error(err);
        process.exit(1);
    });
}