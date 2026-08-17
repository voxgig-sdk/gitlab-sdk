import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesReleasesLink, ApiEntitiesReleasesLinkLoadMatch, ApiEntitiesReleasesLinkListMatch, ApiEntitiesReleasesLinkCreateData, ApiEntitiesReleasesLinkUpdateData } from '../GitlabTypes';
declare class ApiEntitiesReleasesLinkEntity extends GitlabEntityBase<ApiEntitiesReleasesLink> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesReleasesLinkEntity): ApiEntitiesReleasesLinkEntity;
    load(this: any, reqmatch?: ApiEntitiesReleasesLinkLoadMatch, ctrl?: Control): Promise<ApiEntitiesReleasesLinkEntity>;
    list(this: any, reqmatch?: ApiEntitiesReleasesLinkListMatch, ctrl?: Control): Promise<ApiEntitiesReleasesLinkEntity[]>;
    create(this: any, reqdata?: ApiEntitiesReleasesLinkCreateData, ctrl?: Control): Promise<ApiEntitiesReleasesLinkEntity>;
    update(this: any, reqdata?: ApiEntitiesReleasesLinkUpdateData, ctrl?: Control): Promise<ApiEntitiesReleasesLinkEntity>;
}
export { ApiEntitiesReleasesLinkEntity };
