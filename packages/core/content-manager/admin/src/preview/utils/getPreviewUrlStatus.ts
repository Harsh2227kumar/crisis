import type { GetPreviewUrl } from '../../../../shared/contracts/preview';

/**
 * The preview URL endpoint only accepts the draft and published statuses.
 * A modified document is a draft with changes that are not published yet, so its preview is the draft.
 */
export function getPreviewUrlStatus(
  status: string | undefined
): GetPreviewUrl.Request['query']['status'] {
  if (!status) {
    return undefined;
  }

  // The draft wins for a modified document: its unpublished changes are what is
  // being previewed, not the last published version.
  if (status === 'draft' || status === 'modified') {
    return 'draft';
  }

  if (status === 'published') {
    return 'published';
  }

  return undefined;
}
