function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "hey") {
        return "hey, what's up!";
    } else if (input == "what can you do") {
        return "I can give answers of your FAQs";
    }else if (input == "ok") {
        return "ok, so if you need anything else i am here!";
    }else if (input == "thank you") {
        return "no problem!";
    }else if (input == "bye") {
        return "bye, Talk to you later!";
    }else if (input == "goodbye") {
        return "ok, Talk to you later!";
    }else {
        return "Try asking something else!";
    }
}