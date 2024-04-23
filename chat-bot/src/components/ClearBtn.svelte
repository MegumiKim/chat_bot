
<script>

  // This function will be triggered when the 'Clear' button is clicked
  function handleClick() {
    // Clear the local storage
    localStorage.removeItem('conversation');

    // Clear the chatbox by removing all message elements
    const chatContainer = document.getElementById('chatbot-conversation');
    while (chatContainer.firstChild) {
      chatContainer.removeChild(chatContainer.firstChild);
    }

    // Optionally, re-add the initial "How can I help you?" message or handle it dynamically
    const assistantMessage = document.createElement('div');
    assistantMessage.className = 'speech speech-assistant';
    assistantMessage.textContent = "How can I help you?";
    chatContainer.appendChild(assistantMessage);
  }
</script>

<button class="clear-btn"
on:click={handleClick}>Clear</button>

