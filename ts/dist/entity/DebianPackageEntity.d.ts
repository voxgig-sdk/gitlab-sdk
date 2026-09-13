import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { DebianPackage, DebianPackageLoadMatch } from '../GitlabTypes';
declare class DebianPackageEntity extends GitlabEntityBase<DebianPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: DebianPackageEntity): DebianPackageEntity;
    load(this: any, reqmatch?: DebianPackageLoadMatch, ctrl?: Control): Promise<DebianPackageEntity>;
}
export { DebianPackageEntity };
