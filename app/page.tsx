'use client'
import Link from "next/link";
import React from "react";
import {Input} from "@nextui-org/react";
import {EyeSlashFilledIcon} from "@/icons/EyeSlashFilledIcon";
import {EyeFilledIcon} from "@nextui-org/shared-icons";
import {Button} from "@nextui-org/button";

export default function Home() {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

  return (
      <div className={'content-login-body'}>
        <div className="flex justify-center">
          <div className={'container-login max-lg:w-[90%] w-[30%]  p-4 rounded-md'}>
              <div className="header-login">
                  <div className="p-2 flex text-center	">
                      <Link href="#" className={'w-full'}>
                          <h1 className={'title-logo'}><span style={{color: 'blue'}}>Doc</span>Control</h1>
                      </Link>
                  </div>
                  <div className="form-login">
                      <Input
                          isReadOnly
                          type="email"
                          label="E-mail"
                          variant="bordered"
                          defaultValue="warleymendes@doccontrol.com"
                          className="max-w-full mt-[20px]"
                      />
                      <Input
                          label="Senha"
                          variant="bordered"
                          placeholder="Digite sua senha"
                          endContent={
                              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                  {isVisible ? (
                                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                  ) : (
                                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                  )}
                              </button>
                          }
                          type={isVisible ? "text" : "password"}
                          className="max-w-full mt-[20px]"
                      />
                      <div className="botton-form-login mt-[20px] max-w-full text-center">
                          <Button onClick={() => {window.location.href ='/document'}} color="primary" variant="solid" className={'max-w-full'}>
                              Fazer Login
                          </Button>
                      </div>
                  </div>
              </div>

          </div>
        </div>
      </div>
  )
      ;
}
