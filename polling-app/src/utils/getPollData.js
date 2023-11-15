export default async function getPollData() {
  const data = {
    polls: [
      {
        id: 1,
        title: "Is bitcoin worth the time and money that mining requires?",
        publishedDate: 1516605447,
        answer: {
          type: "Single",
          options: [
            {
              id: 1,
              label: "Yes",
              count: 18,
            },
            {
              id: 2,
              label: "No",
              count: 45,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Should chatbots replace humans in customer service jobs?",
        publishedDate: 1516000647,
        answer: {
          type: "Single",
          options: [
            {
              id: 3,
              label: "Yes",
              count: 6,
            },
            {
              id: 4,
              label: "No",
              count: 8,
            },
          ],
        },
      },
      {
        id: 3,
        title: "How are we feeling about 2018?",
        publishedDate: 1515568647,
        answer: {
          type: "Single",
          options: [
            {
              id: 5,
              label: "Hopeful",
              count: 4,
            },
            {
              id: 6,
              label: "Doubtful",
              count: 10,
            },
          ],
        },
      },
      {
        id: 4,
        title:
          "Which country/region have you ever visited?",
        publishedDate: 1515482247,
        answer: {
          type: "Multi",
          options: [
            {
              id: 7,
              label: "Hong Kong",
              count: 3,
            },
            {
              id: 8,
              label: "China",
              count: 8,
            },
            {
              id: 9,
              label: "Australia",
              count: 12,
            },
            {
              id: 10,
              label: "Thailand",
              count: 13,
            },
            {
              id: 11,
              label: "Korea",
              count: 4,
            },
            {
              id: 12,
              label: "Japan",
              count: 9,
            },
          ],
        },
      },
      {
        id: 5,
        title: "Will new benefits encourage you to study or work in mainland?",
        publishedDate: 1515309447,
        answer: {
          type: "Single",
          options: [
            {
              id: 13,
              label: "Yes",
              count: 12,
            },
            {
              id: 14,
              label: "No",
              count: 25,
            },
          ],
        },
      },
    ],
  };

  return updatePollDataWithFormattedPublishedDate(data.polls);
}

function formatPublishedDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options).toUpperCase();
}

function updatePollDataWithFormattedPublishedDate(pollData) {
  const updatedPollData = pollData.map((poll) => ({
    ...poll,
    publishedDate: formatPublishedDate(poll.publishedDate),
  }));
  return updatedPollData;
}
