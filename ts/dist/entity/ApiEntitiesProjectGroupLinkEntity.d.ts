import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectGroupLink, ApiEntitiesProjectGroupLinkCreateData } from '../GitlabTypes';
declare class ApiEntitiesProjectGroupLinkEntity extends GitlabEntityBase<ApiEntitiesProjectGroupLink> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectGroupLinkEntity): ApiEntitiesProjectGroupLinkEntity;
    create(this: any, reqdata?: ApiEntitiesProjectGroupLinkCreateData, ctrl?: Control): Promise<ApiEntitiesProjectGroupLinkEntity>;
}
export { ApiEntitiesProjectGroupLinkEntity };
