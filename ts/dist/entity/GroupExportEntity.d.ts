import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { GroupExport, GroupExportLoadMatch, GroupExportCreateData } from '../GitlabTypes';
declare class GroupExportEntity extends GitlabEntityBase<GroupExport> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: GroupExportEntity): GroupExportEntity;
    load(this: any, reqmatch?: GroupExportLoadMatch, ctrl?: Control): Promise<GroupExportEntity>;
    create(this: any, reqdata?: GroupExportCreateData, ctrl?: Control): Promise<GroupExportEntity>;
}
export { GroupExportEntity };
