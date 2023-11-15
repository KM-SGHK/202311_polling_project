import _ from "lodash";

export function calculateTotalNumberOfVotes(options) {
  const totalCount = options.reduce((sum, option) => sum + option.count, 0);
  return totalCount;
}

export function extractLabels(options) {
  return options.map((option) => option.label);
}

export function extractOptionVoteShare(options) {
  return options.map((option) =>
    Math.round((option.count / calculateTotalNumberOfVotes(options)) * 100)
  );
}

export function getUpdatedPoll(optionId, onDisplayPollData) {
  return {
    ...onDisplayPollData,
    answer: {
      ...onDisplayPollData.answer,
      options: onDisplayPollData.answer.options.map((option) => {
        if (option.id === optionId) {
          return { ...option, count: option.count + 1 }; // Increment count
        }
        return option;
      }),
    },
  };
}

export function updateAllPollData(updatedPoll, allPollData) {
  const updatedAllPollData = _.cloneDeep(allPollData); // Create a deep clone to avoid mutating the original data
  const pollToUpdate = _.find(updatedAllPollData, { id: updatedPoll.id });
  if (pollToUpdate) {
    pollToUpdate.answer = updatedPoll.answer; // Update the answer property
  }
  return updatedAllPollData;
}

export function filterAllPollData(pollId, allPollData) {
    return allPollData.filter(poll => poll.id !== pollId)
}
