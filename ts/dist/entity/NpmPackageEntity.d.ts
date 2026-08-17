import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { NpmPackage, NpmPackageLoadMatch, NpmPackageCreateData, NpmPackageUpdateData, NpmPackageRemoveMatch } from '../GitlabTypes';
declare class NpmPackageEntity extends GitlabEntityBase<NpmPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: NpmPackageEntity): NpmPackageEntity;
    load(this: any, reqmatch?: NpmPackageLoadMatch, ctrl?: Control): Promise<NpmPackageEntity>;
    create(this: any, reqdata?: NpmPackageCreateData, ctrl?: Control): Promise<NpmPackageEntity>;
    update(this: any, reqdata?: NpmPackageUpdateData, ctrl?: Control): Promise<NpmPackageEntity>;
    remove(this: any, reqmatch?: NpmPackageRemoveMatch, ctrl?: Control): Promise<NpmPackageEntity>;
}
export { NpmPackageEntity };
