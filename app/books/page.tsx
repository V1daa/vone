//@ts-nocheck
"use client";
import { useEffect, useState } from "react";
import Book from "./(components)/Book";
import NewBook from "./(components)/NewBook";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/db";

export default function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    await getDocs(collection(db, "books")).then((quer) => {
      const newData = quer.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      //@ts-ignore
      setBooks(newData);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[80%] h-[80%] overflow-scroll p-10 flex flex-col justify-start gap-5">
        <NewBook />
        {books.map((item, i) => (
          <Book
            key={i}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            numberOfPages={item.numberOfPages}
            pagesRead={item.pagesRead}
            notes={item.notes}
          />
        ))}
      </div>
    </div>
  );
}
