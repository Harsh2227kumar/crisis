/**
 * Publication statuses a content API request may ask for. Without one, the published
 * version is served.
 */
const STATUSES = new Set(['draft', 'published']);
const DEFAULT_STATUS = 'published';

export abstract class CoreService {
  getFetchParams(params = {}): any {
    const { status } = params as { status?: unknown };
    const isServedStatus = typeof status === 'string' && STATUSES.has(status);

    return {
      ...params,
      status: isServedStatus ? status : DEFAULT_STATUS,
    };
  }
}
