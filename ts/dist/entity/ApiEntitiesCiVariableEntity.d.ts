import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiVariable, ApiEntitiesCiVariableLoadMatch, ApiEntitiesCiVariableListMatch, ApiEntitiesCiVariableCreateData, ApiEntitiesCiVariableUpdateData } from '../GitlabTypes';
declare class ApiEntitiesCiVariableEntity extends GitlabEntityBase<ApiEntitiesCiVariable> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiVariableEntity): ApiEntitiesCiVariableEntity;
    load(this: any, reqmatch?: ApiEntitiesCiVariableLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiVariableEntity>;
    list(this: any, reqmatch?: ApiEntitiesCiVariableListMatch, ctrl?: Control): Promise<ApiEntitiesCiVariableEntity[]>;
    create(this: any, reqdata?: ApiEntitiesCiVariableCreateData, ctrl?: Control): Promise<ApiEntitiesCiVariableEntity>;
    update(this: any, reqdata?: ApiEntitiesCiVariableUpdateData, ctrl?: Control): Promise<ApiEntitiesCiVariableEntity>;
}
export { ApiEntitiesCiVariableEntity };
