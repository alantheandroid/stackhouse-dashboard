export const quillOptions = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link'], // it's also possible to also add an image and a video
        ['clean'],
      ],
    },
    theme: 'snow',
  };