import { defineMessages } from 'react-intl';

export default () => ({
  inputTable: defineMessages({
    transferIn: {
      id: 'inputTable.ext.ucbnh-loanin.transferIn',
      defaultMessage: 'Transfer in',
    },
    transferOutReturn: {
      id: 'inputTable.ext.ucbnh-loanin.trasferOutReturn',
      defaultMessage: 'Transferred items returned',
    },
  }),
  panel: defineMessages({
    manualCount: {
      id: 'panel.ext.ucbnh-loanin.manualCount',
      defaultMessage: 'Manual Counts',
    },
    transferOut: {
      id: 'panel.ext.ucbnh-loanin.transferOut',
      defaultMessage: 'Items Transferred Out',
    },
  }),
});
