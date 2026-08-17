import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesNamespace, ApiEntitiesNamespaceLoadMatch, ApiEntitiesNamespaceListMatch, ApiEntitiesNamespaceUpdateData } from '../GitlabTypes';
declare class ApiEntitiesNamespaceEntity extends GitlabEntityBase<ApiEntitiesNamespace> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesNamespaceEntity): ApiEntitiesNamespaceEntity;
    load(this: any, reqmatch?: ApiEntitiesNamespaceLoadMatch, ctrl?: Control): Promise<ApiEntitiesNamespaceEntity>;
    list(this: any, reqmatch?: ApiEntitiesNamespaceListMatch, ctrl?: Control): Promise<ApiEntitiesNamespaceEntity[]>;
    update(this: any, reqdata?: ApiEntitiesNamespaceUpdateData, ctrl?: Control): Promise<ApiEntitiesNamespaceEntity>;
}
export { ApiEntitiesNamespaceEntity };
