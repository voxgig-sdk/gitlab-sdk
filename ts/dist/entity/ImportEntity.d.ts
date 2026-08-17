import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Import, ImportCreateData } from '../GitlabTypes';
declare class ImportEntity extends GitlabEntityBase<Import> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ImportEntity): ImportEntity;
    create(this: any, reqdata?: ImportCreateData, ctrl?: Control): Promise<ImportEntity>;
}
export { ImportEntity };
