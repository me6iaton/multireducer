import key from './key';

export default function multireducerWrapAction(action, multireducerKey) {
  const markTypeWitKey = type => type + key + multireducerKey;

  if (action.types) {
    return {
      ...action,
      types: action.types.map(markTypeWitKey)
    };
  }
  return {
    ...action,
    type: markTypeWitKey(action.type)
  };
}
