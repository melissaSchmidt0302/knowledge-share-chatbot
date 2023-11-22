import Image from "next/image";
import Chat from "./chat";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 p-4">
      <Chat />
    </main>
  );
}
