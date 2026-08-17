import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Migration, MigrationCreateData } from '../GitlabTypes';
declare class MigrationEntity extends GitlabEntityBase<Migration> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: MigrationEntity): MigrationEntity;
    create(this: any, reqdata?: MigrationCreateData, ctrl?: Control): Promise<MigrationEntity>;
}
export { MigrationEntity };
