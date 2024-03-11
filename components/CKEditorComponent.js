import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CKEditorComponent = ({ content }) => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  if (!editorLoaded) return <div>Loading...</div>;

  const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react'), {
    ssr: false
  });
  const ClassicEditor = dynamic(() => import('@ckeditor/ckeditor5-build-classic'), {
    ssr: false
  });

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        disabled
      />
    </div>
  );
};

export default CKEditorComponent;
