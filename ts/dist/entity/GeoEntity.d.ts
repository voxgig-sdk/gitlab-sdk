import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Geo, GeoLoadMatch, GeoCreateData } from '../GitlabTypes';
declare class GeoEntity extends GitlabEntityBase<Geo> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: GeoEntity): GeoEntity;
    load(this: any, reqmatch?: GeoLoadMatch, ctrl?: Control): Promise<GeoEntity>;
    create(this: any, reqdata?: GeoCreateData, ctrl?: Control): Promise<GeoEntity>;
}
export { GeoEntity };
