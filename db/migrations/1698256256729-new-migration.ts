import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1698256256729 implements MigrationInterface {
    name = 'NewMigration1698256256729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fullname\` varchar(255) NOT NULL, \`mobile\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_29fd51e9cf9241d022c5a4e02e\` (\`mobile\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_29fd51e9cf9241d022c5a4e02e\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
