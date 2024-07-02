"use client";
import { useState } from "react";
import "./Books.css";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/db";

export default function NewBook() {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    try {
      setImage(url);
      console.log(image);
    } catch (error) {
      console.error("Image url must start with https://");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "books"), {
        title: title,
        description: description,
        image: image,
        numberOfPages: numberOfPages,
        pagesRead: 0,
        notes: "",
      });
      location.reload();
      console.log("Doc added", docRef);
    } catch (error) {
      console.error("Error adding doc", error);
    }
    setLoading(false);
  };
  return (
    <div className="w-full h-auto p-5 trans">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1>New Book</h1>
          {image ? (
            <div className="flex gap-2 items-center">
              <Image src={image} alt="#" width={60} height={50} />
              <button
                className="bg-blue-700 rounded-md hover:bg-blue-500 p-2 text-white h-10"
                onClick={() => setImage("")}
              >
                Reset
              </button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Enter image url..."
                className="p-2 rounded-md text-black"
                value={url ? url : ""}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                className="t bg-blue-700 p-2 rounded-sm hover:bg-blue-500 "
                onClick={handleClick}
              >
                Set Image
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h1>Title</h1>
          <input
            type="text"
            placeholder="Set title..."
            className="p-2 rounded-md text-black"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1>Number of pages</h1>
          <input
            type="number"
            placeholder="Set number of pages..."
            className="p-2 rounded-md text-black"
            min={0}
            onChange={(e) => setNumberOfPages(+e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1>Description</h1>
          <textarea
            placeholder="Set description..."
            className="p-2 rounded-md text-black"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <button
          className="bg-blue-700 hover:bg-blue-500 text-white p-2 rounded-md w-[20%]"
          type="button"
          onClick={handleSubmit}
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
