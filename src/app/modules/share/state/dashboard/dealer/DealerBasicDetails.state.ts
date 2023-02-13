export interface DealerBasicDataMainStateDataModel {
  accountType: string,
  avatar: string,
  dealerLevel: string,
  fullName: string,
  registerDate: Date |null,
  verifiedState: boolean
}

export const initialState: DealerBasicDataMainStateDataModel = {
  accountType: '',
  avatar: '',
  dealerLevel: '',
  fullName: '',
  registerDate: null,
  verifiedState: false
};
