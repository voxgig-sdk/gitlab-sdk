import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { EeApiEntitiesGeoPipelineRef, EeApiEntitiesGeoPipelineRefListMatch } from '../GitlabTypes';
declare class EeApiEntitiesGeoPipelineRefEntity extends GitlabEntityBase<EeApiEntitiesGeoPipelineRef> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EeApiEntitiesGeoPipelineRefEntity): EeApiEntitiesGeoPipelineRefEntity;
    list(this: any, reqmatch?: EeApiEntitiesGeoPipelineRefListMatch, ctrl?: Control): Promise<EeApiEntitiesGeoPipelineRefEntity[]>;
}
export { EeApiEntitiesGeoPipelineRefEntity };
