import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  return {
    'ns2:loansin_naturalhistory': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/loanin/domain/naturalhistory',
        },
      },
      lenderLoanNumber: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.lenderLoanNumber.name',
              defaultMessage: 'Lender\'s no.',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      majorGroup: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.majorGroup.name',
              defaultMessage: 'Major group',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'loaninMajorGroups',
            },
          },
        },
      },
      geographyList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        geography: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansin_naturalhistory.geography.name',
                defaultMessage: 'Geography',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
      taxonomyList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        taxonomy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansin_naturalhistory.taxonomy.name',
                defaultMessage: 'Taxonomy',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'taxon/local',
              },
            },
          },
        },
      },
      objKindList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        objKind: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansin_naturalhistory.objKind.name',
                defaultMessage: 'Object kind',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'loaninObjectKinds',
              },
            },
          },
        },
      },
      shipDate: {
        [config]: {
          dataType: DATA_TYPE_DATE,
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.shipDate.name',
              defaultMessage: 'Loan shipped date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      dueDate: {
        [config]: {
          dataType: DATA_TYPE_DATE,
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.dueDate.name',
              defaultMessage: 'Due date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      transferInDate: {
        [config]: {
          dataType: DATA_TYPE_DATE,
          messages: defineMessages({
            fullName: {
              id: 'field.loansin_naturalhistory.transferInDate.fullName',
              defaultMessage: 'Transfer in date',
            },
            name: {
              id: 'field.loansin_naturalhistory.transferInDate.name',
              defaultMessage: 'Date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      transferInOrg: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.loansin_naturalhistory.transferInOrg.fullName',
              defaultMessage: 'Transfer in from',
            },
            name: {
              id: 'field.loansin_naturalhistory.transferInOrg.name',
              defaultMessage: 'From',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'organization/local',
            },
          },
        },
      },
      transferInPerson: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.transferInPerson.name',
              defaultMessage: 'Previous borrower',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local',
            },
          },
        },
      },
      numReceived: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.numReceived.name',
              defaultMessage: 'Received',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      numReturned: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.numReturned.name',
              defaultMessage: 'Returned',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      numTransferredOut: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.numTransferredOut.name',
              defaultMessage: 'Transferred out',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      balance: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.balance.name',
              defaultMessage: 'Balance',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      discrepancy: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansin_naturalhistory.discrepancy.name',
              defaultMessage: 'Discrepancy',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      returnGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        returnGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansin_naturalhistory.returnGroup.name',
                defaultMessage: 'Items returned',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          returnObjectNumbers: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.returnObjectNumbers.fullName',
                  defaultMessage: 'Items returned object numbers',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnObjectNumbers.name',
                  defaultMessage: 'Object numbers',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.returnQuantity.fullName',
                  defaultMessage: 'Items returned quantity',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.returnDate.fullName',
                  defaultMessage: 'Items returned date',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          returnNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.returnNotes.fullName',
                  defaultMessage: 'Items returned note',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnDetermination: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.returnDetermination.fullName',
                  defaultMessage: 'Items returned new determination',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnDetermination.name',
                  defaultMessage: 'New determination',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local',
                },
              },
            },
          },
        },
      },
      transferOutGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        transferOutGroup: {
          [config]: {
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          transferOutDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutDate.fullName',
                  defaultMessage: 'Transfer out date',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          transferOutQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutQuantity.fullName',
                  defaultMessage: 'Transfer out quantity',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          transferOutOrg: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutOrg.fullName',
                  defaultMessage: 'Transfer out institution',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutOrg.name',
                  defaultMessage: 'Institution',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local',
                },
              },
            },
          },
          transferOutPerson: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutPerson.fullName',
                  defaultMessage: 'Transfer out for study by',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutPerson.name',
                  defaultMessage: 'For study by',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
          transferOutDirector: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutDirector.fullName',
                  defaultMessage: 'Transfer out under direction of',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutDirector.name',
                  defaultMessage: 'Under direction of',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
          transferOutNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutNotes.fullName',
                  defaultMessage: 'Transfer out note',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          transferOutReturnDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnDate.fullName',
                  defaultMessage: 'Transferred items returned date',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutReturnDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          transferOutReturnQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnQuantity.fullName',
                  defaultMessage: 'Transferred items returned quantity',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutReturnQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          transferOutReturnNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnNotes.fullName',
                  defaultMessage: 'Transferred items returned note',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutReturnNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
