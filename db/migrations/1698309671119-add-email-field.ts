import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailField1698309671119 implements MigrationInterface {
    name = 'AddEmailField1698309671119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
