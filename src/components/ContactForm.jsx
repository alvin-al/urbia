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
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'></label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='Silahkan tulis email anda'
        className='w-full border-b-2 border-gray-800 h-8 p-4 mb-2'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        id='message'
        name='message'
        placeholder='Beritahu kami projek atau apapun yang bisa kami kontribusikan untuk Anda'
        className='flex w-full h-64 placeholder:text-wrap placeholder:text-start mb-2 text-start border-b-2 border-gray-800 p-4'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        type='submit'
        className='hover:bg-gray-200 w-fit flex gap-2 items-center px-4 py-2 hover:rounded-full'
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
