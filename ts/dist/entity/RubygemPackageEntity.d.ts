import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { RubygemPackage, RubygemPackageLoadMatch, RubygemPackageCreateData } from '../GitlabTypes';
declare class RubygemPackageEntity extends GitlabEntityBase<RubygemPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: RubygemPackageEntity): RubygemPackageEntity;
    load(this: any, reqmatch?: RubygemPackageLoadMatch, ctrl?: Control): Promise<RubygemPackageEntity>;
    create(this: any, reqdata?: RubygemPackageCreateData, ctrl?: Control): Promise<RubygemPackageEntity>;
}
export { RubygemPackageEntity };
