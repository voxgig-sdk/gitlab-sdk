import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { RemoteMirror, RemoteMirrorLoadMatch, RemoteMirrorRemoveMatch } from '../GitlabTypes';
declare class RemoteMirrorEntity extends GitlabEntityBase<RemoteMirror> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: RemoteMirrorEntity): RemoteMirrorEntity;
    load(this: any, reqmatch?: RemoteMirrorLoadMatch, ctrl?: Control): Promise<RemoteMirrorEntity>;
    remove(this: any, reqmatch?: RemoteMirrorRemoveMatch, ctrl?: Control): Promise<RemoteMirrorEntity>;
}
export { RemoteMirrorEntity };
