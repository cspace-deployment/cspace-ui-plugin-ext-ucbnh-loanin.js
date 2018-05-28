import { defineMessages } from 'react-intl';

export default {
  // TODO: This list is identical to taxonMajorGroups from ucbnh-taxon and loanoutMajorGroups from
  // ucbnh-loanout. Make these all the same list, defined in a separate plugin.
  loaninMajorGroups: {
    values: [
      'Spermatophytes',
      'Pteridophytes',
      'Algae',
      'Bryophytes',
      'Fungi',
      'Lichen',
      'n/a',
      'misc',
    ],
    messages: defineMessages({
      Spermatophytes: {
        id: 'option.loaninMajorGroups.Spermatophytes',
        defaultMessage: 'Spermatophytes',
      },
      Pteridophytes: {
        id: 'option.loaninMajorGroups.Pteridophytes',
        defaultMessage: 'Pteridophytes',
      },
      Algae: {
        id: 'option.loaninMajorGroups.Algae',
        defaultMessage: 'Algae',
      },
      Bryophytes: {
        id: 'option.loaninMajorGroups.Bryophytes',
        defaultMessage: 'Bryophytes',
      },
      Fungi: {
        id: 'option.loaninMajorGroups.Fungi',
        defaultMessage: 'Fungi',
      },
      Lichen: {
        id: 'option.loaninMajorGroups.Lichen',
        defaultMessage: 'Lichen',
      },
      'n/a': {
        id: 'option.loaninMajorGroups.n/a',
        defaultMessage: 'n/a',
      },
      misc: {
        id: 'option.loaninMajorGroups.misc',
        defaultMessage: 'misc',
      },
    }),
  },
  // TODO: This list is identical to loanoutObjectKinds from ucbnh-loanout. Make these all the same
  // list, defined in a separate plugin.
  loaninObjectKinds: {
    values: [
      'Sheet',
      'Jar',
    ],
    messages: defineMessages({
      Sheet: {
        id: 'option.loaninObjectKinds.Sheet',
        defaultMessage: 'sheet',
      },
      Jar: {
        id: 'option.loaninObjectKinds.Jar',
        defaultMessage: 'jar',
      },
    }),
  },
};
