import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { GroupImport, GroupImportCreateData } from '../GitlabTypes';
declare class GroupImportEntity extends GitlabEntityBase<GroupImport> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: GroupImportEntity): GroupImportEntity;
    create(this: any, reqdata?: GroupImportCreateData, ctrl?: Control): Promise<GroupImportEntity>;
}
export { GroupImportEntity };
