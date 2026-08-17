import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Metadata, MetadataLoadMatch } from '../GitlabTypes';
declare class MetadataEntity extends GitlabEntityBase<Metadata> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: MetadataEntity): MetadataEntity;
    load(this: any, reqmatch?: MetadataLoadMatch, ctrl?: Control): Promise<MetadataEntity>;
}
export { MetadataEntity };
