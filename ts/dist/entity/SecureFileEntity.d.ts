import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { SecureFile, SecureFileLoadMatch, SecureFileRemoveMatch } from '../GitlabTypes';
declare class SecureFileEntity extends GitlabEntityBase<SecureFile> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: SecureFileEntity): SecureFileEntity;
    load(this: any, reqmatch?: SecureFileLoadMatch, ctrl?: Control): Promise<SecureFileEntity>;
    remove(this: any, reqmatch?: SecureFileRemoveMatch, ctrl?: Control): Promise<SecureFileEntity>;
}
export { SecureFileEntity };
