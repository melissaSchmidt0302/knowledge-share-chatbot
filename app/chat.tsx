"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="mx-auto w-full h-screen max-w-lg p-24 flex flex-col">
      <Card className="w-full h-full mb-4 p-4 border-gray-300">
        <section className="mb-auto m">
          {messages.map((m) => (
            <div className="mb-4" key={m.id}>
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          ))}
        </section>
      </Card>
      <form
        className="flex space-x-4 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <Textarea
          className="rounded-md p-2 w-full border-gray-300"
          value={input}
          onChange={handleInputChange}
          placeholder="Message ChatGPT..."
        />
        <Button
          className="border-solid border-2 border-white p-2 rounded-md"
          type="submit"
        >
          Send
        </Button>
      </form>
    </main>
  );
}
