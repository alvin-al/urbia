"use client";
import { React } from "react";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../../src/components/ui/button";
import arrow from "@/../../public/icons/arrow-icon.svg";

function ContactForm() {
  const [state, handleSubmit] = useForm("myzgzong");
  if (state.succeeded) {
    return (
      <p className='w-48 font-medium'>
        Terimakasih! <br />
        <br />
        Anda akan mendapatkan balasan email dari kami, segera.
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      <label htmlFor='email'></label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='Silahkan tulis email anda'
        className='w-full border-b-2 border-gray-800 h-8 p-4 mb-2 focus:outline-none'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        id='message'
        name='message'
        placeholder='Beritahu kami projek atau apapun yang bisa kami kontribusikan untuk Anda'
        className='flex w-full h-64 placeholder:text-wrap placeholder:text-start mb-4 text-start border-b-2 border-gray-800 p-4 focus:outline-none'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        type='submit'
        className='hover:bg-gray-200 w-fit flex gap-2 items-center self-center px-4 py-2 hover:rounded-full border-2 rounded-full border-black xl:self-start'
        disabled={state.submitting}
      >
        <p className='hover:underline hover:underline-offset-2'>
          Let’s Collaborate
        </p>
        <div className='w-12 '>
          <Image src={arrow} alt='arrow-icon' className='' />
        </div>
      </button>
    </form>
  );
}

export default ContactForm;
