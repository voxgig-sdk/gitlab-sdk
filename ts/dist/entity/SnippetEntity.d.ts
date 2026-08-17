import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Snippet, SnippetLoadMatch, SnippetRemoveMatch } from '../GitlabTypes';
declare class SnippetEntity extends GitlabEntityBase<Snippet> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: SnippetEntity): SnippetEntity;
    load(this: any, reqmatch?: SnippetLoadMatch, ctrl?: Control): Promise<SnippetEntity>;
    remove(this: any, reqmatch?: SnippetRemoveMatch, ctrl?: Control): Promise<SnippetEntity>;
}
export { SnippetEntity };
