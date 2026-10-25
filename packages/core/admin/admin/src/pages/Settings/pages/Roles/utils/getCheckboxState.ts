import { createArrayOfValues } from './createArrayOfValues';
import { removeConditionKeyFromData } from './removeConditionKeyFromData';

interface RecursiveRecordOfBooleans extends Record<string, boolean | RecursiveRecordOfBooleans> {}

const getCheckboxState = (dataObj: RecursiveRecordOfBooleans) => {
  const dataWithoutCondition = removeConditionKeyFromData(dataObj);

  const arrayOfValues = createArrayOfValues(dataWithoutCondition);

  if (!arrayOfValues.length) {
    return { hasAllActionsSelected: false, hasSomeActionsSelected: false };
  }

  const hasAllActionsSelected = arrayOfValues.every(Boolean);
  const hasSomeActionsSelected = arrayOfValues.some(Boolean) && !hasAllActionsSelected;

  return { hasAllActionsSelected, hasSomeActionsSelected };
};

export { getCheckboxState };
export type { RecursiveRecordOfBooleans };
