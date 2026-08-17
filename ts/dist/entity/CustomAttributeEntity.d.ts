import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { CustomAttribute, CustomAttributeLoadMatch } from '../GitlabTypes';
declare class CustomAttributeEntity extends GitlabEntityBase<CustomAttribute> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: CustomAttributeEntity): CustomAttributeEntity;
    load(this: any, reqmatch?: CustomAttributeLoadMatch, ctrl?: Control): Promise<CustomAttributeEntity>;
}
export { CustomAttributeEntity };
