import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesSuggestion, ApiEntitiesSuggestionUpdateData } from '../GitlabTypes';
declare class ApiEntitiesSuggestionEntity extends GitlabEntityBase<ApiEntitiesSuggestion> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesSuggestionEntity): ApiEntitiesSuggestionEntity;
    update(this: any, reqdata?: ApiEntitiesSuggestionUpdateData, ctrl?: Control): Promise<ApiEntitiesSuggestionEntity>;
}
export { ApiEntitiesSuggestionEntity };
