"use client";
import "@copilotkit/react-ui/styles.css";
import { MessagesProps, CopilotSidebar, AssistantMessageProps, Markdown, useChatContext } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

const CustomAssistantMessage = (props: AssistantMessageProps) => {
  const { icons } = useChatContext();
  const { message, isLoading, rawData} = props;
  const messageStyles = "px-4 rounded-xl pt-2";

  return (
    <div className="py-2">
      <div className="flex items-start flex-col">
        <div className={messageStyles}>
          {message && <Markdown content={message.content || ""} /> }
          {isLoading && icons.spinnerIcon}
        </div>
        <div>
           {rawData && JSON.stringify(rawData?.toolCalls?.map((x: { function: Array<Map<string,string>>; }) => x.function),null,2)} 
        </div>
        <div>
          "rawData" {rawData && JSON.stringify(rawData)} 
        </div>
      </div>
    </div>
  );
};

export default function YourApp() {
    return (
        <main>
        <h1>Your main content</h1>

        <CopilotSidebar 
            labels={{
                title: "Popup Assistant",
                initial: "Hi! I'm connected to an agent. How can I help?",
            }}
            AssistantMessage={CustomAssistantMessage}
        />
        </main>
    );
}