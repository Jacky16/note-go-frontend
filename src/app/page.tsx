import MessageInput from "@/app/chat/components/message-input";

export default function Home() {
  return (
    <main className=" h-screen w-screen inset-0 flex gap-4  ">
      <div className="flex-1 flex flex-col">
        <div className="flex-1" />
        <MessageInput />
      </div>
    </main>
  );
}
