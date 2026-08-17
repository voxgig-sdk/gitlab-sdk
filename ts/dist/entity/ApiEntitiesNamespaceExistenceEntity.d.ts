import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesNamespaceExistence, ApiEntitiesNamespaceExistenceListMatch } from '../GitlabTypes';
declare class ApiEntitiesNamespaceExistenceEntity extends GitlabEntityBase<ApiEntitiesNamespaceExistence> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesNamespaceExistenceEntity): ApiEntitiesNamespaceExistenceEntity;
    list(this: any, reqmatch?: ApiEntitiesNamespaceExistenceListMatch, ctrl?: Control): Promise<ApiEntitiesNamespaceExistenceEntity[]>;
}
export { ApiEntitiesNamespaceExistenceEntity };
