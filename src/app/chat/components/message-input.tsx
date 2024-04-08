"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { BiPaperclip, BiSend } from "react-icons/bi";
import { Card } from "../../../components/ui/card";
import { useDropzone } from "react-dropzone";

import { useEffect, useState } from "react";
import FileMessagePreview from "@/app/files/components/file-message-preview";
import { FileDropBackground } from "@/app/files/components/file-drop-background";

const MessageInput = () => {
  const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } =
    useDropzone({
      noClick: true,
      autoFocus: false,
    });

  const [files, setFiles] = useState<File[]>([]);

  const thereAreFiles = files.length > 0;

  useEffect(() => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, [acceptedFiles]);

  return (
    <>
      <div
        {...getRootProps({
          className: "dropzone inset-0 w-full h-full",
        })}
      >
        <input className="fixed h-full w-full inset-0" {...getInputProps()} />

        {isDragActive && <FileDropBackground />}
      </div>

      <Card className="relative w-full bg-slate-50 [&>div]:p-2">
        {thereAreFiles && (
          <ul className="absolute -translate-y-full py-4 bg-slate-50 inset-x-0 flex gap-6 overflow-x-scroll rounded-md ">
            {files.map((file) => (
              <li key={file.name}>
                <FileMessagePreview file={file} />
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-2 ">
          <Button
            size="icon"
            onClick={open}
            variant="outline"
            className="rounded-full aspect-square"
          >
            <BiPaperclip />
          </Button>
          <Textarea
            placeholder="Envia un nota"
            className="p-0 w-full resize-none no-scrollbar text-lg  text-area-auto-size border-none shadow-none focus-visible:ring-0 "
          />
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full aspect-square"
          >
            <BiSend />
          </Button>
        </div>
      </Card>
    </>
  );
};

export default MessageInput;
