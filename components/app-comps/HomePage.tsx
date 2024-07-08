import Image from "next/image";
import Logo from "@/public/assets/icons/logo-full.svg";
import OnBoard from "@/public/assets/images/onboarding-img.png";

import Link from "next/link";
import { PatientForm } from "./forms/PatientForm";

export default function HomePage() {
  return (
    <section className="flex h-screen max-h-screen">
      <div className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[490px]">
          <Image
            src={Logo}
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
            alt="Logo"
          />
        </div>
        <PatientForm />
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
        src={OnBoard}
        height={1000}
        width={1000}
        alt="Patient"
        className="side-img max-w-[50%] "
      />
    </section>
  );
}
