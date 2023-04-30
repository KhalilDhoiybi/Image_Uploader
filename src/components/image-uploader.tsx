import ImageUploading from "react-images-uploading";
import type { ImageType, ImageListType } from "react-images-uploading";
import { FiUpload, FiTrash } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
interface ImageUploaderProps {
  images: ImageType[];
  setImages: (images: ImageType[]) => void;
}
const ImageUploader: React.FC<ImageUploaderProps> = ({ images, setImages }) => {
  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={3}
      data-testid="image-uploader"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        dragProps,
      }) => (
        <div className="p-4 space-y-4 rounded-lg border border-gray-300">
          <div className="flex gap-10 justify-center items-center">
            <button
              className="flex justify-center items-center py-3 px-10 space-x-2 text-white bg-gray-900 rounded-md"
              onClick={onImageUpload}
              {...dragProps}
            >
              <HiOutlinePhotograph />
              <span>Upload Photo</span>
            </button>
            <button
              className="flex justify-center items-center py-3 px-10 space-x-2 text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={onImageRemoveAll}
            >
              <FiTrash />
              <span>Remove All</span>
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {imageList.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.dataURL || ""}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="flex absolute top-0 right-0 gap-2 m-2">
                  <button
                    className="flex justify-center items-center py-2 px-4 space-x-2 text-xs bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={() => onImageUpdate(index)}
                  >
                    <FiUpload />
                    <span>Update</span>
                  </button>
                  <button
                    className="flex justify-center items-center py-2 px-4 space-x-2 text-xs text-white bg-red-500 rounded-md hover:bg-red-600"
                    onClick={() => onImageRemove(index)}
                  >
                    <FiTrash />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
