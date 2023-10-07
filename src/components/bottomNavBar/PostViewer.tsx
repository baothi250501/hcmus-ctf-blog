// components/PostViewer.tsx

import React, { useState } from 'react';

interface Comment {
  username: string;
  content: string;
}

interface PostViewerProps {
  username: string;
  avatar: string;
  comments: Comment[];
}

const PostViewer: React.FC<PostViewerProps> = ({
  username,
  avatar,
  comments,
}) => {
  const [newComment, setNewComment] = useState('');
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };
  const handleAddComment = () => {
    if (newComment.trim() === '') {
      return;
    }

    const newComments = [...comments, { username: 'You', content: newComment }];
    setNewComment('');
  };
  const content =
    '10 viên pin cũ bất kì khi mang đến các trạm thu hồi bạn sẽ nhận được 1 Son dưỡng dầu dừa Bến Tre trị giá 32.000đ';
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <div className="w-96 rounded-lg border border-gray-300 p-4">
        <img
          src="https://via.placeholder.com/375x375"
          alt="Post"
          className="h-auto w-full"
        />

        <div className="mt-4 flex items-start">
          <img
            src={avatar}
            alt="Avatar"
            className="mr-2 h-8 w-8 rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex items-center">
              <p className="font-semibold text-gray-600">{username}</p>
            </div>
            <p className="text-gray-600">{content}</p>
          </div>
        </div>
        <div className="mt-2">
          {comments.map((comment, index) => (
            <div key={index} className="mt-2 flex items-center">
              <img
                src={avatar}
                alt="Avatar"
                className="mr-2 h-6 w-6 rounded-full"
              />
              <p className="text-gray-600">
                <span className="font-semibold">{comment.username}</span>:{' '}
                {comment.content}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex">
          <textarea
            className="w-full rounded-l border p-2"
            placeholder="Thêm bình luận..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <button
            className="rounded-full px-4 py-2 text-gray-600"
            onClick={handleAddComment}
          >
            <svg fill="currentColor" viewBox="0 0 48 48" className="h-6 w-6">
              <path d="M4 6.1C4 4.9 4.9 4 6.1 4h35.8c1.2 0 2.1.9 2.1 2.1v35.8c0 1.2-.9 2.1-2.1 2.1H6.1C4.9 44 4 43.1 4 41.9V6.1zM8 10l14 14-3 15 15-3 14 14c.5.5 1.1.8 1.7 1.1l3.3-33.5L9 7.6c-.3.6-.6 1.2-1.1 1.7zm18 26h-8v-2h8v2zm10-4H16v-2h20v2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostViewer;
