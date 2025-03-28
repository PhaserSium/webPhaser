import { useState, useEffect, useRef } from 'react';
import { Button, TextInput, Window, WindowHeader, WindowContent, Avatar, Frame } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(21, 19, 19);
  }
`;

const ChatbotCMD: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string; style?: React.CSSProperties }[]>([]);
  const [specialMessages, setSpecialMessages] = useState<string[]>([]);
  const [awaitingAnswer, setAwaitingAnswer] = useState(false); 
  const [questionAsked, setQuestionAsked] = useState(false);
  const [gameFinished, setGameFinished] = useState(false); // Nuovo stato per terminare il gioco

  const chatRef = useRef<HTMLDivElement>(null);

  const getBotResponse = (message: string): string => {
    const text = message.toLowerCase();
    if (text.includes("salita")) return "Ogni percorso inizia dal basso e procede verso l'alto. Anche il tuo percorso sarà in salita, quindi continua e non fermarti mai.";
    if (text.includes("precisione")) return "La precisione perfeziona ogni passo, ma non hai tempo ed energie per eseguire la perfezione.";
    if (text.includes("distruzione")) return "La distruzione del vecchio lascia spazio al nuovo, ma non hai niente da distruggere se c'è solo il vuoto.";
    if (text.includes("movimento")) return "Non fermarti mai. Muoviti avanti, muoviti indietro, ma muoviti senza sosta e non ti perderai mai.";
    if (text.includes("illusione")) return "L'illusione può darti uno strappo alla monotonia, ma sai bene che non durerà a lungo.";
    if (text.includes("confusione")) return "Non ti perderai mai se segui il tuo percorso. Anche quando attraverserai la nebbia della confusione, diventerai la tua stessa luce.";
    return "Sembra che questo non ti sarà utile. Prova con qualcosa di diverso.";
  };

  const requiredSpecialWords = ["salita", "movimento","confusione"];

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user" as const, text: input };
    let botMessage: { sender: "bot"; text: string; style?: React.CSSProperties };

    if (awaitingAnswer) {
      if (input.toLowerCase() === "percorso") {
        botMessage = { 
          sender: "bot", 
          text: "codice rosso", 
          style: { color: "red", fontWeight: "bold" } 
        };
        setGameFinished(true);
        setAwaitingAnswer(false);
      } else {
        botMessage = { 
          sender: "bot", 
          text: "Di solito, puoi fidarti della sola metà dei consigli che ti sono dati" 
        };
      }
    } else {
      botMessage = { sender: "bot", text: getBotResponse(input) };

      const currentWord = input.toLowerCase();
      // Verifica se la parola è speciale e non è già stata usata
      if (requiredSpecialWords.includes(currentWord) && !specialMessages.includes(currentWord)) {
        setSpecialMessages(prev => [...prev, currentWord]);
      }
    }

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput("");
  };

  useEffect(() => {
    if (specialMessages.length === 3 && !questionAsked) {
      setMessages(prev => [...prev, { 
        sender: "bot", 
        text: "Con l'esperienza che hai acquisito, rispondi a questo dilemma con una singola parola. Qual è il senso dell'avventura?" 
      }]);
      setAwaitingAnswer(true);
      setQuestionAsked(true);
    }
  }, [specialMessages, questionAsked]);

  useEffect(() => {
  }, [gameFinished]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <Window style={{ width: 350, height: 400, display: "flex", flexDirection: "column" }}>
        <WindowHeader style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Avatar square size={20} src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" />
          cmd.2060
        </WindowHeader>
        <WindowContent style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <div ref={chatRef} style={{
            flexGrow: 1,
            overflowY: "auto",
            background: "#C3C7CB",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            maxHeight: "230px"
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              }}>
                <Frame style={{
                  padding: "5px",
                  background: msg.sender === "bot" ? "#F0F0F0" : "#D0E4F7",
                  maxWidth: "70%",
                  textAlign: "left",
                }}>
                  <span style={msg.style || {}}>{msg.text}</span>
                </Frame>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "5px", paddingTop: "5px", marginTop: "auto" }}>
            <TextInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="> digita le parole..."
              style={{ flexGrow: 1 }}
            />
            <Button onClick={sendMessage}>Invia</Button>
          </div>
        </WindowContent>
      </Window>
    </ThemeProvider>
  );
};

export default ChatbotCMD;
