// import { fetchReq } from "./fetchRequest";
// import { createChatBubble } from "./createChatBubble";

export async function fetchReply() {
  try {
    // Retrieve the stored conversation from local storage
    const storedConversation = localStorage.getItem("conversation");
    console.log(storedConversation);

    if (storedConversation) {
      // Deserialize the conversation data
      const conversationArr = JSON.parse(storedConversation);
      // Assume there's an initial object or message to unshift, if needed
      // conversationArr.unshift(instructionObj);

      // Fetch response from openaiAPI
      const res = await fetchReq(conversationArr);

      if (res) {
        console.log(res);

        // Create a chat bubble for the assistant's response
        // createChatBubble(res.content, "assistant");

        // Store the new response in the conversation array and update local storage
        conversationArr.push(res); // Assuming 'res' is the appropriate format
        localStorage.setItem("conversation", JSON.stringify(conversationArr));
      }
    } else {
      console.log("No data available");
    }
  } catch (err) {
    console.error("Error fetching or pushing data", err);
  }
}

// Placeholder for the fetchReq function that should send a request to an API
async function fetchReq(conversationArr) {
  // Implement API request logic here
  // Example response simulation:
  return {
    role: "assistant",
    content: "This is a simulated response based on the input conversation.",
    // other properties as required
  };
}
