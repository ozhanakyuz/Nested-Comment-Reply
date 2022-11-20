export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Özhan",
      userId: "1",
      parentId: null,
      createdAt: "2022-11-20",
    },
    {
      id: "2",
      body: "Second comment",
      username: "Özhan",
      userId: "2",
      parentId: null,
      createdAt: "2022-11-20",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "Özhan",
      userId: "2",
      parentId: "1",
      createdAt: "2022-11-20",
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "Özhan",
      userId: "2",
      parentId: "2",
      createdAt: "2022-11-20",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Özhan",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};