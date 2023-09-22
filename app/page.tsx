"use client";

import { useEffect, useState } from "react";

const DEFAULT_ENCODING = "Type something below...";

export default function Home() {
  const [word, setWord] = useState("");
  const [encodedWord, setEncodedWord] = useState(DEFAULT_ENCODING);

  function letterCode(char: string): number {
    let response: number;

    switch (char.toLowerCase()) {
      case "a":
        response = 1;
        break;
      case "b":
        response = 2;
        break;
      case "c":
        response = 3;
        break;
      case "d":
        response = 4;
        break;
      case "e":
        response = 5;
        break;
      case "f":
        response = 6;
        break;
      case "g":
        response = 7;
        break;
      case "h":
        response = 8;
        break;
      case "i":
        response = 9;
        break;
      case "j":
        response = 10;
        break;
      case "k":
        response = 11;
        break;
      case "l":
        response = 12;
        break;
      case "m":
        response = 13;
        break;
      case "n":
        response = 14;
        break;
      case "o":
        response = 15;
        break;
      case "p":
        response = 16;
        break;
      case "q":
        response = 17;
        break;
      case "r":
        response = 18;
        break;
      case "s":
        response = 19;
        break;
      case "t":
        response = 20;
        break;
      case "u":
        response = 21;
        break;
      case "v":
        response = 22;
        break;
      case "w":
        response = 23;
        break;
      case "x":
        response = 24;
        break;
      case "y":
        response = 25;
        break;
      case "z":
        response = 26;
        break;
      default:
        response = -1;
    }

    return response;
  }

  function clear() {
    setWord("");
    setEncodedWord(DEFAULT_ENCODING);
  }

  useEffect(() => {
    const characters = word.split("");

    if (characters.length <= 0) {
      setEncodedWord(DEFAULT_ENCODING);
      return;
    }

    const codes = characters
      .map((char) => {
        return letterCode(char);
      })
      .filter((code) => {
        return code !== -1;
      });

    setEncodedWord(codes.join("-"));
  }, [word]);

  return (
    <main className="flex min-h-screen flex-col mx-auto space-y-4 items-center">
      <div className="m-10 text-center">
        <p className="text-4xl font-bold">{encodedWord}&nbsp;</p>
      </div>
      <div>
        <form className="flex flex-col mx-auto space-y-2 items-center">
          <div>
            <input
              className="rounded-full p-2 text-black"
              value={word}
              onChange={(e) => {
                e.preventDefault();

                setWord(e.target.value);
                // setEncodedWord(getCode(e.target.value));
              }}
              type="text"
            />
          </div>
          <div className="flex flex-row mx-auto space-x-2">
            <button
              className="rounded-full p-2 bg-slate-400"
              onClick={(e) => {
                e.preventDefault();

                // Reverse the word and code
                setWord(word.split("").reverse().join(""));
              }}
            >
              Reverse <i className="fa-solid fa-rotate"></i>
            </button>
            <button
              className="rounded-full p-2 bg-red-300"
              onClick={(e) => {
                e.preventDefault();

                clear();
              }}
            >
              Clear Word <i className="fa-solid fa-eraser"></i>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
