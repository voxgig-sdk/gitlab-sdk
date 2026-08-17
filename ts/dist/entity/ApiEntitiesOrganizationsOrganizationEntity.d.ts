import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesOrganizationsOrganization, ApiEntitiesOrganizationsOrganizationCreateData } from '../GitlabTypes';
declare class ApiEntitiesOrganizationsOrganizationEntity extends GitlabEntityBase<ApiEntitiesOrganizationsOrganization> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesOrganizationsOrganizationEntity): ApiEntitiesOrganizationsOrganizationEntity;
    create(this: any, reqdata?: ApiEntitiesOrganizationsOrganizationCreateData, ctrl?: Control): Promise<ApiEntitiesOrganizationsOrganizationEntity>;
}
export { ApiEntitiesOrganizationsOrganizationEntity };
