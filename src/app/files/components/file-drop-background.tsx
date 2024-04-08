import { BiSolidFilePlus } from "react-icons/bi";

export const FileDropBackground = () => (
  <div className="fixed z-50 inset-0 bg-black/80 flex items-center justify-center">
    <div className="relative h-44 w-96 px-12 rounded-sm  bg-secondary ">
      <div className="m-2 p-4 absolute inset-0  border-dotted border-4 flex flex-col items-center justify-center gap-2">
        <BiSolidFilePlus className="text-6xl text-primary" />
        <p className="text-2xl font-medium">Subir archivos</p>
        <p className="text-lg text-gray-400">Arrastra y suelta archivos aquí</p>
      </div>
    </div>
  </div>
);
