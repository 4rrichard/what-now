import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import AiChatInput from "../blocks/AiChatInput";
import AiChatConversation from "../blocks/AiChatConversation";

function AiChatModal({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        { sender: "ai", text: "Hi! What kind of game are you looking for?" },
    ]);

    useEffect(() => {
        localStorage.setItem("chat", JSON.stringify(messages));
    }, [messages]);

    const sendChatMessage = async (message) => {
        const response = await fetch("/api/gemini/chat", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: message,
        });
        return await response.text();
    };

    const handleUserMessage = async (text) => {
        setMessages((prev) => [...prev, { sender: "user", text }]);

        const aiReply = await sendChatMessage(text);

        setMessages((prev) => [...prev, { sender: "ai", aiReply }]);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose} className={"h-[700px] "}>
            <DialogContent
                aria-describedby={undefined}
                className="sm:max-w-lg border-2 border-solid border-white"
            >
                <DialogHeader className="text-center">
                    <DialogTitle className="text-xl text-white">
                        AI Game Assistant
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col h-[480px]">
                    <AiChatConversation messages={messages} />
                    <AiChatInput onUserMessage={handleUserMessage} />
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default AiChatModal;
