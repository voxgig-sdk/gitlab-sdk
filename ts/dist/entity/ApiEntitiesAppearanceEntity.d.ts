import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesAppearance, ApiEntitiesAppearanceLoadMatch, ApiEntitiesAppearanceUpdateData } from '../GitlabTypes';
declare class ApiEntitiesAppearanceEntity extends GitlabEntityBase<ApiEntitiesAppearance> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesAppearanceEntity): ApiEntitiesAppearanceEntity;
    load(this: any, reqmatch?: ApiEntitiesAppearanceLoadMatch, ctrl?: Control): Promise<ApiEntitiesAppearanceEntity>;
    update(this: any, reqdata?: ApiEntitiesAppearanceUpdateData, ctrl?: Control): Promise<ApiEntitiesAppearanceEntity>;
}
export { ApiEntitiesAppearanceEntity };
