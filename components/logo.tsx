import Image from "next/image";

export default function Logo() {
  return (
     <Image
      src='/ASLogo.png'
      alt="AdamSoftware-Logo"
      width={200} height={115}
     />
  )
}
