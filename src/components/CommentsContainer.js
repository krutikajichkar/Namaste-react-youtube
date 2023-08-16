import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "id labore ex et quam laborum",
    text: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    replies: [
      {
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        replies: [
          {
            name: "quo vero reiciendis velit similique earum",
            email: "Jayne_Kuhic@sydney.com",
            text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            replies: [
              {
                name: "quo vero reiciendis velit similique earum",
                email: "Jayne_Kuhic@sydney.com",
                text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
   text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    replies: [
      {
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
       text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        replies: [
          {
            name: "quo vero reiciendis velit similique earum",
            email: "Jayne_Kuhic@sydney.com",
           text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-2">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
