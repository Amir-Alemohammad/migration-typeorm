import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCityColumnMigration1698256334353 implements MigrationInterface {
    name = 'AddCityColumnMigration1698256334353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`city\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`city\``);
    }

}
