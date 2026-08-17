import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPersonalSnippet, ApiEntitiesPersonalSnippetLoadMatch, ApiEntitiesPersonalSnippetListMatch, ApiEntitiesPersonalSnippetCreateData, ApiEntitiesPersonalSnippetUpdateData } from '../GitlabTypes';
declare class ApiEntitiesPersonalSnippetEntity extends GitlabEntityBase<ApiEntitiesPersonalSnippet> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPersonalSnippetEntity): ApiEntitiesPersonalSnippetEntity;
    load(this: any, reqmatch?: ApiEntitiesPersonalSnippetLoadMatch, ctrl?: Control): Promise<ApiEntitiesPersonalSnippetEntity>;
    list(this: any, reqmatch?: ApiEntitiesPersonalSnippetListMatch, ctrl?: Control): Promise<ApiEntitiesPersonalSnippetEntity[]>;
    create(this: any, reqdata?: ApiEntitiesPersonalSnippetCreateData, ctrl?: Control): Promise<ApiEntitiesPersonalSnippetEntity>;
    update(this: any, reqdata?: ApiEntitiesPersonalSnippetUpdateData, ctrl?: Control): Promise<ApiEntitiesPersonalSnippetEntity>;
}
export { ApiEntitiesPersonalSnippetEntity };
