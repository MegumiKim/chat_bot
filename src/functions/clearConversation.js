import { remove } from "firebase/database";
import { conversationInDB } from "../functions/DB";
const chatbotConversation = document.getElementById("chatbot-conversation");

export function clearConversation() {
  remove(conversationInDB);
  chatbotConversation.innerHTML =
    '<div class="speech speech-assistant">How can I help you?</div>';
}
