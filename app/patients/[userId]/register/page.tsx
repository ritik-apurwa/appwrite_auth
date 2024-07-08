
import RegisterForm from "@/components/app-comps/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register =  async ({params:{userId}}:SearchParamProps) => {
    const user = await getUser(userId)
  return (
    <section className="flex h-screen max-h-screen">
      <div className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[490px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
            alt="Logo"
          />
        </div>

        <RegisterForm user={user} />
        <div className="mt-20 flex justify-between text-14-regular ">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2022 StarMarketing
          </p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </div>
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="Patient"
        className="side-img max-w-[390px] "
      />
    </section>
  );
};

export default Register;
