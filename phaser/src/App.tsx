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
    background-color: #e0e0e0; /* Colore di sfondo per la pagina */
  }
`;

const DarkTheme = createGlobalStyle`
  body {
    background-color: #2b2b2b; /* Background scuro */
    color: #f1f1f1; /* Testo chiaro */
  }
  .window {
    background-color: #333333; /* Finestra scura */
  }
  .window-header {
    background-color: #444444; /* Header scuro */
    color: #f1f1f1; /* Testo chiaro nell'header */
  }
  .frame {
    background-color: #555555; /* Finestra interna */
  }
`;

const ChatbotCMD: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [specialMessages, setSpecialMessages] = useState<string[]>([]); // Array per messaggi speciali
  const chatRef = useRef<HTMLDivElement>(null);

  // Funzione per ottenere la risposta del bot
  const getBotResponse = (message: string): string => {
    const text = message.toLowerCase();
    if (text.includes("pasta")) return "Ciao! Come posso aiutarti?";
    if (text.includes("pomodoro")) return "Sto bene! E tu?";
    if (text.includes("acqua")) return "";
    return "Non ho capito, puoi riformulare?";
  };

  // Funzione per inviare i messaggi
  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage: { sender: "user" | "bot"; text: string } = { sender: "user", text: input };
    const botMessage: { sender: "user" | "bot"; text: string } = { sender: "bot", text: getBotResponse(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);

    // Se il messaggio contiene determinate parole, aggiungilo all'array dei messaggi speciali
    if (input.toLowerCase().includes("pasta") || input.toLowerCase().includes("pomodoro") || input.toLowerCase().includes("acqua")) {
      setSpecialMessages((prev) => [...prev, input]);
    }

    setInput("");
  };

  // Effetto per lo scrolling automatico
  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <Window style={{ width: 350, height: 400, display: "flex", flexDirection: "column"}}>
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
            maxHeight: "230px" // Limita lo spazio per il contenuto della chat
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
                  border: specialMessages.includes(msg.text) ? '2px solid green' : 'none', // Evidenzia i messaggi speciali
                }}>
                  {msg.text}
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
}

export default ChatbotCMD;
