import {createAction, props} from "@ngrx/store";

export const saveDealerBasicData = createAction('saveBasicDealerData', props<{ dataSet: any }>());
