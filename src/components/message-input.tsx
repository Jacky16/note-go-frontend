import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { BiPaperclip, BiSend } from "react-icons/bi";
import { Card } from "./ui/card";

const MessageInput = () => {
  return (
    <Card className="flex items-center gap-2 px-4 bg-slate-50">
      <Button
        size="icon"
        variant="outline"
        className="rounded-full aspect-square"
      >
        <BiPaperclip />
      </Button>
      <Textarea
        placeholder="Envia un nota"
        className="flex-1 resize-none no-scrollbar  text-area-auto-size border-none shadow-none text-base focus-visible:ring-0 text-lg"
      />
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full aspect-square"
      >
        <BiSend />
      </Button>
    </Card>
  );
};

export default MessageInput;
