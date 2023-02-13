import {createReducer, on} from "@ngrx/store";
import {initialState} from "./DealerBasicDetails.state";
import {
  saveDealerBasicData
} from "./DealerBasicDetails.actions";

const _dealerBasicDetailsMainReducer = createReducer(initialState,
  on(saveDealerBasicData, (state, action) => {
    return {
      ...state,
      accountType: action.dataSet.accountType,
      avatar: action.dataSet.avatar,
      dealerLevel: action.dataSet.dealerLevel,
      fullName: action.dataSet.fullName,
      registerDate: action.dataSet.registerDate,
      verifiedState: action.dataSet.verifiedState
    }
  }));

export function dealerBasicDataMainReducer(state: any, action: any) {
  return _dealerBasicDetailsMainReducer(state, action);
}
