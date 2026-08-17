import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { RpmPackage, RpmPackageLoadMatch, RpmPackageCreateData } from '../GitlabTypes';
declare class RpmPackageEntity extends GitlabEntityBase<RpmPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: RpmPackageEntity): RpmPackageEntity;
    load(this: any, reqmatch?: RpmPackageLoadMatch, ctrl?: Control): Promise<RpmPackageEntity>;
    create(this: any, reqdata?: RpmPackageCreateData, ctrl?: Control): Promise<RpmPackageEntity>;
}
export { RpmPackageEntity };
