'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { FileUploader } from '@/components/CreateForm/FileUploader';

export const CreateForm = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data = {
      title,
      content,
      published: true,
      userEmail: session?.user?.email
    };

    await fetch('http://localhost:3000/api/blog', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  };

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          className="p-2 rounded text-primary-dark"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          className="p-2 rounded text-primary-dark"
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={16}
          value={content}
        />
        {/* <input */}
        {/*  className="p-2 rounded text-primary-dark" */}
        {/*  onChange={(e) => setImageUrl(e.target.value)} */}
        {/*  placeholder="Url to the image" */}
        {/*  type="url" */}
        {/*  value={imageUrl} */}
        {/* /> */}
        <div className="flex justify-end gap-5">
          <button
            className="p-2 hover:text-active"
            onClick={() => router.push('/')}
            type="button"
          >
            Cancel
          </button>
          <button
            className="p-2 active:hover:text-active disabled:text-gray-400"
            disabled={!content || !title}
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
      <FileUploader files={files} setFiles={setFiles} />
    </>
  );
};
