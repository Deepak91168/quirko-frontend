import React from "react";
import logo from "../../assets/images/logo.png";
import { BiMap } from "react-icons/bi";
import { useParams } from "react-router-dom";
export const Post = () => {
  const parms = useParams();
  const { id } = parms;
  const postID = id;
  //TODO: Create route to get post by ID and then fetch Post Data from API
  return (
    <div className="max-w-screen-xl mx-auto mt-4 ">
      <div>
        <div className="flex flex-col items-center p-4">
          <p>Published on September 7, 2023</p>
          <h1 className="font-extrabold text-2xl text-blue-600">
            Learn how to get started with custom sections using the Flowbite
            Blocks
          </h1>
        </div>
        <div>
          <hr className="my-4" />
          {/* <div className="p-2 pl-4 text-sm">
            <p className="mb-2">
              By <span className="font-bold"> Deepak Singh </span>
            </p>
          </div> */}
        </div>
      </div>

      <div className="flex space-x-2">
        <div className="h-auto max-w-[75%] pl-4 border-[0.5px] rounded-md shadow-md">
          <p className="text-sm pt-4 px-6 pl-0 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet elit nec felis consectetur vestibulum. Sed sed fermentum
            tellus, non tristique turpis. Integer condimentum pretium massa,
            vitae maximus sem. Sed et orci rhoncus mauris vestibulum lobortis.
            Vivamus vel semper lacus, et luctus mi. Suspendisse auctor libero
            dolor, quis convallis tellus ornare et. Praesent quis tincidunt
            quam, quis venenatis sapien. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Quisque pulvinar ex eget nibh pellentesque
            blandit. Curabitur auctor dolor leo. Pellentesque ut ullamcorper
            quam. Nullam lobortis orci in felis varius imperdiet. Integer
            volutpat risus in sem facilisis congue. Maecenas malesuada in libero
            a placerat. Nulla eu euismod magna, id vulputate neque. Nullam quis
            augue ultrices, eleifend ex in, ullamcorper diam. Duis condimentum
            nisl semper mauris lobortis porta. Vivamus et sapien in leo dictum
            porta at in ante. Donec eleifend tellus mauris, ut vestibulum est
            bibendum ut. Nam posuere vestibulum risus eu rutrum. Morbi mattis
            turpis mi, a tristique augue aliquam gravida. Integer a fringilla
            nisl, eu tristique velit. Nullam nec lectus vitae ante efficitur
            gravida. Suspendisse sed eleifend dolor. Aenean vel volutpat felis.
            Curabitur eu interdum metus. Etiam cursus placerat elit, vitae
            vulputate ipsum. Mauris sit amet cursus magna. Suspendisse potenti.
            Nullam nec dictum eros, sed sodales urna. Integer eget massa tellus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec libero sit amet sapien interdum lobortis eu eget ante. Proin nec
            maximus nunc. Donec sed eleifend diam. Maecenas porttitor quam eu
            bibendum lobortis. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum nec fermentum
            magna, et tempor sem. Curabitur semper mauris et augue bibendum, non
            laoreet velit interdum.
          </p>
        </div>

        <div className="h-auto w-full pl-4 ">
          <div className="border-[0.5px] rounded-md shadow-md mb-4 p-4">
            <p className="text-blue-700 font-extrabold">Author</p>
            <div className="flex items-center mt-2">
              <img
                src={logo}
                className="rounded-full h-12 w-12 border border-blue-400"
              />

              <div className="ml-4">
                <p className="text-sm font-extrabold">Deepak Singh</p>
                <p className="text-[10px] font-extralight">542K Followers</p>
                <p className="text-[12px] flex items-center text-slate-800">
                  <BiMap className=" text-slate-800" />
                  <p>Agra, Uttar Pradesh India</p>
                </p>
              </div>
            </div>
          </div>
          <div className="border-[0.5px] rounded-md shadow-md pt-4 p-4">
            <p className="font-bold text-blue-700 pb-2">Recent Posts</p>
            <ul className="text-[14px] text-slate-700">
              <li className="hover:cursor-pointer">
                This is Recent Post 1 This is Recent Post 1
              </li>
              <li>This is Recent Post 2</li>
              <li>This is Recent Post 3</li>
              <li>This is Recent Post 4</li>
              <li>This is Recent Post 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
