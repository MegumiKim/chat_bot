export async function fetchReq(conversationArr) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify({
      messages: conversationArr,
      model: "gpt-3.5-turbo",
      presence_penalty: 0,
      frequency_penalty: 0.3,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    );
    const data = await response.json();
    console.log(data);

    return data.choices[0].message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
