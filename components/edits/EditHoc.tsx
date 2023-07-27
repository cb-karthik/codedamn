import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  handleDeleteClick: () => void;
};

const EditHoc = ({ children, handleClick, handleDeleteClick }: Props) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute z-10 top-3 right-3 flex items-center gap-3">
        <FaEdit
          title="Edit"
          onClick={handleClick}
          className="text-blue-400 cursor-pointer text-xl"
        />
        <BsTrash
          title="Delete"
          onClick={handleDeleteClick}
          className="text-red-500 cursor-pointer text-xl"
        />
      </div>
      {children}
    </div>
  );
};

export default EditHoc;
