import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface CodeBlockProps {
    codeString: string;
    language?: string;
  }
  export function getLanguageFromCode(codeStr: string) {
    let lang = "js";
    if (codeStr.includes("/* jsx */")) {
      lang = "jsx";
    }
    if (codeStr.includes("/* js */")) {
      lang = "js";
    }
    if (codeStr.includes("/* css */")) {
      lang = "css";
    }
    if (codeStr.includes("<!-- html -->")) {
      lang = "html";
    }
    if (codeStr.includes("/* ts */")) {
      lang = "ts";
    }
    return lang;
  }
  export const CodeBlock: React.FC<CodeBlockProps> = ({
    codeString,
    language = "javascript",
  }) => {
    return (
      <div className=" bg-purple-500">
        <SyntaxHighlighter
          customStyle={{
            fontFamily: "Roboto",
            fontSize: "0.9rem",
            fontWeight: 500,
          }}
          language={language}
          style={a11yDark}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  };