import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";
import "../../fonts.css";
import "./Conversations.css";

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();
  console.log("conversations", conversations);

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          className="conversations-list"
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
