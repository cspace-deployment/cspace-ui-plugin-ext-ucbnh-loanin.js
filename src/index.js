import fields from './fields';
import messages from './messages';
import optionLists from './optionLists';

module.exports = () => configContext => ({
  optionLists,
  extensions: {
    'ucbnh-loanin': {
      fields: fields(configContext),
      messages: messages(configContext),
    },
  },
});
