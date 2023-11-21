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
  return allPollData.filter((poll) => poll.id !== pollId);
}

export function initializeVoteCheckingConfig(votingRecord, questionId) {
  if (!votingRecord[questionId]) {
    votingRecord[questionId] = isMultipleSelectQuestion(questionId) ? {} : null;
  }

  return votingRecord;
}

export function isMultipleSelectQuestion(questionId) {
  return [4].includes(questionId); // enabled for scaling up if there are more upcoming multiple-select questions
}

export function processVoteCasting(votingRecord, questionId, optionId) {
  if (!isMultipleSelectQuestion(questionId)) {
    checkSingleSelectQuestionResponse(votingRecord, questionId);
  }

  if (isMultipleSelectQuestion(questionId)) {
    checkMultipleSelectQuestionResponse(votingRecord, questionId, optionId);
  }
}

function checkSingleSelectQuestionResponse(votingRecord, questionId) {
  if (votingRecord[questionId]) {
    alert("You have already voted on this question.");
    return;
  }
  votingRecord[questionId] = 1;
  updateVotingRecord(votingRecord);
}

function checkMultipleSelectQuestionResponse(
  votingRecord,
  questionId,
  optionId
) {
  if (_.has(votingRecord[questionId], optionId)) {
    alert("You have already voted on this option.");
    return;
  }

  votingRecord[questionId][optionId] = 1;
  updateVotingRecord(votingRecord);
}

function updateVotingRecord(votingRecord) {
  localStorage.setItem("votingRecord", JSON.stringify(votingRecord));
}

export function isVoted(votingRecord, questionId, optionId) {
  let flag = false;
  if (
    isMultipleSelectQuestion(questionId) &&
    _.has(votingRecord[questionId], optionId)
  )
    flag = true;
  if (!isMultipleSelectQuestion(questionId) && votingRecord[questionId])
    flag = true;
  return flag;
}
