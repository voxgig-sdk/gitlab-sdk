import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { PackageFile, PackageFileLoadMatch, PackageFileRemoveMatch } from '../GitlabTypes';
declare class PackageFileEntity extends GitlabEntityBase<PackageFile> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: PackageFileEntity): PackageFileEntity;
    load(this: any, reqmatch?: PackageFileLoadMatch, ctrl?: Control): Promise<PackageFileEntity>;
    remove(this: any, reqmatch?: PackageFileRemoveMatch, ctrl?: Control): Promise<PackageFileEntity>;
}
export { PackageFileEntity };
