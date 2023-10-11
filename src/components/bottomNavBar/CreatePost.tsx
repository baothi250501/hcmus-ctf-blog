// src/components/CreatePost.tsx

import React from 'react';

const CreatePost: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center">
        <img
          src="https://via.placeholder.com/50x50"
          alt="Avatar"
          className="mr-2 h-8 w-8 rounded-full"
        />
        <p className="font-semibold">Uyên Lê</p>
      </div>
      <textarea
        placeholder="Bạn đang nghĩ gì thế, Uyên Lê?"
        className="h-40 w-full rounded border p-2 focus:outline-none"
      ></textarea>
      <div className="mb-4 flex justify-end">
        <div className="flex space-x-4">
          <button>
            <img
              src="https://via.placeholder.com/50x50"
              alt="Upload Icon"
              className="h-6 w-6"
            />
          </button>
          <button>
            <img
              src="https://via.placeholder.com/50x50"
              alt="Location Icon"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="rounded bg-[#1C6758] px-4 py-2 text-white hover:bg-blue-600">
          Đăng
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
