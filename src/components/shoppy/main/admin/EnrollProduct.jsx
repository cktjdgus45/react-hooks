import React from "react";
import { useForm } from "react-hook-form";
import Cloudinary from "../../service/cloud";
import { v4 as uuidv4 } from 'uuid';
import DB from '../../service/firebase/database';

const EnrollProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
    watch
  } = useForm();
  const onSubmit = async (data) => {
    //fetch cloudinary upload api.
    const url = await new Cloudinary().uploadImage(data.file);
    //firebase DB 추가.
    const product = { ...data, url, id: uuidv4() };
    new DB().create(product);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="mb-4 text-2xl">새로운 제품 등록</h3>
      {isSubmitted && <span>성공적으로 제품이 등록되었습니다.</span>}
      {watch('file') && (
        <div className='w-52 h-64 mb-7'>
          <img className='w-full h-full bg-center bg-contain' alt="preview" src={URL.createObjectURL(watch('file')[0])}></img>
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full h-full flex flex-col items-center"
      >
        <input
          className="w-full border-solid border-2 border-slate-300 p-2 mb-4"
          type="file"
          accept="image/*"
          {...register("file", { required: true })}
        />
        <input
          className="w-full border-solid border-2 border-slate-300 p-2 mb-4"
          placeholder="제품명"
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="w-full border-solid border-2 border-slate-300 p-2 mb-4"
          placeholder="가격"
          type="text"
          {...register("price", { required: true })}
        />
        <input
          className="w-full border-solid border-2 border-slate-300 p-2 mb-4"
          placeholder="카테고리"
          type="text"
          {...register("category", { required: true })}
        />
        <input
          className="w-full border-solid border-2 border-slate-300 p-2 mb-4"
          placeholder="제품설명"
          type="text"
          {...register("description", { maxLength: 20, required: true })}
        />
        <input
          className="w-full border-solid border-2 border-slate-300 p-2 mb-4"
          placeholder="옵션들 (콤마(,)로구분)"
          type="text"
          {...register("size", { maxLength: 20, required: true })}
        />
        <input
          className="w-full cursor-pointer text-lg bg-rose-400 text-white p-2 mb-4"
          type="submit"
          value="제품등록하기"
        />
      </form>
    </div>
  );
};

export default EnrollProduct;
