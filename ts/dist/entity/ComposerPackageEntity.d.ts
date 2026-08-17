import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ComposerPackage, ComposerPackageLoadMatch } from '../GitlabTypes';
declare class ComposerPackageEntity extends GitlabEntityBase<ComposerPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ComposerPackageEntity): ComposerPackageEntity;
    load(this: any, reqmatch?: ComposerPackageLoadMatch, ctrl?: Control): Promise<ComposerPackageEntity>;
}
export { ComposerPackageEntity };
