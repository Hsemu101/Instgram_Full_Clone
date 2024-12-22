import React from "react";

function PhotosProfile({ photoCollection }) {
  console.log("Coming in from PHOTOS to show targetPhotos:", photoCollection);


  return (
    <>
      {Array.isArray(photoCollection) && photoCollection.length > 0 ? (
        <div className=" flex justify-center">
        <div className="flex-wrap flex gap-[2rem] lg:flex flex-row lg:flex-wrap lg:justify-start lg:-ml-[11rem]  mt-[5rem] sm:justify-center sm:flex sm:flex-row sm:ml-5  md:justify-center md:-ml-[25rem] max-w-[45%] xl:flex xl:justify-start pb-8  ">
            {photoCollection?.map(Pictures=>(
                <img className=" flex flex wrap w-[30%]" key={`${Pictures.docId}`} src={Pictures.imageSrc} alt="" />
            ))}
          <img src="" alt="" />
        </div>
        </div>
      ) : null}
    </>
  );
}

export default PhotosProfile;
