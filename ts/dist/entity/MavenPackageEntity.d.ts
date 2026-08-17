import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { MavenPackage, MavenPackageLoadMatch, MavenPackageUpdateData } from '../GitlabTypes';
declare class MavenPackageEntity extends GitlabEntityBase<MavenPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: MavenPackageEntity): MavenPackageEntity;
    load(this: any, reqmatch?: MavenPackageLoadMatch, ctrl?: Control): Promise<MavenPackageEntity>;
    update(this: any, reqdata?: MavenPackageUpdateData, ctrl?: Control): Promise<MavenPackageEntity>;
}
export { MavenPackageEntity };
