<script>
  import {fetchReply} from "$lib/fetchReply.js"
let userInput = ""


  // When the component mounts, load the existing conversation
  import { onMount } from 'svelte';
  import UserPanel from '../components/UserPanel.svelte';
  onMount(() => {
    loadConversation();
  });


function loadConversation() {
    const storedConversation = localStorage.getItem('conversation');
    if (storedConversation) {
      const messages = JSON.parse(storedConversation);
      const chatContainer = document.getElementById('chatbot-conversation');
      messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'speech speech-user';
        messageDiv.textContent = message.content;
        chatContainer.appendChild(messageDiv);
      });
    }
  }

  async function handleKeyDown(e) {
  if (e.key === "Enter") {
    if (e.shiftKey) {
      return;

    } else {
      handleSubmit(e);
    }
  } return;
}

async function handleSubmit(e){
  e.preventDefault();

  // Check if userInput has content before proceeding
  if (userInput.trim() !== "") {
      const chatContainer = document.getElementById('chatbot-conversation');
      
      // Create a div element to display user's message
      const userMessage = document.createElement('div');
      userMessage.className = 'speech speech-user';
      userMessage.textContent = userInput;
      chatContainer.appendChild(userMessage);

 // Save message to local storage
 const existingMessages = JSON.parse(localStorage.getItem('conversation')) || [];
      existingMessages.push({
    role: "user",
    content: userInput,
  });
      localStorage.setItem('conversation', JSON.stringify(existingMessages));
  fetchReply();
      
      // Reset the input field for next message
      userInput = "";
    }
}


</script>

<UserPanel />

  <section class="chatbot-container">
    <div class="chatbot-conversation-container" id="chatbot-conversation">
      <div class="speech speech-assistant">How can I help you?</div>
    </div>
    <form id="form" class="chatbot-input-container" on:submit={handleSubmit}>
      <textarea name="user-input" type="text" id="user-input" placeholder="Your inquiry..." bind:value={userInput} on:keydown={handleKeyDown}/>
      <!-- <button id="submit-btn" class="submit-btn">
        send
      </button> -->
    </form>
  </section>

