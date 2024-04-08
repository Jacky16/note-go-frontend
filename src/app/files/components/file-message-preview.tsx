import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BiFile, BiTrash } from "react-icons/bi";

interface Props {
  file: File;
}

const FileMessagePreview: React.FC<Props> = ({ file }) => {
  const isImage = file.type.startsWith("image/");

  return (
    <div
      title={file.name}
      className="relative aspect-[3/4] max-w-40  p-2 flex flex-col justify-center items-center gap-2 border rounded-sm "
    >
      <Button
        title="Eliminar archivo"
        className="absolute right-0 top-0 translate-x-1/2 z-10"
        size="sm"
        variant="destructive"
      >
        <BiTrash />
      </Button>
      <div className="h-44 aspect-[3/4] relative rounded-sm overflow-hidden">
        {isImage ? (
          <Image
            height={144}
            width={192}
            priority
            quality={10}
            src={URL.createObjectURL(file)}
            alt={file.name}
          />
        ) : (
          <div className="h-full flex justify-center items-center">
            <BiFile className="text-7xl text-primary" />
          </div>
        )}
      </div>
      <p className="line-clamp-1  w-full">{file.name}</p>
    </div>
  );
};

export default FileMessagePreview;
