"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "./Books.css";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/db";

type Book = {
  id: string;
  image: string;
  title: string;
  description: string;
  numberOfPages: number;
  pagesRead: number;
  notes: string;
};

export default function Book({
  id,
  image,
  title,
  description,
  numberOfPages,
  pagesRead,
  notes,
}: Book) {
  const [active, setActive] = useState(false);
  const [newNotes, setNewNotes] = useState(notes);
  const [newPgRead, setNewPgRead] = useState(pagesRead);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await deleteDoc(doc(db, "books", id))
      .then(() => {
        console.log("Document deleted");
        location.reload();
      })
      .catch((e) => console.error("Deletion error", e));
    setLoading(false);
  };

  const handleUpdate = async () => {
    if (numberOfPages < newPgRead) {
      alert(
        `Number of pages read can't be a number larger than: ${numberOfPages}`
      );
      return false;
    }
    setLoading(true);
    await setDoc(
      doc(db, "books", id),
      {
        pagesRead: newPgRead,
        notes: newNotes,
      },
      { merge: true }
    )
      .then(() => {
        console.log("Document updated");
        location.reload();
      })
      .catch((e) => console.error("Update error", e));
    setLoading(false);
  };
  return (
    <div className="w-full h-200px p-5 flex flex-col gap-5 rounded-md trans">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image src={image} alt="#" width={60} height={50} />
          <h1>{title}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Number of pages read: {pagesRead}</h2>
          <progress
            value={pagesRead}
            max={numberOfPages}
            className="h-[20px] w-full"
          ></progress>
        </div>
        <div>
          <ChevronDown
            className={`${
              active ? " rotate-180" : ""
            } cursor-pointer transition-all`}
            onClick={() => setActive(!active)}
          />
        </div>
      </div>
      <div
        className={`${
          active ? "" : "hidden"
        } w-full h-auto  flex flex-col gap-5`}
      >
        <div className="g">
          <h1>Description: </h1>
          <h2>{description}</h2>
        </div>
        <div className="g">
          <h1>Pages read:</h1>
          <input
            type="number"
            placeholder={pagesRead.toString()}
            value={newPgRead}
            onChange={(e) => setNewPgRead(+e.target.value)}
            max={numberOfPages}
            min={0}
            className="trans p-2 rounded-md"
          />
        </div>
        <div className="g">
          <h1>Notes: </h1>
          <textarea
            draggable="false"
            className="trans p-2 rounded-md"
            value={newNotes}
            onChange={(e) => {
              setNewNotes(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex gap-5">
          <button
            type="button"
            className=" text-white bg-blue-700 rounded-md p-2 hover:bg-blue-500 transition-all"
            onClick={handleUpdate}
            disabled={loading}
          >
            Submit Changes
          </button>
          <button
            type="button"
            className=" text-white bg-red-700 rounded-md p-2 hover:bg-red-500 transition-all"
            disabled={loading}
            onClick={handleDelete}
          >
            Delete Book
          </button>
        </div>
      </div>
    </div>
  );
}
