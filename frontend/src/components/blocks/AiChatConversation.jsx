function AiChatConversation({ messages }) {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scroll">
            {messages.map((msg, i) => (
                <div
                    key={i}
                    className={`max-w-[80%] p-3 rounded-xl text-sm ${
                        msg.sender === "user"
                            ? "ml-auto bg-primary text-black"
                            : "mr-auto bg-white/10 text-white border border-white/10"
                    }`}
                >
                    {msg.text}
                </div>
            ))}
        </div>
    );
}

export default AiChatConversation;
