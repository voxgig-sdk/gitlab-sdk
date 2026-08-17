import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { TestReportSummary, TestReportSummaryLoadMatch } from '../GitlabTypes';
declare class TestReportSummaryEntity extends GitlabEntityBase<TestReportSummary> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: TestReportSummaryEntity): TestReportSummaryEntity;
    load(this: any, reqmatch?: TestReportSummaryLoadMatch, ctrl?: Control): Promise<TestReportSummaryEntity>;
}
export { TestReportSummaryEntity };
